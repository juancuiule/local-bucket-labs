import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'
import useAppStyles from './useAppStyles'

const useStyles = ({ color = 'var(--accent)' }: { color?: string }) =>
  makeStyles({
    dot: {
      marginRight: '35px',
      paddingTop: '5px',
      '@media only screen and (max-width : 800px)': {
        marginRight: '20px',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: '10px 0',
      '& h1': {
        margin: 0,
      },
      '@media only screen and (max-width : 800px)': {
        width: 'calc(100% + 40px)',
        marginLeft: '-24px',
      },
    },
    bar: {
      height: '5px',
      backgroundColor: color,
      width: '43.5px',
      marginRight: '17.5px',
      '@media only screen and (max-width : 800px)': {
        width: 'calc(28px + 24px)',
        marginRight: '10px',
      },
    },
  })

interface Props {
  text: string
  color?: string
}

const ColorBarIntroTitle = (props: Props) => {
  const { color, text } = props
  const classes = useStyles({ color })()
  const appStyles = useAppStyles()
  return (
    <div className={classes.header}>
      <div className={classes.bar}></div>
      <Typography variant="h1" className={appStyles.title}>
        {text}
      </Typography>
    </div>
  )
}

export default ColorBarIntroTitle
