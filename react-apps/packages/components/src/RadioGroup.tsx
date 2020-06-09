import React from 'react'

import {
  RadioGroup as MUIRadioGroup,
  makeStyles,
  FormControl,
  FormLabel,
  Radio,
  FormControlLabel,
  GridJustification,
} from '@material-ui/core'
import { Option } from '@elgatoylacaja/utils'
import useAppStyles from './useAppStyles'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'
import CustomErrorMessage from './CustomFormikErrorMessage'
import { ErrorMessage } from 'formik'

const useStyles = makeStyles({
  radioLabel: {
    fontFamily: 'Gotham',
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--secondary)',
    cursor: 'pointer',
    '@media only screen and (max-width : 500px)': {
      fontSize: 15,
    },
  },

  labelBoxText: {
    color: '#CCCCCC',
    paddingLeft: '9px',
    paddingRight: '9px',
    '@media only screen and (max-width : 500px)': {
      paddingLeft: '6px',
      paddingRight: '6px',
      fontSize: 11,
    },
  },
  labelBox: {
    textAlign: 'left',
    width: '100%',
    maxWidth: '150px',
    '@media only screen and (max-width : 500px)': {
      maxWidth: 'none',
    },
    margin: '0 5px',
    paddingBottom: '9px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    alignItems: 'flex-start',
    border: '2px solid #C8CED4',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s',
    '& span': {
      color: '#C8CED4 !important',
      '@media only screen and (max-width : 500px)': {
        fontWeight: 500,
      },
    },
    '&:hover': {
      borderColor: 'var(--primary)',
      boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.1)',
      '& span': {
        color: '#C8CED4',
      },
    },
    '&:first-child': {
      marginLeft: '0px',
    },
  },
  selectedLabelBox: {
    borderColor: 'var(--primary)',
    boxShadow: '0px 2px 4px 1px rgba(204, 204, 204, 0.5)',
    '& span': {
      color: 'var(--primary) !important',
    },
  },

  top: {
    maxWidth: '40px',
    textAlign: 'center',
  },
  bottom: {
    maxWidth: '40px',
    textAlign: 'center',
  },

  start: {
    textAlign: 'right',
  },
  end: {
    textAlign: 'left',
  },
  radioMargin: {
    marginRight: '10px',
  },
  radio: {
    color: '#C8CED4',
    '@media only screen and (max-width : 500px)': {
      padding: '6px',
    },
    '&:hover': {
      // backgroundColor: 'rgba(104, 187, 232, 0.15)',
      backgroundColor: 'transparent',
    },
    // '& svg:first-of-type': {
    //   fill: '#C8CED4 !important',
    // },
  },
  radioChecked: {
    color: 'var(--primary) !important',
    '&:hover': {
      backgroundColor: 'rgba(104, 187, 232, 0.15) !important',
    },
  },
  radioGroup: {
    display: 'flex',
    marginTop: '18px',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  vertical: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})

interface Props extends RadioGroupProps {
  label: string
  id: string
  values: Array<Option>
  labelPlacement?: 'start' | 'bottom' | 'top' | 'end'
  direction?: 'horizontal' | 'vertical'
  justify?: GridJustification
}

const RadioGroup = (props: Props) => {
  const classes = useStyles()
  const appStyles = useAppStyles()
  const {
    values,
    style,
    labelPlacement = 'bottom',
    direction = 'horizontal',
    justify = 'space-between',
    ...rest
  } = props
  return React.useMemo(
    () => (
      <FormControl className={appStyles.formControl} fullWidth>
        <FormLabel className={appStyles.formLabel}>{props.label}</FormLabel>
        <MUIRadioGroup
          id={props.id}
          name={props.id}
          className={`${classes.radioGroup} ${classes[direction]}`}
          value={props.value}
          onChange={props.onChange}
          style={{ justifyContent: justify, ...style }}
          {...rest}
        >
          {values.map(({ id, label, value }, i) => {
            return (
              <FormControlLabel
                key={id}
                classes={{
                  label: `${classes.radioLabel} ${
                    direction === 'horizontal' ? classes.labelBoxText : ''
                  }`,
                }}
                className={
                  direction === 'horizontal'
                    ? `${classes.labelBox} ${
                        props.value === id.toString()
                          ? classes.selectedLabelBox
                          : ''
                      }`
                    : classes[labelPlacement]
                }
                value={id.toString()}
                control={
                  <Radio
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                    classes={{
                      root: `${classes.radio} ${
                        direction === 'vertical' ? classes.radioMargin : ''
                      }`,
                      checked: classes.radioChecked,
                    }}
                  />
                }
                label={label}
                labelPlacement={labelPlacement}
              />
            )
          })}
        </MUIRadioGroup>
        <ErrorMessage name={props.id} component={CustomErrorMessage} />
      </FormControl>
    ),
    [props.value]
  )
}

export default RadioGroup
