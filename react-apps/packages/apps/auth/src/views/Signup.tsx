import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import {
  Button,
  TextField,
  Link,
  useAppStyles,
} from '@elgatoylacaja/components'

import { RouteComponentProps, withRouter } from 'react-router'
import { Formik, FormikHelpers } from 'formik'

import * as Yup from 'yup'
import { useLoader } from '@elgatoylacaja/hooks'
// import { gatoAPI } from '@elgatoylacaja/utils'
import { AuthContext } from '../contexts/AuthContext'
import api from '../api'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('No es un email válido')
    .required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido'),
  confirmPassword: Yup.string()
    .required('Este campo es requerido')
    .test('passwords-match', 'Las contraseñas no coinciden', function(value) {
      return this.parent.password === value
    }),
})

interface FormValues {
  email: string
  password: string
  confirmPassword: string
}

const Signup = (props: RouteComponentProps) => {
  const appStyles = useAppStyles()
  const { startLoading, stopLoading } = useLoader()

  const { dispatch } = React.useContext(AuthContext)

  const onSubmit = async (
    { email, password }: FormValues,
    { setFieldError }: FormikHelpers<FormValues>
  ) => {
    startLoading()
    try {
      // const {
      //   data: { accessToken },
      // } = await gatoAPI.registerWithEmail({
      //   email,
      //   password,
      // })
      const { accessToken } = await api.register({
        email,
        password,
      })
      dispatch({ type: 'LOGIN', accessToken })
      stopLoading()
    } catch ({ status, error }) {
      if (status === 409) {
        setFieldError('email', 'Este mail ya esta en uso')
      }
      stopLoading()
    }
  }

  const initialValues: FormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <>
      <div className={appStyles.hola}>
        <span>¡Hola!</span>
      </div>
      <div className={appStyles.authCardContainer}>
        <Grid style={{ marginTop: 10, width: '100%' }}>
          <Typography variant="h1" className={appStyles.titleDisplay}>
            Crear cuenta
          </Typography>
        </Grid>
        <Grid style={{ marginTop: 10, width: '100%' }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={SignupSchema}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              errors,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  value={values.email}
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email"
                  inputProps={{
                    inputMode: 'email',
                  }}
                  type="email"
                  autoComplete="email"
                  error={errors.email !== undefined && touched.email}
                  errorMessage={errors.email}
                  handleError
                />

                <TextField
                  value={values.password}
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Contraseña"
                  type="password"
                  autoComplete="new-password"
                  error={errors.password !== undefined && touched.password}
                  errorMessage={errors.password}
                  handleError
                />

                <TextField
                  value={values.confirmPassword}
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Repetir contraseña"
                  type="password"
                  autoComplete="new-password"
                  error={
                    errors.confirmPassword !== undefined &&
                    touched.confirmPassword
                  }
                  errorMessage={errors.confirmPassword}
                  handleError
                />

                <Grid container style={{ marginTop: '60px' }}>
                  <Button color="primary" label="Crear cuenta" type="submit" />
                </Grid>
                <Typography
                  className={appStyles.p}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '45px',
                  }}
                >
                  ¿Ya tenés cuenta?{' '}
                  <Link color="var(--primary)" to="/login">
                    Ingresar
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Grid>
      </div>
    </>
  )
}

export default withRouter(Signup)
