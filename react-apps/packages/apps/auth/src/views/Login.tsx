import React from 'react'
import {
  Divider,
  IconButton,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core'

import { withRouter, RouteComponentProps } from 'react-router'

import {
  Button,
  TextField,
  Link,
  ErrorMessageB,
  useAppStyles,
  EyeIcon,
  EyeSlashIcon,
  FacebookIcon,
  GoogleIcon,
  ChevronIconUp,
  ChevronIconDown,
} from '@elgatoylacaja/components'

import { FormikHelpers, Formik } from 'formik'
import { useLoader } from '@elgatoylacaja/hooks'

import * as Yup from 'yup'

import { analyticsUtils, loginUtils } from '@elgatoylacaja/utils'
import { AuthContext } from '../contexts/AuthContext'
import api from '../api'

const { GoogleLoginConfig, FacebookLogin } = loginUtils

export type LoginServices = 'email' | 'facebook' | 'google'

const useStyles = makeStyles({
  servicesLoginContainer: {
    justifyContent: 'space-between',
    marginTop: '10px',
    '@media only screen and (max-width : 600px)': {
      flexDirection: 'column',
    },
  },
  googleBtn: {
    height: '60px',
    color: '#979797',
    backgroundColor: 'white',
    marginLeft: '16px',
    border: '1px solid #979797',
    borderRadius: '3px',
    maxHeight: '60px',
    padding: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    textTransform: 'none',
    fontWeight: 400,
    flex: 1,
    '@media only screen and (max-width : 600px)': {
      marginLeft: '0px',
      marginTop: '10px',
      flex: 'initial',
    },
  },
  fbBtn: {
    height: '60px',
    color: 'white',
    backgroundColor: '#4267B2',
    marginRight: '16px',
    borderRadius: '3px',
    maxHeight: '60px',
    padding: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    textTransform: 'none',
    fontWeight: 400,
    flex: 1,
    '@media only screen and (max-width : 600px)': {
      marginRight: '0px',
      flex: 'initial',
    },
  },
  btnLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnIcon: {
    width: '25px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: '15px',
  },
  btnText: {
    lineHeight: '24px',
    fontSize: '18px',
    '@media only screen and (max-width : 600px)': {
      width: '100%',
    },
  },
  eyeIcon: {
    padding: '5px',
  },
  footerContainer: {
    backgroundColor: 'var(--gray-light)',
    height: '96px',
    width: '100vw',
    position: 'absolute',
    bottom: '0',
    '@media only screen and (min-width: 800px)': {
      left: 'calc((100vw - 800px) / (-2))',
    },
    '@media only screen and (max-width: 800px)': {
      position: 'relative',
      marginLeft: '-24px',
      marginBottom: '-24px',
      marginTop: 'auto',
      height: 'fit-content',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '15px',
  },
  cardContainer: {
    '@media only screen and (min-width: 800px)': {
      marginBottom: 'calc(96px - 24px + 37px) !important',
    },
  },
  footerText: {
    fontSize: '14px !important',
    lineHeight: '24px !important',
    padding: '0 24px',
    marginTop: '5px',
    boxSizing: 'border-box',
    maxWidth: '800px',
    '@media only screen and (max-width: 800px)': {
      marginTop: '10px',
    },
  },
})

interface FormValues {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('No es un email válido')
    .required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido'),
})

const Login = (props: RouteComponentProps) => {
  const classes = useStyles()
  const appStyles = useAppStyles()
  const { startLoading, stopLoading } = useLoader()

  const [socialServiceError, setSocialServiceError] = React.useState('')

  const { dispatch } = React.useContext(AuthContext)

  const handleLogin = async (service: LoginServices, accessToken: string) => {
    console.log(`Login correcto: ${service}, token: ${accessToken}`)
    dispatch({ type: 'LOGIN', accessToken })
    stopLoading()
  }

  React.useEffect(() => {
    analyticsUtils.EVENT({
      category: 'Login',
      action: `Visit Login`,
    })
  }, [])

  React.useEffect(() => {
    const onGoogleFailure = (error: any) => {
      console.error(error)
      stopLoading()
      setSocialServiceError('Hubo un error al ingresar con google')
    }

    // const onGoogleSuccess = async (googleUser: gapi.auth2.GoogleUser) => {
    const onGoogleSuccess = async () => {
      // const authResponse = googleUser.getAuthResponse()
      // try {
      //   // const {
      //   //   data: { accessToken },
      //   // } = await gatoAPI.googleLogin({
      //   //   token: authResponse.id_token,
      //   // })
      //   // handleLogin('google', accessToken)
      // } catch (error) {
      //   stopLoading()
      //   console.error(error)
      //   setSocialServiceError('Hubo un error al ingresar con google')
      // }
    }

    GoogleLoginConfig(
      document.getElementById('googleSignInButton'),
      onGoogleSuccess,
      onGoogleFailure
    )
    // eslint-disable-next-line
  }, [])

  const initialValues: FormValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (
    { email, password }: FormValues,
    { setFieldError }: FormikHelpers<FormValues>
  ) => {
    analyticsUtils.CLICK_SERVICE('email')
    startLoading()
    try {
      // const {
      //   data: { accessToken },
      // } = await gatoAPI.emailLogin({
      //   email,
      //   password,
      // })
      const { accessToken } = await api.login({
        email,
        password,
      })
      handleLogin('email', accessToken)
    } catch ({ status, error }) {
      stopLoading()
      setSocialServiceError('')
      if (status === 403) {
        analyticsUtils.ERROR_SERVICE('email', '(password)')
        setFieldError('password', 'Contraseña incorrecta')
      } else if (status === 404) {
        analyticsUtils.ERROR_SERVICE('email', '(no existe)')
        setFieldError('email', 'No existe un usuario con ese email')
      }
    }
  }

  const [rerequest, setRerequest] = React.useState(false)

  const facebookCallback = async (response: fb.StatusResponse) => {
    if (response.authResponse) {
      try {
        // const {
        //   data: { accessToken },
        // } = await gatoAPI.fbLogin({
        //   token: response.authResponse.accessToken,
        // })
        // handleLogin('facebook', accessToken)
      } catch (error) {
        console.error(error)
        stopLoading()
        setSocialServiceError(
          'Hubo un error al ingresar con facebook, al reintentar revisa los permisos necesarios'
        )
        setRerequest(true)
      }
    } else {
      console.error('User cancelled login or did not fully authorize.')
      stopLoading()
      setSocialServiceError(
        'Hubo un error al ingresar con facebook, al reintentar revisa los permisos necesarios'
      )
      setRerequest(true)
    }
  }

  const handleFacebook = () => {
    analyticsUtils.CLICK_SERVICE('facebook')
    startLoading()
    try {
      FacebookLogin(facebookCallback, rerequest)
    } catch (error) {
      stopLoading()
      console.log(error)
      // setSocialServiceError('Hubo un error al ingresar con facebook')
    }
  }

  const [showPassword, setShowPassword] = React.useState(false)

  const [showPorque, setShowPorque] = React.useState(false)
  const [sentAnalytics, setSentAnalytics] = React.useState(false)

  return (
    <>
      <div className={appStyles.hola} style={{}}>
        <span>¡Hola!</span>
      </div>
      <div
        className={appStyles.authCardContainer + ' ' + classes.cardContainer}
      >
        <Grid container style={{ marginTop: 10, flexDirection: 'column' }}>
          <Typography variant="h1" className={appStyles.titleDisplay}>
            Sumate a hacer ciencia colectiva
          </Typography>
          <Typography
            variant="body1"
            className={appStyles.link}
            onClick={() => {
              setShowPorque(b => !b)
              if (!sentAnalytics) {
                analyticsUtils.EVENT({
                  category: 'Auth Disclaimer',
                  action: `Click expand disclaimer`,
                })
                setSentAnalytics(true)
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            ¿Por qué tengo que iniciar sesión?{' '}
            <span
              style={{
                marginLeft: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {showPorque ? (
                <ChevronIconUp color="var(--primary)" />
              ) : (
                <ChevronIconDown color="var(--primary)" />
              )}
            </span>
          </Typography>
          <Typography
            variant="body1"
            className={appStyles.text}
            style={{
              transition: showPorque
                ? 'max-height 0.25s ease-in'
                : 'max-height 0.15s ease-out',
              overflow: 'hidden',
              maxHeight: showPorque ? '1000px' : '0px',
              marginBottom: '40px',
            }}
          >
            Es necesario iniciar sesión para evitar que repitas un experimento y
            tomemos una muestra dos veces. Todos los datos están anonimizados,
            son usados exclusivamente para investigación científica y son
            publicados de manera abierta y puestos a disposición de la comunidad
            científica conjuntamente con los papers.
          </Typography>
        </Grid>

        <Grid style={{ marginTop: 10 }}>
          <ErrorMessageB
            condition={socialServiceError !== ''}
            message={socialServiceError}
          />
          <Grid container className={classes.servicesLoginContainer}>
            <Button
              onClick={handleFacebook}
              className={classes.fbBtn}
              color="facebook"
              label={
                <div className={classes.btnLabel}>
                  <div className={classes.btnIcon}>
                    <FacebookIcon style={{ width: '100%' }} color="white" />
                  </div>
                  <span className={classes.btnText}>
                    Ingresar con <b>Facebook</b>
                  </span>
                </div>
              }
            />
            <Button
              onClick={() => {
                analyticsUtils.CLICK_SERVICE('google')
                startLoading()
              }}
              className={classes.googleBtn}
              color="google"
              id="googleSignInButton"
              label={
                <div className={classes.btnLabel}>
                  <div className={classes.btnIcon}>
                    <GoogleIcon style={{ width: '100%' }} />
                  </div>
                  <span className={classes.btnText}>
                    Ingresar con <b>Google</b>
                  </span>
                </div>
              }
            />
          </Grid>

          <Grid
            style={{ margin: '40px 0 12px 0' }}
            justify="center"
            alignItems="center"
            container
          >
            <Divider
              style={{
                width: '40%',
                height: '2px',
                backgroundColor: 'var(--gray)',
                display: 'inline-flex',
              }}
            />
            <Typography
              style={{
                width: '20%',
                margin: '0',
                textAlign: 'center',
                fontFamily: 'Gotham',
                fontSize: '18px',
                lineHeight: '27px',
                color: 'var(--gray-dark)',
                fontWeight: 600,
              }}
            >
              O
            </Typography>
            <Divider
              style={{
                width: '40%',
                height: '2px',
                backgroundColor: 'var(--gray)',
                display: 'inline-flex',
              }}
            />
          </Grid>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              submitCount,
              ...rest
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email"
                  type="email"
                  inputProps={{
                    inputMode: 'email',
                  }}
                  autoComplete="email"
                  id="email"
                  error={errors.email !== undefined && rest.touched.email}
                  errorMessage={errors.email}
                  handleError
                />
                <TextField
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(x => !x)}
                        className={classes.eyeIcon}
                      >
                        {showPassword ? (
                          <EyeSlashIcon color="var(--gray-dark)" />
                        ) : (
                          <EyeIcon color="var(--gray-dark)" />
                        )}
                      </IconButton>
                    ),
                  }}
                  error={errors.password !== undefined && rest.touched.password}
                  errorMessage={errors.password}
                  handleError
                />
                <div style={{ width: '100%', textAlign: 'right' }}>
                  <Link
                    color="var(--secondary)"
                    to="/reset"
                    style={{ fontSize: '12px' }}
                  >
                    Olvidé mi contraseña
                  </Link>
                </div>
                <Button
                  style={{
                    marginTop: '40px',
                  }}
                  id="button-login"
                  color="primary"
                  label="Ingresar"
                  type="submit"
                />
                <Typography
                  className={appStyles.p}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '45px',
                  }}
                >
                  ¿Todavía no tenés cuenta?{' '}
                  <Link color="var(--primary)" to="/signup">
                    Crear cuenta
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Grid>
      </div>
      <div className={classes.footerContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography className={appStyles.text + ' ' + classes.footerText}>
            Podés leer nuestras{` `}
            <a
              target="_blank"
              href="https://eglcinvestigacion.com/privacidad"
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              políticas de privacidad
            </a>
            .
          </Typography>
          <Typography className={appStyles.text + ' ' + classes.footerText}>
            Podés ver todos los experimentos, diarios de investigación, papers
            publicados y datasets en{` `}
            <a
              target="_blank"
              href="https://elgatoylacaja.com.ar/labs"
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              https://elgatoylacaja.com.ar/labs
            </a>{' '}
            o escribirnos a{' '}
            <a
              href="mailto:labs@elgatoylacaja.com"
              style={{
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              labs@elgatoylacaja.com
            </a>{' '}
            por cualquier consulta.
          </Typography>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
