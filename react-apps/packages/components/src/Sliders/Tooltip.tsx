import React from 'react'
import { Tooltip, Zoom } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  tooltipArrow: {
    backgroundColor: 'var(--secondary)',
    minWidth: '20px',
    minHeight: '20px',
    textAlign: 'center',
    fontFamily: 'Gotham',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: 'var(--secondary)',
  },
  popperArrow: {
    marginBottom: '-5px',
  },
})

interface ValueLabelProps {
  children: React.ReactElement
  open: boolean
  value: number
}

export default function ValueLabelComponent(props: ValueLabelProps) {
  const { children, open, value } = props
  const classes = useStyles()

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      classes={{
        tooltipArrow: classes.tooltipArrow,
        arrow: classes.arrow,
        popperArrow: classes.popperArrow,
      }}
      arrow
      title={value}
      TransitionComponent={Zoom}
    >
      {children}
    </Tooltip>
  )
}
