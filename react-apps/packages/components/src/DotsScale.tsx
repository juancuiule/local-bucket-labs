import React, { ReactNode } from 'react'

import {
  FormControl,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  makeStyles,
} from '@material-ui/core'

import { useAppStyles, CustomFormikErrorMessage } from './'
import { useFormikContext, ErrorMessage } from 'formik'

interface DotScaleProps {
  label: string
  dots: number
  value: number
  id: string
  showDotLabel?: boolean
  dotLabels?: {
    value: number
    label: string | ReactNode
  }[]
}

const useStyles = makeStyles({
  labelContainer: {
    borderRadius: '50%',
    padding: '0',
    minWidth: '0',
    height: '40px',
    width: '40px',
    '@media only screen and (max-width : 475px)': {
      height: '30px',
      width: '30px',
    },
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 600,
    lineHeight: '14px',
    fontFamily: 'Gotham',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioGroupRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    marginTop: '18px',
  },
  textLabels: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textLabel: {
    marginTop: '15px',
    width: '30%',
    maxWidth: '150px',
    '@media only screen and (max-width : 475px)': {
      fontSize: '12px !important',
      width: '90px !important',
    },
  },
  insideDot: {
    backgroundColor: 'var(--primary)',
    borderRadius: '100%',
    transition: 'all 0.2s',
  },
  radioWithLabel: {
    position: 'absolute',
    opacity: 0,
  },
  radioWithoutLabel: {
    color: 'var(--primary) !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
    },
    '& .MuiIconButton-label': {
      opacity: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--primary)',
      borderRadius: '50%',
      transition: 'all 0.2s',
    },
    '& *[class^="PrivateRadioButtonIcon"]': {
      opacity: 0,
    },
  },
  readioChecked: {
    '& .MuiIconButton-label': {
      opacity: 1,
    },
  },
})

const DotScale = (props: DotScaleProps) => {
  const { showDotLabel = true } = props
  const appStyles = useAppStyles()
  const classes = useStyles()
  const { setFieldValue } = useFormikContext()
  return React.useMemo(
    () => (
      <FormControl className={appStyles.formControl}>
        <FormLabel className={appStyles.formLabel}>{props.label}</FormLabel>
        <MUIRadioGroup
          id={props.id}
          name={props.id}
          value={props.value}
          onChange={(event, value) => {
            setFieldValue(props.id, value)
          }}
          classes={{
            root: classes.radioGroupRoot,
          }}
        >
          {Array.from({ length: props.dots }).map((_, i) => {
            const value = i + 1
            const selected = props.value === value
            const color = selected ? 'var(--primary)' : 'var(--gray)'
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FormControlLabel
                  style={{
                    border: `3px solid ${color}`,
                    color,
                  }}
                  classes={{
                    root: classes.labelContainer,
                    label: classes.label,
                  }}
                  value={value}
                  label={showDotLabel ? value.toString() : ''}
                  control={
                    <Radio
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      classes={{
                        root: showDotLabel
                          ? classes.radioWithLabel
                          : classes.radioWithoutLabel,
                        checked: showDotLabel ? '' : classes.readioChecked,
                      }}
                    />
                  }
                />
              </div>
            )
          })}
        </MUIRadioGroup>
        <div className={classes.textLabels}>
          {(props.dotLabels || []).map((x, i, arr) => {
            return (
              <Typography
                key={i}
                variant="body1"
                className={`${appStyles.text} ${classes.textLabel}`}
                // onClick={() => {
                //   setFieldValue(props.id, x.value)
                // }}
                style={{
                  color:
                    props.value === x.value
                      ? 'var(--primary)'
                      : 'var(--gray-dark)',
                  textAlign:
                    i === 0
                      ? 'left'
                      : i === arr.length - 1
                      ? 'right'
                      : 'center',
                  width: i === 1 ? '100%' : '',
                }}
              >
                {x.label}
              </Typography>
            )
          })}
        </div>
        <ErrorMessage name={props.id} component={CustomFormikErrorMessage} />
      </FormControl>
    ),
    [
      props.value,
      props.dots,
      props.id,
      props.label,
      props.dotLabels,
      showDotLabel,
      setFieldValue,
      appStyles.formControl,
      appStyles.formLabel,
      appStyles.text,
      classes,
    ]
  )
}

export default DotScale
