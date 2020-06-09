import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  bullet: {
    fontFamily: 'Gotham',
    fontWeight: 400,
    letterSpacing: '-0.56px',
    fontSize: 26,
    color: 'var(--secondary)',
    margin: '25px 0',
    lineHeight: 1.25,
    textAlign: 'left',
    '@media only screen and (max-width : 758px)': {
      fontSize: 21,
    },
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  dot: {
    backgroundColor: 'var(--accent)',
    height: '12px',
    width: '12px',
    marginRight: '5px',
    position: 'absolute',
    marginTop: '8px',
  },
  text: {
    textIndent: '20px',
  },
})

interface Props {
  text: string
}

const Bullet = (props: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.bullet}>
      <div className={classes.dot} />
      <span className={classes.text}>{props.text}</span>
    </div>
  )
}

export default Bullet
