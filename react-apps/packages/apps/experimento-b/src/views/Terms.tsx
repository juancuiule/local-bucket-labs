import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import {
  Button,
  Checkbox,
  ErrorMessage,
  useAppStyles,
} from '@elgatoylacaja/components'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
// import { gatoAPI } from '@elgatoylacaja/utils'

const Terms = (props: RouteComponentProps) => {
  const appStyles = useAppStyles()
  const {
    dispatch,
    appState: { user },
  } = React.useContext(AppContext)

  const [termsChecked, setTermsChecked] = React.useState(false)
  const [newsChecked, setNewsChecked] = React.useState<boolean>(() => {
    if (user !== undefined) {
      return user.prevAllowsNews === null ? true : user.prevAllowsNews
    } else {
      return false
    }
  })

  const [submitCount, setSubmitCount] = React.useState(0)
  const next = async () => {
    setSubmitCount(x => x + 1)
    if (termsChecked) {
      // await gatoAPI.sendAllowsNews(newsChecked ? 1 : 0, user?.accessToken!)
      dispatch({ type: 'REGISTER_VISIT', route: '/terms' })
      dispatch({
        type: 'ACCEPT_TERMS',
        allowsNews: newsChecked,
      })
      props.history.push('/pregunta')
    }
  }

  return (
    <>
      <Typography variant="h1" className={appStyles.titleDisplay}>
        Antes de empezar (experimento B)
      </Typography>

      <Typography className={appStyles.text} style={{ marginTop: '25px' }}>
        El objetivo de este experimento es aprender más sobre los factores que
        afectan la forma en la que reconocemos emociones en los rostros de las
        personas.
      </Typography>

      <Typography className={appStyles.text} style={{ marginTop: '25px' }}>
        Vas a ver 12 fotos de pares de ojos. Para cada uno, elegí y hace click
        sobre la palabra que mejor describa lo que la persona en la fotografía
        está pensando o sintiendo. Las definiciones de estas palabras están
        estandarizadas y se pueden ver durante el experimento.
      </Typography>

      <Typography className={appStyles.text} style={{ marginTop: '25px' }}>
        El experimento completo dura unos 5 minutos. Tu participación es
        absolutamente voluntaria y te podés bajar en cualquier momento. No
        esperamos ningún tipo de inconveniente o riesgo por participar. Los
        datos son confidenciales y anónimos.
      </Typography>

      <Typography className={appStyles.text} style={{ marginTop: '25px' }}>
        Si tenés cualquier tipo de duda, nos mandás un mail a{' '}
        <a className={appStyles.link} href="mailto:labs@elgatoylacaja.com">
          labs@elgatoylacaja.com
        </a>
        . Si la pregunta se nos escapa, o querés hacer otro tipo de comentario,
        tené en mente que podés contactarte con el Comité de Ética en
        Investigación, Centro de Educación Médica e Investigaciones Clínicas
        “Norberto Quirno”. Hospital Universitario sede Saavedra, Av. Galván
        4102. Ciudad de Buenos Aires, (C1425DQK) - República Argentina. Tel:
        5299-0100, interno 2879.
      </Typography>

      <Typography className={appStyles.text} style={{ marginTop: '25px' }}>
        Apenas esté el análisis de estos datos vamos (como siempre) a publicar
        los resultados en{' '}
        <a
          target="_blank"
          className={appStyles.link}
          href="https://elgatoylacaja.com.ar/"
          rel="noopener noreferrer"
        >
          www.elgatoylacaja.com
        </a>{' '}
        para conversar sobre lo que aprendimos gracias a tu participación.
      </Typography>

      <Grid container className={appStyles.mobileAlignBottom}>
        <Checkbox
          checked={termsChecked}
          onChange={(e, _) => setTermsChecked(e.target.checked)}
          id="terminos-checkbox"
          label="Acepto participar de esta encuesta de manera voluntaria y que los datos sean usados para investigación."
        />
        {user === undefined || user.prevAllowsNews ? null : (
          <Checkbox
            checked={newsChecked}
            onChange={(e, _) => setNewsChecked(e.target.checked)}
            id="news-checkbox"
            label="Quiero recibir novedades sobre los resultados de estas investigaciones y nuevos experimentos."
          />
        )}
        <Button
          unactive={!termsChecked}
          color="primary"
          label="Empezar"
          onClick={next}
        />
        <ErrorMessage
          condition={submitCount > 0 && !termsChecked}
          message={`Es necesario aceptar los términos para continuar`}
        />
      </Grid>
    </>
  )
}

export default withRouter(Terms)
