import React from 'react'
import { InputAdornment } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    margin: '0px 0px 5px 0px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: 'var(--accent)',
    textDecoration: 'none',
    fontFamily: 'Gotham',
    fontWeight: 700,
    textTransform: 'uppercase',
    wordBreak: 'break-all',
    textAlign: 'right',
  },
})

interface Props {
  text?: string
}

const PasswordAdornment = (props: Props) => {
  const classes = useStyles()
  const { text = 'Olvidé mi contraseña' } = props
  return (
    <InputAdornment position="end" className={classes.root}>
      <Link to="/reset" className={classes.link}>
        {text}
      </Link>
    </InputAdornment>
  )
}

export default PasswordAdornment
