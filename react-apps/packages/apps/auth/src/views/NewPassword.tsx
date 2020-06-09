import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import { withRouter, RouteComponentProps } from 'react-router'

import { Button, TextField, useAppStyles } from '@elgatoylacaja/components'
import { Formik } from 'formik'

import * as Yup from 'yup'
import { useLoader } from '@elgatoylacaja/hooks'
// import { gatoAPI } from '@elgatoylacaja/utils'
import { AuthContext } from '../contexts/AuthContext'

interface FormValues {
  password: string
  confirmPassword: string
}

const NewPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Este campo es requerido'),
  confirmPassword: Yup.string()
    .required('Este campo es requerido')
    .test('passwords-match', 'Las contraseñas no coinciden', function(value) {
      return this.parent.password === value
    }),
})

const NewPassword = (props: RouteComponentProps) => {
  const appStyles = useAppStyles()
  const { startLoading, stopLoading } = useLoader()
  const [token, setToken] = React.useState('')

  const { dispatch } = React.useContext(AuthContext)

  React.useEffect(() => {
    const search = props.location.search
    const params = new URLSearchParams(search)
    const url_token = params.get('token')
    if (url_token === '' || url_token === null) {
      props.history.push('/login')
    } else {
      setToken(url_token)
    }
  }, [setToken, props.history, props.location.search])

  const initialValues: FormValues = {
    password: '',
    confirmPassword: '',
  }

  const onSubmit = async ({ password }: FormValues) => {
    // startLoading()
    // try {
    //   const {
    //     data: { accessToken },
    //   } = await gatoAPI.sendNewPassword({
    //     password,
    //     token,
    //   })
    //   dispatch({ type: 'LOGIN', accessToken })
    //   stopLoading()
    // } catch ({ status, error }) {
    //   stopLoading()
    //   if (status === 403) {
    //     // hubo un error con el token
    //   }
    // }
  }

  return (
    <div className={appStyles.authCardContainer}>
      <Grid container style={{ marginTop: 10 }}>
        <Typography variant="h1" className={appStyles.titleDisplay}>
          Crear nueva contraseña
        </Typography>
      </Grid>
      <Grid container style={{ marginTop: 10 }} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={NewPasswordSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              id="password"
              label="Nueva contraseña"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="new-password"
              error={errors.password !== undefined && touched.password}
              errorMessage={errors.password}
              handleError
            />

            <TextField
              id="confirmPassword"
              label="Repetir nueva contraseña"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="new-password"
              error={
                errors.confirmPassword !== undefined && touched.confirmPassword
              }
              errorMessage={errors.confirmPassword}
              handleError
            />

            <Button color="primary" type="submit" label="Crear contraseña" />
          </form>
        )}
      </Formik>
    </div>
  )
}

export default withRouter(NewPassword)
