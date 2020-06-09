import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import {
  useAppStyles,
  Recommendation,
  ShareButtons,
  ThankYouIcon,
} from '@elgatoylacaja/components'

import { Config } from '../data/config'
import { AppContext } from '../contexts/AppContext'

const Thanks = () => {
  const appStyles = useAppStyles()

  const {
    appState: { user },
  } = React.useContext(AppContext)
  const { accessToken } = user || { accessToken: null }

  return (
    <>
      <Grid container>
        <Typography variant="h1" className={appStyles.titleDisplay}>
          <ThankYouIcon /> <br />
          ¡Gracias por participar!
        </Typography>
        <Typography
          className={appStyles.textLight}
          style={{ marginTop: '25px' }}
        >
          Compartí para que seamos un montón haciendo ciencia colectiva.
        </Typography>
        <Typography
          className={appStyles.title}
          style={{ fontWeight: 400, marginTop: '25px' }}
        >
          Cuantas más personas participemos,{' '}
          <b>más y mejor vamos a entender y enfrentar este desafío.</b>
        </Typography>
        <ShareButtons
          EXPERIMENT_SHARE_TEXT={Config.EXPERIMENT_SHARE_TEXT}
          EXPERIMENT_URL={Config.EXPERIMENT_URL + '/#/login'}
        />
      </Grid>

      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          <Typography
            className={appStyles.title}
            style={{
              textAlign: 'center',
            }}
          >
            Seguí por acá
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Recommendation
            title={'Experimento A'}
            description={'Un experimento de prueba.'}
            imgUrl={
              'http://localhost:5000/common/images/recomendaciones/concienciaysustancia.png'
            }
            experimentUrl={`http://localhost:5000/experimento-a/`}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Thanks
