import React from 'react'

import {
  Select as MUISelect,
  makeStyles,
  MenuItem,
  Input,
  FormControl,
  FormLabel,
} from '@material-ui/core'
import { SelectProps } from '@material-ui/core/Select'
import { Option } from '@elgatoylacaja/utils'
import useAppStyles from './useAppStyles'
import { ErrorMessage } from 'formik'
import CustomErrorMessage from './CustomFormikErrorMessage'

const useStyles = makeStyles({
  root: {
    marginBottom: '10px',
  },
  select: {
    fontFamily: 'Gotham',
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--secondary)',
    '@media only screen and (max-width : 800px)': {
      fontSize: 15,
    },
    textAlign: 'left',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'var(--primary)',
    },
  },
  menuItem: {
    fontFamily: 'Gotham',
    minHeight: '48px',
  },
  placeholder: {
    color: 'rgb(162,162,162)',
  },
})

interface Props extends SelectProps {
  label: string | React.ReactChild
  id: string
  values: Array<Option & { disabled?: boolean }>
  placeholder?: string
}

const Select = (props: Props) => {
  const classes = useStyles()
  const appStyles = useAppStyles()
  const { values, ...rest } = props
  return (
    <FormControl fullWidth className={appStyles.formControl}>
      <FormLabel className={appStyles.formLabel}>{props.label}</FormLabel>
      <MUISelect
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        classes={{
          select: `${classes.select} ${
            props.placeholder && props.value === '' ? classes.placeholder : ''
          }`,
        }}
        input={
          <Input
            classes={{
              underline: `${classes.cssUnderline}`,
              root: classes.root,
            }}
            autoComplete="off"
            name={rest.name}
          />
        }
        displayEmpty={props.placeholder !== undefined}
        autoComplete="off"
        {...rest}
      >
        {props.placeholder ? (
          <MenuItem className={classes.menuItem} value={''} disabled>
            {props.placeholder}
          </MenuItem>
        ) : (
          <MenuItem
            className={classes.menuItem}
            style={{
              minHeight: '0px',
              height: '0px',
              padding: '0',
              margin: '0',
            }}
            value={''}
          />
        )}
        {values.map(({ label, value, id, disabled = false }) =>
          disabled ? (
            <MenuItem
              disabled
              component="div"
              style={{
                fontWeight: 500,
                fontFamily: 'Gotham',
                fontSize: '14px',
                color: 'gray',
                textTransform: 'uppercase',
                marginTop: '22px',
              }}
            >
              Otras opciones
            </MenuItem>
          ) : (
            <MenuItem
              key={id}
              className={classes.menuItem}
              value={id.toString()}
            >
              {label}
            </MenuItem>
          )
        )}
      </MUISelect>
      <ErrorMessage name={props.id} component={CustomErrorMessage} />
    </FormControl>
  )
}

export default Select
