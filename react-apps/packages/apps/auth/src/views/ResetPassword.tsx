import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import {
  Button,
  TextField,
  Link,
  useAppStyles,
} from '@elgatoylacaja/components'
import { Formik, FormikHelpers } from 'formik'

import * as Yup from 'yup'
import { useLoader } from '@elgatoylacaja/hooks'
// import { gatoAPI } from '@elgatoylacaja/utils'

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('No es un email válido')
    .required('Este campo es requerido'),
})

interface FormValues {
  email: string
}

const ResetPassword = () => {
  const appStyles = useAppStyles()
  const [emailSent, setEmailSent] = React.useState(false)
  const { startLoading, stopLoading } = useLoader()

  const initialValues: FormValues = {
    email: '',
  }

  const onSubmit = async (
    { email }: FormValues,
    { setFieldError }: FormikHelpers<FormValues>
  ) => {
    // startLoading()
    // try {
    //   await gatoAPI.sendEmailToResetPassword({
    //     email,
    //     url: `${process.env.PUBLIC_URL}/#/new-password?email=${email}&token=`,
    //   })
    //   stopLoading()
    //   setEmailSent(true)
    // } catch ({ status, error }) {
    //   stopLoading()
    //   if (status === 404) {
    //     setFieldError('email', 'No existe un usuario con ese email')
    //   }
    // }
  }
  return !emailSent ? (
    <div className={appStyles.authCardContainer}>
      <Grid container style={{ marginTop: 10 }}>
        <Typography variant="h1" className={appStyles.titleDisplay}>
          Recuperar contraseña
        </Typography>
        <Typography className={appStyles.text}>
          Ingresá tu mail y te contactamos para cambiar tu contraseña.
        </Typography>
      </Grid>
      <Grid style={{ marginTop: 10, display: emailSent ? 'none' : '' }}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ResetPasswordSchema}
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
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Email"
                type="email"
                inputProps={{
                  inputMode: 'email',
                }}
                fullWidth
                error={errors.email !== undefined && touched.email}
                errorMessage={errors.email}
                handleError
              />
              <Button type="submit" color="primary" label="Recuperar" />
            </form>
          )}
        </Formik>
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
      </Grid>
    </div>
  ) : (
    <div className={appStyles.authCardContainer}>
      <Grid container style={{ marginTop: 30 }}>
        <div
          style={{
            width: 'calc(100% + 48px)',
            left: '-24px',
            height: '3px',
            position: 'absolute',
            backgroundColor: '#73E5A1',
          }}
        ></div>
      </Grid>
      <Grid container justify="center" style={{ marginTop: 30 }}>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 0C10.2974 0 0 10.2974 0 23C0 35.7026 10.2974 46 23 46C35.7026 46 46 35.7026 46 23C46 10.2974 35.7026 0 23 0ZM23 4.4878C33.2309 4.4878 41.5122 12.7675 41.5122 23C41.5122 33.2309 33.2325 41.5122 23 41.5122C12.7691 41.5122 4.4878 33.2325 4.4878 23C4.4878 12.7691 12.7675 4.4878 23 4.4878ZM35.8602 16.4586L33.7705 14.3533C33.3378 13.9173 32.6332 13.9144 32.197 14.347L19.0901 27.3409L13.5458 21.755C13.1131 21.319 12.4086 21.3161 11.9723 21.7486L9.86567 23.837C9.42939 24.2695 9.42652 24.9736 9.85936 25.4098L18.2771 33.8906C18.7098 34.3266 19.4143 34.3295 19.8506 33.8969L35.854 18.0313C36.2901 17.5987 36.2929 16.8946 35.8602 16.4586Z"
            fill="#73E6A1"
          />
        </svg>

        <Typography
          variant="h1"
          className={appStyles.titleDisplay}
          style={{ textAlign: 'center', margin: '45px 0 10px' }}
        >
          ¡Te enviamos un email!
        </Typography>
        <Typography className={appStyles.p}>
          Revisá tu casilla de correo y hace click en el enlace que te mandamos
          para crear una nueva contraseña.
        </Typography>
      </Grid>
    </div>
  )
}

export default ResetPassword
