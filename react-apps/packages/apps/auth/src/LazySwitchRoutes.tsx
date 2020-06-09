import React, { Suspense } from 'react'

import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'

import { Loading } from '@elgatoylacaja/components'
import { AuthContext, AuthContextData } from './contexts/AuthContext'
import api from './api'
import { useLoader } from '@elgatoylacaja/hooks'

const Login = React.lazy(() =>
  import(/* webpackChunkName: "Login" */ './views/Login')
)
const Signup = React.lazy(() =>
  import(/* webpackChunkName: "Signup" */ './views/Signup')
)
const NewPassword = React.lazy(() =>
  import(/* webpackChunkName: "NewPassword" */ './views/NewPassword')
)
const ResetPassword = React.lazy(() =>
  import(/* webpackChunkName: "ResetPassword" */ './views/ResetPassword')
)

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ './views/Dashboard')
)

type WrappedComponentType =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>

const condition = (appState: AuthContextData) => (
  f: (x: AuthContextData) => boolean
) => (r: string) => (WrappedComponent: WrappedComponentType) => (
  p: RouteComponentProps
) => {
  return f(appState) ? <WrappedComponent {...p} /> : <Redirect to={r} {...p} />
}

const AuthRoutes: Array<[string, React.ComponentType<any>]> = [
  ['/login', Login],
  ['/signup', Signup],
  ['/reset', ResetPassword],
  ['/new-password', NewPassword],
]

const AuthCheck = (props: RouteComponentProps) => {
  const { authState, dispatch } = React.useContext(AuthContext)
  const { startLoading, stopLoading } = useLoader()

  React.useEffect(() => {
    async function checkRefreshToken() {
      try {
        const result = await api.refreshToken()

        const { experiment } = authState
        startLoading()
        if (experiment !== undefined && result.accessToken !== '') {
          const url = `http://localhost:5000/${experiment}/#/auth-check?accessToken=${result.accessToken}`
          window.location.replace(url)
        } else if (result.accessToken !== '') {
          dispatch({
            type: 'LOGIN',
            accessToken: result.accessToken,
          })
          stopLoading()
          props.history.push('/dashboard')
        } else {
          stopLoading()
          props.history.push('/login')
        }
      } catch {
        stopLoading()
        props.history.push('/login')
      }
    }
    checkRefreshToken()
  }, [])

  return <Loading loading fixed />
}

const LazySwitchRoutes = withRouter((props: RouteComponentProps) => {
  const { authState, dispatch } = React.useContext(AuthContext)
  const { startLoading, stopLoading } = useLoader()

  React.useEffect(() => {
    const search = props.location.search
    const params = new URLSearchParams(search)
    const experiment = params.get('experiment')
    if (experiment !== null) {
      dispatch({
        type: 'SAVE_REDIRECT_EXPERIMENT',
        experiment,
      })
    }
  }, [dispatch, props.location.search])

  React.useEffect(() => {
    const { auth, experiment, accessToken } = authState
    startLoading()
    if (auth && experiment !== undefined && accessToken !== undefined) {
      const url = `http://localhost:5000/${experiment}/#/auth-check?accessToken=${accessToken}`
      window.location.replace(url)
    } else {
      stopLoading()
    }
  }, [authState])

  const stateCondition = condition(authState)

  const requireAuth = stateCondition(state => state.auth)('/auth-check')
  const notAuth = stateCondition(state => !state.auth)('/dashboard')

  return (
    <Switch>
      <Redirect exact from="/" to="/auth-check" />
      <Route path="/auth-check" component={AuthCheck} />
      <Suspense fallback={<Loading loading fixed />}>
        {AuthRoutes.map(([route, component]) => (
          <Route
            key={route}
            path={route}
            exact
            component={notAuth(component)}
          />
        ))}
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </Suspense>
    </Switch>
  )
})

export default LazySwitchRoutes
