import * as React from 'react'
import { makeStyles } from '@material-ui/styles'

interface StyleProps {
  color: string
}

const useDotsStyles = (props: StyleProps) =>
  makeStyles({
    dot: {
      zIndex: 100,
      width: 6,
      height: 6,
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: props.color,
    },
    dotLeft: {
      left: '2.5%',
    },
    dotRight: {
      right: '2.5%',
    },
  })

interface Props {
  color: string
}

const Dots = (props: Props) => {
  const classes = useDotsStyles({ color: props.color })()
  return (
    <>
      <div className={`${classes.dot} ${classes.dotLeft}`} />
      <div className={`${classes.dot} ${classes.dotRight}`} />
    </>
  )
}

export default Dots
