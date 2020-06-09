import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { SliderProps } from './Slider'

const useLabelStyles = makeStyles({
  valueLabel: {
    fontFamily: 'Gotham',
    fontWeight: 700,
    fontSize: '14px',
    minWidth: '30px',
    textTransform: 'uppercase',
    letterSpacing: '-0.56px',
  },
  maxminContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  minLabel: {
    color: 'var(--gray)',
    textAlign: 'left',
    maxWidth: '45%',
  },
  minLabelDark: {
    color: 'var(--secondary)',
    textAlign: 'left',
    maxWidth: '45%',
  },

  maxLabel: {
    color: 'var(--secondary)',
    textAlign: 'right',
    maxWidth: '45%',
  },
  maxLabelLight: {
    color: 'var(--gray)',
    textAlign: 'right',
    maxWidth: '45%',
  },

  middleLabel: {
    color: 'var(--secondary)',
    textAlign: 'center',
    maxWidth: '45%',
  },
  middleLabelLight: {
    color: 'var(--gray)',
    textAlign: 'center',
    maxWidth: '45%',
  },

  after: {
    marginTop: 15,
    paddingTop: 15,
  },
  before: {
    marginTop: -38,
  },
})

const Labels = ({
  minLabel,
  middleLabel,
  maxLabel,
  labelsPosition,
  version,
}: Required<
  Pick<
    SliderProps,
    'version' | 'minLabel' | 'maxLabel' | 'labelsPosition' | 'middleLabel'
  >
>) => {
  const classes = useLabelStyles()
  const labels = {
    min: version === 'dark' ? classes.minLabelDark : classes.minLabel,
    max: version === 'light' ? classes.maxLabelLight : classes.maxLabel,
    middle: version === 'light' ? classes.maxLabelLight : classes.maxLabel,
  }
  return (
    <div className={`${classes.maxminContainer} ${classes[labelsPosition]}`}>
      <span className={`${classes.valueLabel} ${labels['min']}`}>
        {minLabel}
      </span>

      <span className={`${classes.valueLabel} ${labels['middle']}`}>
        {middleLabel}
      </span>

      <span className={`${classes.valueLabel} ${labels['max']}`}>
        {maxLabel}
      </span>
    </div>
  )
}

export default Labels
