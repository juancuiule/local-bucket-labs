import * as React from 'react'

import {
  Slider as MUISlider,
  SliderProps as MUISliderProps,
  FormControl,
  FormLabel,
} from '@material-ui/core'
import { ErrorMessage } from '../'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import useAppStyles from '../useAppStyles'
import ValueLabelTooltip from './Tooltip'
import Labels from './Labels'
import Dots from './Dots'

interface Props {
  useColor: boolean
  hideThumb: boolean
  customSliderBackground?: string
}

const useSliderStyles = (props: Props) =>
  makeStyles({
    sliderRoot: {
      position: 'absolute',
      width: 'calc(100% - 16px)',
      zIndex: 10,
      marginTop: -11,
      display: 'flex',
      alignItems: 'center',
      left: '8px',
      '@media (pointer: coarse)': {
        padding: '13px 0',
      },
    },
    label: {
      fontFamily: 'Gotham',
      fontWeight: 400,
      fontSize: 21,
      lineHeight: 1.25,
      margin: '25px 0 0',
      letterSpacing: '-0.56px',
      color: 'var(--secondary)',
      marginBottom: 30,
      textAlign: 'left',
      '@media only screen and (max-width : 800px)': {
        fontSize: 18,
      },
    },
    container: {
      position: 'relative',
      width: '100%',
    },
    track: {
      zIndex: 100,
      background: props.useColor ? 'var(--primary)' : 'none',
      height: '6px',
    },
    thumb: {
      zIndex: 200,
      height: 36,
      width: 36,
      backgroundColor: '#fff',
      border: '6px solid var(--secondary)',
      top: 1,
      right: 0,
      transform: 'translateX(-11px)',
      '&:focus,&:hover': {
        boxShadow: 'inherit',
      },
      '&:after': {
        width: '6px',
        height: '6px',
        backgroundColor: 'var(--gray-mid-dark)',
        borderRadius: '50%',
        top: '9px',
        left: '9px',
      },
      display: props.hideThumb ? 'none' : 'initial',
    },
    mark: {
      zIndex: -1,
      backgroundColor: 'var(--gray-mid-dark)',
      width: '8px',
      height: '20px',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      cursor: 'pointer',
      marginTop: '7px',
    },
    valueLabel: {
      fontFamily: 'Gotham',
      fontWeight: 700,
      fontSize: '14px',
      minWidth: '30px',
      textTransform: 'uppercase',
      letterSpacing: '-0.56px',
    },
    slider: {
      height: '6px',
      background:
        props.customSliderBackground ||
        'linear-gradient(to right, var(--gray), var(--secondary))',
      opacity: 'initial',
    },
    sliderDark: {
      height: '6px',
      background: props.customSliderBackground || 'var(--secondary)',
      opacity: 'initial',
    },
    sliderLight: {
      height: '6px',
      background: props.customSliderBackground || 'var(--gray)',
      opacity: 'initial',
    },
  })

export interface SliderProps {
  label?: string | React.ReactChild

  minLabel?: string
  middleLabel?: string
  maxLabel?: string

  min?: number
  max?: number

  error?: boolean
  errorMessage?: string

  style?: React.CSSProperties
  labelsPosition?: 'after' | 'before'
  version?: 'gradient' | 'light' | 'dark'

  customBackgrounds?: {
    dotLeft?: string
    slider?: string
    dotRight?: string
  }

  onChange: (values: number[] | number) => void
  value: MUISliderProps['value']
  marks?: MUISliderProps['marks']
  type?: 'one-value' | 'multivalue'
  valueLabelDisplay?: MUISliderProps['valueLabelDisplay']
  hideThumb?: boolean
}

const Slider = (props: SliderProps) => {
  const {
    min = 0,
    max = 100,
    value,
    label,
    onChange,
    error = false,
    errorMessage = 'Es necesario mover el slider',
    labelsPosition = 'before',
    version = 'gradient',
    type = typeof value === 'object' ? 'multivalue' : 'one-value',
    minLabel = min.toString(),
    maxLabel = max.toString(),
    middleLabel = '',
    hideThumb = false,
    valueLabelDisplay = 'off',
  } = props

  const appStyles = useAppStyles()
  const sliderStyles = useSliderStyles({
    hideThumb,
    useColor: type === 'multivalue',
    customSliderBackground: props.customBackgrounds?.slider,
  })()

  return (
    <FormControl className={appStyles.formControl} fullWidth>
      {label ? (
        <FormLabel className={appStyles.formLabel}>{label}</FormLabel>
      ) : null}
      <Grid
        container
        style={{
          marginTop: labelsPosition === 'before' ? '56px' : '35px',
          ...props.style,
        }}
      >
        <div
          className={sliderStyles.container}
          style={{
            marginBottom: labelsPosition === 'before' ? '0px' : '20px',
          }}
        >
          <Dots
            {...{
              max,
              min,
              onChange,
              version,
              value,
              leftColor: props.customBackgrounds?.dotLeft,
              rightColor: props.customBackgrounds?.dotRight,
            }}
          />
          <MUISlider
            valueLabelDisplay={'off'}
            step={1}
            min={min}
            max={max}
            value={value}
            marks={props.marks}
            classes={{
              root: sliderStyles.sliderRoot,
              track: sliderStyles.track,
              rail:
                version === 'light'
                  ? sliderStyles.sliderLight
                  : version === 'dark'
                  ? sliderStyles.sliderDark
                  : sliderStyles.slider,
              thumb: sliderStyles.thumb,
              mark: sliderStyles.mark,
              valueLabel: sliderStyles.valueLabel,
            }}
            onChange={(event, value) => {
              onChange(value)
            }}
            ValueLabelComponent={
              hideThumb || valueLabelDisplay === 'off'
                ? undefined
                : ValueLabelTooltip
            }
          />
          <Labels
            {...{
              minLabel,
              middleLabel,
              maxLabel,
              labelsPosition,
              version,
            }}
          />
          <div
            style={{
              marginTop: labelsPosition === 'before' ? '56px' : '',
            }}
          >
            <ErrorMessage condition={error} message={errorMessage} />
          </div>
        </div>
      </Grid>
    </FormControl>
  )
}

export default Slider
