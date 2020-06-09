import React from 'react'

import { makeStyles, Grid } from '@material-ui/core'

import {
  HashRouter as Router,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'

import { AppContextProvider } from './contexts/AppContext'

import { Loading } from '@elgatoylacaja/components'

import {
  useLoader,
  useWindowSize,
  LoadingProvider,
  useGatoLogo,
  GatoLogoProvider,
  useScrollTop,
} from '@elgatoylacaja/hooks'

// import { analyticsUtils } from '@elgatoylacaja/utils'

import SwitchRoutes from './LazySwitchRoutes'

import LOGO_IMG from './logo.png'

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    padding: '0',
    minHeight: '100vh',
  },
  container: {
    padding: 24,
    paddingTop: 0,
    position: 'relative',
    width: '800px',
    '@media only screen and (max-width : 800px)': {
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    height: 60,
    display: 'block',
    margin: '0px auto',
    paddingTop: '24px',
  },
  labs: {
    display: 'block',
    width: '250px',
    margin: '30px auto',
    '@media only screen and (max-width : 800px)': {
      display: 'none',
    },
  },
})

// const Analytics = withRouter((props: RouteComponentProps) => {
//   const [visited, setVisited] = React.useState<string[]>([])
//   const { pathname } = props.location
//   const { origin, pathname: windowPathname } = window.location

//   React.useEffect(() => {
//     if (!visited.includes(pathname)) {
//       analyticsUtils.REGISTER_VISIT(`${origin}${windowPathname}#${pathname}`)
//       setVisited(paths => [...paths, pathname])
//     }
//   }, [pathname, visited, origin, windowPathname])

//   React.useEffect(() => {
//     window.onbeforeunload = (event: BeforeUnloadEvent) => {
//       event.preventDefault()
//       analyticsUtils.REGISTER_LEFT(`${origin}${windowPathname}#${pathname}`)
//     }
//   }, [pathname, origin, windowPathname])

//   return <></>
// })

const Loader = () => {
  const { loading } = useLoader()
  return <Loading fixed loading={loading} />
}

const Container: React.FC<RouteComponentProps> = props => {
  const classes = useStyles()

  useScrollTop(props.location.pathname)

  const { shouldShowGatoLogo } = useGatoLogo(
    ['/terms', '/pregunta', '/thanks'],
    props.location.pathname
  )

  // const [shareAnalytics, setShareAnalytics] = React.useState(false)

  // React.useEffect(() => {
  //   if (!shareAnalytics) {
  //     const search = props.location.search
  //     const params = new URLSearchParams(search)
  //     const share = params.get('share')
  //     const shareServices = ['facebook', 'twitter', 'whatsapp']
  //     if (share !== null && shareServices.includes(share)) {
  //       analyticsUtils.VISIT_BY_SHARE(
  //         share as 'whatsapp' | 'twitter' | 'facebook'
  //       )
  //       setShareAnalytics(true)
  //     }
  //   }
  // }, [shareAnalytics, props.location.search])

  const { height } = useWindowSize()

  const minHeight = height !== undefined ? `${height}px` : `100vh`

  return (
    <>
      {shouldShowGatoLogo ? (
        <img src={LOGO_IMG} alt="Logo gato" className={classes.logo} />
      ) : null}
      <Grid
        container
        justify="center"
        style={{
          minHeight: shouldShowGatoLogo
            ? `calc(${minHeight} - 84px)`
            : `calc(${minHeight})`,
        }}
      >
        <Grid item className={classes.container}>
          {props.children}
        </Grid>
      </Grid>
    </>
  )
}

const FinalContainer = withRouter(Container)

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <AppContextProvider>
        <LoadingProvider>
          <GatoLogoProvider>
            <Router hashType="slash">
              {/* {process.env.REACT_APP_ENVIRONMENT === 'production' && (
                <Analytics />
              )} */}
              <Loader />
              <FinalContainer>
                <SwitchRoutes />
              </FinalContainer>
            </Router>
          </GatoLogoProvider>
        </LoadingProvider>
      </AppContextProvider>
    </div>
  )
}

export default App
