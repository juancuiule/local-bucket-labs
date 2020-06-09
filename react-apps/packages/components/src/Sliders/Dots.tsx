import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { SliderProps } from './Slider'

interface StyleProps {
  leftColor?: string
  rightColor?: string
}

const useDotsStyles = (props: StyleProps) =>
  makeStyles({
    dot: {
      zIndex: 0,
      width: 16,
      height: 16,
      borderRadius: '50%',
      position: 'absolute',
      top: -5,
      cursor: 'pointer',
    },
    dotLeft: {
      left: 0,
      background: props.leftColor || 'var(--gray)',
    },
    dotLeftDark: {
      left: 0,
      background: props.leftColor || 'var(--secondary)',
    },

    dotRight: {
      background: props.rightColor || 'var(--secondary)',
      right: 0,
    },
    dotRightLight: {
      background: props.rightColor || 'var(--gray)',
      right: 0,
    },
  })

interface Props {
  version: SliderProps['version']
  max: SliderProps['max']
  min: SliderProps['min']
  onChange: SliderProps['onChange']
  value: SliderProps['value']
  leftColor?: string
  rightColor?: string
}

const Dots = (props: Props) => {
  const { max, min, onChange, version, value } = props
  const classes = useDotsStyles({
    leftColor: props.leftColor,
    rightColor: props.rightColor,
  })()
  const dots = {
    left: version === 'dark' ? classes.dotLeftDark : classes.dotLeft,
    right: version === 'light' ? classes.dotRightLight : classes.dotRight,
  }

  return (
    <>
      <div
        onClick={() => {
          if (typeof value === 'number') {
            onChange(min)
          } else {
            const [, ...rest] = value
            onChange([min, ...rest])
          }
        }}
        className={`${classes.dot} ${dots['left']}`}
      />
      <div
        onClick={() => {
          if (typeof value === 'number') {
            onChange(max)
          } else {
            const [, ...rest] = value.reverse()
            const firsts = rest.reverse()
            onChange([...firsts, max])
          }
        }}
        className={`${classes.dot} ${dots['right']}`}
      />
    </>
  )
}

export default Dots
