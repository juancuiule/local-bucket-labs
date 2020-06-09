import React from 'react'
import { makeStyles, getThemeProps } from '@material-ui/styles'
import { SliderProps } from './FeedbackSlider'

const useLabelStyles = (props: { color: string }) =>
  makeStyles({
    valueLabel: {
      fontFamily: 'Gotham',
      fontSize: '14px',
      minWidth: '30px',
      letterSpacing: '-0.56px',
      color: props.color,
      maxWidth: '45%',
      '@media only screen and (max-width : 480px)': {
        fontSize: '12px',
      },
    },
    maxminContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    minLabel: {
      textAlign: 'left',
    },

    maxLabel: {
      textAlign: 'right',
    },

    after: {
      marginTop: 15,
      paddingTop: 15,
      '@media only screen and (max-width : 500px)': {
        marginTop: 12,
        paddingTop: 12,
      },
    },
    before: {
      marginTop: -38,
    },
  })

const Labels = ({
  minLabel,
  maxLabel,
  labelsPosition,
  color,
}: Required<
  Pick<SliderProps, 'minLabel' | 'maxLabel' | 'labelsPosition'> & {
    color: string
  }
>) => {
  const classes = useLabelStyles({ color })()
  return (
    <div className={`${classes.maxminContainer} ${classes[labelsPosition]}`}>
      <span className={`${classes.valueLabel} ${classes.minLabel}`}>
        {minLabel}
      </span>

      <span className={`${classes.valueLabel} ${classes.maxLabel}`}>
        {maxLabel}
      </span>
    </div>
  )
}

export default Labels
