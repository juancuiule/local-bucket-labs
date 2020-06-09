import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { withRouter, RouteComponentProps } from 'react-router'

import { useAppStyles, Recommendation } from '@elgatoylacaja/components'
import api from '../api'
import { AuthContext } from '../contexts/AuthContext'
import { useLoader } from '@elgatoylacaja/hooks'

const Dashboard = (props: RouteComponentProps) => {
  const appStyles = useAppStyles()

  const {
    authState: { experiment },
  } = React.useContext(AuthContext)

  const { startLoading, stopLoading } = useLoader()

  React.useEffect(() => {
    if (experiment !== undefined && experiment !== '') {
      startLoading()
    } else {
      stopLoading()
    }
  }, [experiment])

  return (
    <>
      <Typography variant="h1" className={appStyles.titleDisplay}>
        Sumate a hacer ciencia colectiva
      </Typography>

      <div>
        <span
          onClick={() => {
            api.logout()
            window.location.reload()
          }}
        >
          Logout
        </span>
      </div>

      <Typography variant="h1" className={appStyles.title}>
        Experimentos
      </Typography>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={6} sm={6}>
          <Recommendation
            title={'Experimento A'}
            description={'Un experimento de prueba A.'}
            imgUrl={
              'http://localhost:5000/common/images/recomendaciones/concienciaysustancia.png'
            }
            experimentUrl={'http://localhost:5000/experimento-a'}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Recommendation
            title={'Experimento B'}
            description={'Un experimento de prueba B.'}
            imgUrl={
              'http://localhost:5000/common/images/recomendaciones/voscomoestas.png'
            }
            experimentUrl={'http://localhost:5000/experimento-b'}
          />
        </Grid>
      </Grid>

      <Typography variant="h1" className={appStyles.title}>
        Diarios de investigación
      </Typography>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={6} sm={6}>
          <Recommendation
            title={'Meditacion Pandemia y Sustancia'}
            description={'Algo algo'}
            imgUrl={
              'http://localhost:5000/common/images/diarios/diario_concienciaysustancia.png'
            }
            experimentUrl={
              'https://elgatoylacaja.com.ar/investigacion/meditacion-pandemia-y-sustancia/'
            }
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Recommendation
            title={'Resultados emocionantes'}
            description={
              '¿Qué estamos aprendiendo a partir del experimento de emociones en rostros?'
            }
            imgUrl={
              'http://localhost:5000/common/images/diarios/diario_emociones.jpg'
            }
            experimentUrl={
              'https://elgatoylacaja.com/investigacion/resultados-emocionantes/'
            }
          />
        </Grid>
      </Grid>
    </>
  )
}

export default withRouter(Dashboard)
