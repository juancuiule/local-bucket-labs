import React, { ReactChild } from 'react'
import { Grid, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = (props: { color: string }) =>
  makeStyles({
    grid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '60px',
      '@media only screen and (max-width : 758px)': {
        marginTop: '20px',
      },
    },
    text: {
      fontFamily: 'Gotham',
      fontWeight: 400,
      letterSpacing: '-0.56px',
      fontSize: 20,
      '@media only screen and (max-width : 758px)': {
        fontSize: 18,
      },
      textAlign: 'center',
      color: props.color,
    },
    divider: {
      backgroundColor: props.color,
    },
  })

interface Props {
  color?: string
  text: string
  children?: ReactChild
}

const HeaderDivider = (props: Props) => {
  const { color = 'var(--accent)' } = props
  const classes = useStyles({ color })()
  return (
    <>
      <Grid className={classes.grid}>
        <Grid item xs={2} sm={3}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={8} sm={6}>
          <Typography className={classes.text}>{props.text}</Typography>
        </Grid>
        <Grid item xs={2} sm={3}>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
      <Grid container>{props.children}</Grid>
      <Divider className={classes.divider} />
    </>
  )
}

export default HeaderDivider
