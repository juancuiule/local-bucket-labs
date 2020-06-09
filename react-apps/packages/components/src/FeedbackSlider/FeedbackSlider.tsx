import * as React from 'react'

import {
  Slider as MUISlider,
  SliderProps as MUISliderProps,
  FormControl,
  FormLabel,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import useAppStyles from '../useAppStyles'
import Labels from './FeedbackSliderLabels'
import Dots from './FeedbackSliderDots'
import ChevronIconUp from '../ChevronIconUp'
import ChevronIconDown from '../ChevronIconDown'

const useSliderStyles = (props: { color: string }) =>
  makeStyles({
    sliderRoot: {
      position: 'absolute',
      width: '100%',
      zIndex: 10,
      marginTop: -11,
      display: 'flex',
      alignItems: 'center',
      '@media (pointer: coarse)': {
        padding: '13px 0',
      },
      backgroundColor: '#f6f6f6',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      boxSizing: 'border-box',
      boxShadow:
        'inset 2px 2px 2px rgba(140, 155, 170, 0.4), inset -3px -3px 3px #F6F6F6',
      borderRadius: '29.1413px',
      cursor: 'default',
    },
    container: {
      position: 'relative',
      width: '100%',
    },
    track: {
      zIndex: 100,
      background: props.color,
      height: '2px',
      marginLeft: '2.5%',
      cursor: 'default',
      maxWidth: '95%',
    },
    slider: {
      height: '2px',
      background: props.color,
      opacity: 'initial',
      right: '2.5%',
      width: '95%',
      cursor: 'default',
    },
    thumb: {
      zIndex: 200,
      height: 32,
      width: 32,
      backgroundColor: 'transparent',
      bottom: '26px',
      // marginLeft: '4px',
      '&:focus,&:hover': {
        boxShadow: 'none',
      },
      marginLeft: '-16px',
    },
    mark: {
      backgroundColor: props.color,
      width: '2px',
      height: '5px',
      top: '8px',
    },

    overrideFormControl: {
      margin: '10px 0px !important',
      '@media only screen and (max-width : 758px)': {
        margin: '8px 0px !important',
      },
      '@media only screen and (max-width : 480px)': {
        margin: '4px 0px !important',
      },
      '@media only screen and (max-width : 360px)': {
        margin: '0px !important',
      },
    },
    overrideLabel: {
      '@media only screen and (max-width : 500px)': {
        fontSize: '12px !important',
      },
    },
    chevron: {
      height: '24px',
      width: '24px',
      '@media only screen and (max-width : 500px)': {
        height: '18px',
        width: '18px',
      },
    },
  })

export interface SliderProps {
  label: string
  definition?: string

  minLabel?: string
  maxLabel?: string

  color: string

  min?: number
  max?: number

  style?: React.CSSProperties
  labelsPosition?: 'after' | 'before'

  value: number
  marks?: MUISliderProps['marks']
}

const Marker = (preProps: { color: string }) => (props: any) => {
  return (
    <span>
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <mask
          id={`prefix__marker_${preProps.color}`}
          maskUnits="userSpaceOnUse"
          x={6}
          y={4}
          width={12}
          height={16}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.29 16.675c.591.842 1.284 1.828 2.093 3.002a.75.75 0 001.234 0c.81-1.174 1.502-2.16 2.092-3.002C17.431 12.799 18 11.988 18 10a6 6 0 10-12 0c0 1.988.569 2.798 3.29 6.675zM14.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#prefix__marker_${preProps.color})`}>
          <path fill={preProps.color} d="M0 0h24v24H0z" />
        </g>
      </svg>
    </span>
  )
}

const Slider = (props: SliderProps) => {
  const {
    min = 0,
    max = 100,
    value,
    label,
    labelsPosition = 'before',
    minLabel = min.toString(),
    maxLabel = max.toString(),
    color,
  } = props

  const appStyles = useAppStyles()
  const sliderStyles = useSliderStyles({ color })()

  const [showDefinition, setShowDefinition] = React.useState(false)

  return (
    <FormControl
      className={`${appStyles.formControl} ${sliderStyles.overrideFormControl}`}
      fullWidth
    >
      <FormLabel className={appStyles.formLabel}>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="body1"
            className={`${appStyles.label} ${sliderStyles.overrideLabel}`}
            onClick={() => {
              setShowDefinition(prev => !prev)
            }}
            style={{
              color,
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {label}
            {props.definition ? (
              <span
                style={{
                  marginLeft: '4px',
                  lineHeight: '1',
                }}
              >
                {showDefinition ? (
                  <ChevronIconUp
                    className={sliderStyles.chevron}
                    color={color}
                  />
                ) : (
                  <ChevronIconDown
                    className={sliderStyles.chevron}
                    color={color}
                  />
                )}
              </span>
            ) : null}
          </Typography>
          {props.definition ? (
            <Typography
              variant="body1"
              className={appStyles.text}
              style={{
                transition: `max-height 0.5s`,
                maxHeight: showDefinition ? '300px' : '0px',
                marginBottom: showDefinition ? '6px' : '4px',
              }}
            >
              {props.definition}
            </Typography>
          ) : null}
        </Grid>
      </FormLabel>
      <Grid
        container
        style={{
          marginTop: labelsPosition === 'before' ? '56px' : '30px',
          ...props.style,
        }}
      >
        <div
          className={sliderStyles.container}
          style={{
            marginBottom: labelsPosition === 'before' ? '0px' : '20px',
          }}
        >
          <Dots color={color} />
          <MUISlider
            valueLabelDisplay={'off'}
            step={1}
            min={min}
            max={max}
            value={(value / 100) * 95 + 2.5}
            marks={props.marks}
            classes={{
              root: sliderStyles.sliderRoot,
              track: sliderStyles.track,
              rail: sliderStyles.slider,
              thumb: sliderStyles.thumb,
              mark: sliderStyles.mark,
            }}
            ThumbComponent={Marker({ color })}
          />
          <Labels
            {...{
              minLabel,
              maxLabel,
              labelsPosition,
              color,
            }}
          />
        </div>
      </Grid>
    </FormControl>
  )
}

export default Slider
