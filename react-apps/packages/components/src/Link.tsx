import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = (color: string) =>
  makeStyles({
    link: {
      fontSize: '16px',
      lineHeight: ' 24px',
      fontFamily: 'Gotham',
      textDecoration: 'none',
      borderBottom: `1px solid ${color}`,
      color: color,
      paddingBottom: '2px',
      transition: 'all 0.2s',
      '&:hover': {
        opacity: 0.7,
        borderBottom: `3px solid ${color}`,
      },
    },
  })

interface Props {
  children: string
  to: string
  color: string
  style?: React.CSSProperties
}

const Link = (props: Props) => {
  const { children, color, to, style } = props
  const classes = useStyles(color)()
  return (
    <RouterLink
      to={to}
      className={classes.link}
      style={{
        letterSpacing: '0px',
        ...style,
      }}
    >
      {children}
    </RouterLink>
  )
}

export default Link
