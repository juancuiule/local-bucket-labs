import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'

import {
  HashRouter as Router,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'

import { Loading } from '@elgatoylacaja/components'

import {
  useLoader,
  useWindowSize,
  LoadingProvider,
  useScrollTop,
} from '@elgatoylacaja/hooks'

import SwitchRoutes from './LazySwitchRoutes'

import LOGO_IMG from './logo.png'
import { AuthContextProvider } from './contexts/AuthContext'

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

const Loader = () => {
  const { loading } = useLoader()
  return <Loading fixed loading={loading} />
}

const Container: React.FC<RouteComponentProps> = props => {
  const classes = useStyles()
  useScrollTop(props.location.pathname)

  const { height } = useWindowSize()

  const minHeight = height !== undefined ? `${height}px` : `100vh`

  return (
    <>
      <img src={LOGO_IMG} alt="Logo gato" className={classes.logo} />
      <Grid
        container
        justify="center"
        style={{
          minHeight: `calc(${minHeight} - 84px)`,
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
      <LoadingProvider>
        <AuthContextProvider>
          <Router hashType="slash">
            <Loader />
            <FinalContainer>
              <SwitchRoutes />
            </FinalContainer>
          </Router>
        </AuthContextProvider>
      </LoadingProvider>
    </div>
  )
}

export default App
