import React from 'react'

import { FormControl, FormLabel } from '@material-ui/core'
import useAppStyles from './useAppStyles'
// import CustomErrorMessage from './CustomFormikErrorMessage'
// import { ErrorMessage } from 'formik'
import Checkbox from './Checkbox'
import { Option } from '@elgatoylacaja/utils'

interface Props {
  values: Array<Option>
  selected: Set<number>
  onChange: (id: number, checked: boolean) => void
  label?: string
}

const RadioGroup = (props: Props) => {
  const appStyles = useAppStyles()
  const { values, label, onChange, selected } = props
  return (
    <FormControl className={appStyles.formControl} fullWidth>
      {label ? (
        <FormLabel
          className={appStyles.formLabel}
          style={{ marginBottom: '25px' }}
        >
          {props.label}
        </FormLabel>
      ) : null}
      {values.map(({ id, label, value }) => {
        return (
          <Checkbox
            key={value}
            checked={selected.has(id)}
            onChange={(e, _) => {
              onChange(id, e.target.checked)
            }}
            id={value}
            label={label}
          />
        )
      })}
      {/* <ErrorMessage name={props.id} component={CustomErrorMessage} /> */}
    </FormControl>
  )
}

export default RadioGroup
