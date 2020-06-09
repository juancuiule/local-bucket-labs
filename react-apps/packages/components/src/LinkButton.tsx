import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  link: {
    display: 'inline-block',
    margin: '25px auto',
    color: 'var(--gray-mid-dark)',
    outline: 'none !important',
    fontFamily: 'Gotham, sans-serif',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 700,
    textDecoration: 'none',
  },
})

interface Props {
  children: string
  to: string
}

const LinkButton = (props: Props) => {
  const classes = useStyles()
  const { children, to } = props
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  )
}

export default LinkButton
