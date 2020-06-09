import React from 'react'
import { FormControl, FormLabel, Grid, Typography } from '@material-ui/core'

import { withRouter, RouteComponentProps } from 'react-router'

import {
  Button,
  useAppStyles,
  TextField,
  Select,
  CustomFormikErrorMessage as CustomErrorMessage,
} from '@elgatoylacaja/components'
import { AppContext } from '../contexts/AppContext'

import * as Yup from 'yup'

import { Formik, ErrorMessage } from 'formik'
import { optionShape, nivelesEducativos } from '@elgatoylacaja/utils'

const PreguntaSchema = Yup.object().shape({
  edad: Yup.number().required('Este campo es requerido'),
  nivelEducativo: optionShape(nivelesEducativos),
})

type FormValues = {
  edad: number | string
  nivelEducativo: number
}

const initialValues: FormValues = {
  edad: '',
  nivelEducativo: 0,
}

const Pregunta = (props: RouteComponentProps) => {
  const appStyles = useAppStyles()

  const { dispatch } = React.useContext(AppContext)

  const submit = ({ edad, nivelEducativo }: FormValues) => {
    dispatch({
      type: 'SAVE_PREGUNTAS_FORM_DATA',
      data: {
        edad: parseInt(edad as string),
        nivelEducativo,
      },
    })
    dispatch({
      type: 'REGISTER_VISIT',
      route: '/pregunta',
    })
    props.history.push('/thanks')
  }

  return (
    <>
      <Typography variant="h1" className={appStyles.title}>
        Esto último y terminamos
      </Typography>

      <Grid container style={{ marginTop: 10 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={PreguntaSchema}
          onSubmit={submit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            submitCount,
            isValid,
          }) => (
            <form onSubmit={handleSubmit} id="pregunta-form">
              <FormControl fullWidth className={appStyles.formControl}>
                <FormLabel className={appStyles.formLabel}>Edad</FormLabel>
                <TextField
                  id="edad"
                  value={values.edad || ''}
                  type="text"
                  onChange={({ target: { value } }) => {
                    let isNumber = !isNaN(parseInt(value))
                    setFieldValue('edad', isNumber ? value.slice(0, 2) : '')
                  }}
                  onBlur={handleBlur}
                  inputProps={{
                    pattern: '[0-9]{1,2}',
                    inputMode: 'numeric',
                  }}
                  style={{
                    marginTop: '10px',
                  }}
                />
                <ErrorMessage name="edad" component={CustomErrorMessage} />
              </FormControl>
              <Select
                id="nivelEducativo"
                label="Nivel educativo:"
                values={nivelesEducativos}
                value={values.nivelEducativo}
                onChange={handleChange}
              />
            </form>
          )}
        </Formik>
      </Grid>

      <Grid className={appStyles.mobileAlignBottom}>
        <Button
          color="primary"
          label="Continuar"
          type="submit"
          form="pregunta-form"
        />
      </Grid>
    </>
  )
}

export default withRouter(Pregunta)
