import React, { Suspense } from 'react'

import { Switch, RouteComponentProps, Route, Redirect } from 'react-router-dom'

import { compose } from 'lodash/fp'
import { AppContext, AppContextData } from './contexts/AppContext'
import { Loading } from '@elgatoylacaja/components'
import api from './api'

const Terms = React.lazy(() =>
  import(/* webpackChunkName: "Terms" */ './views/Terms')
)
const Pregunta = React.lazy(() =>
  import(/* webpackChunkName: "Pregunta" */ './views/Pregunta')
)
const Thanks = React.lazy(() =>
  import(/* webpackChunkName: "Thanks" */ './views/Thanks')
)

type WrappedComponentType =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>

const condition = (appState: AppContextData) => (
  f: (x: AppContextData) => boolean
) => (r: string) => (WrappedComponent: WrappedComponentType) => (
  p: RouteComponentProps
) => {
  return f(appState) ? <WrappedComponent {...p} /> : <Redirect to={r} {...p} />
}

type LinkedRouteConfig = { prev?: string; route: string; next?: string }

class LinkedRoutes {
  paths: Array<[string, React.ComponentType<any>]>

  constructor(paths: Array<[string, React.ComponentType<any>]>) {
    this.paths = paths
  }

  config = () =>
    this.paths.map(([path, component], index, list): [
      LinkedRouteConfig,
      React.ComponentType
    ] => [
      {
        prev: index === 0 ? undefined : list[index - 1][0],
        route: path,
        next: index === list.length - 1 ? undefined : list[index + 1][0],
      },
      component,
    ])
}

const ExperimentRoutes = new LinkedRoutes([
  ['/terms', Terms],
  ['/pregunta', Pregunta],
  ['/thanks', Thanks],
]).config()

const AuthCheck = (props: RouteComponentProps) => {
  const { dispatch } = React.useContext(AppContext)

  React.useEffect(() => {
    function login(accessToken: string) {
      dispatch({
        type: 'LOGIN',
        user: {
          accessToken,
          experimentDone: false,
          prevAllowsNews: false,
        },
      })
      props.history.push('/terms')
    }

    async function refreshTokenLogin() {
      const { accessToken } = await api.refreshToken()
      if (accessToken !== '') {
        login(accessToken)
      } else {
        window.location.replace(
          `http://localhost:5000/auth/#/auth-check?experiment=experimento-a`
        )
      }
    }

    async function checkRedirectLogin() {
      const search = props.location.search
      const params = new URLSearchParams(search)
      const accessToken = params.get('accessToken')
      if (accessToken === null) {
        refreshTokenLogin()
      } else {
        try {
          const { logged } = await api.check(accessToken)
          if (logged) {
            login(accessToken)
          }
        } catch (error) {
          console.log(error)
          refreshTokenLogin()
        }
      }
    }
    checkRedirectLogin()
  }, [])

  return <Loading loading fixed />
}

const LazySwitchRoutes = () => {
  const { appState } = React.useContext(AppContext)

  const stateCondition = condition(appState)

  const requireAuth = stateCondition(state => state.auth)('/auth-check')

  const alwaysTrue = stateCondition(_ => true)('')

  const notDone = stateCondition(
    state => state.user !== undefined && !state.user.experimentDone
  )('/done')

  const visited = (r: string) =>
    stateCondition(state => state.visited.includes(r))(r)

  const notVisited = (r: string) =>
    stateCondition(state => !state.visited.includes(r))

  const requirePrevious = ({ prev, route, next }: LinkedRouteConfig) =>
    compose(
      requireAuth,
      notDone,
      prev !== undefined ? visited(prev) : alwaysTrue,
      next !== undefined ? notVisited(route)(next) : alwaysTrue
    )

  return (
    <Switch>
      <Redirect from="/" exact to="/auth-check" />
      <Route path="/auth-check" exact component={AuthCheck} />
      <Suspense fallback={<Loading loading fixed />}>
        {ExperimentRoutes.map(([config, component]) => (
          <Route
            key={config.route}
            path={config.route}
            exact
            render={requirePrevious(config)(component)}
          />
        ))}
      </Suspense>
    </Switch>
  )
}

export default LazySwitchRoutes
