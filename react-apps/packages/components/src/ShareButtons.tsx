import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'

import { Button } from '.'
import { useIsMobile } from '@elgatoylacaja/hooks'
import { shareUtils } from '@elgatoylacaja/utils'
import { makeStyles } from '@material-ui/styles'
import { Typography, Fab } from '@material-ui/core'
import useAppStyles from './useAppStyles'
import FacebookIcon from './FacebookIcon'
import TwitterIcon from './TwitterIcon'
import WhatsappIcon from './WhatsappIcon'

const { shareExperiment } = shareUtils

const useStyles = makeStyles({
  button: {
    width: '45%',
    margin: '4px',
    fontSize: '16px',
    minHeight: '42px',
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: '3px',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'white',
    border: '1px solid',
    boxShadow: '0 0 4px 0 rgba(20, 39, 60, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      transform: 'scale(0.8)',
    },
  },
  twitter: {
    borderColor: 'var(--twitter)',
    '&:hover': {
      backgroundColor: 'var(--twitter)',
      '& path': {
        fill: 'white',
      },
    },
  },
  facebook: {
    borderColor: '#3D5A96',
    '&:hover': {
      backgroundColor: '#3D5A96',
      '& path': {
        fill: 'white',
      },
    },
  },
  whatsapp: {
    borderColor: 'var(--whatsapp)',
    '&:hover': {
      backgroundColor: 'var(--whatsapp)',
      '& path': {
        fill: 'white',
      },
    },
  },
})

const ShareButtons = (props: {
  EXPERIMENT_SHARE_TEXT: string
  EXPERIMENT_URL: string
  customText?: {
    share?: ReactNode
    shareFacebookButton?: ReactNode
    shareTwitterButton?: ReactNode
  }
}) => {
  const classes = useStyles()
  const appStyles = useAppStyles()
  const { isMobile } = useIsMobile()

  const share = React.useCallback(
    (service: 'facebook' | 'whatsapp' | 'twitter') => {
      return shareExperiment(
        props.EXPERIMENT_SHARE_TEXT,
        props.EXPERIMENT_URL
      )(service)
    },
    [props.EXPERIMENT_SHARE_TEXT, props.EXPERIMENT_URL]
  )

  return (
    <div
      style={{
        border: 'solid 1px rgba(15, 39, 62, 0.1)',
        borderRadius: '6px',
        padding: '10px 40px 20px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...(!isMobile
          ? {
              width: '80%',
              margin: '40px auto 0',
            }
          : {
              marginTop: '40px',
            }),
      }}
    >
      <Typography
        className={appStyles.text}
        style={{
          textAlign: 'center',
          fontSize: '16px',
          textTransform: 'uppercase',
          margin: '10px 0 0',
        }}
      >
        {props.customText?.share || (
          <>
            <b>Compartí</b> el experimento:
          </>
        )}
      </Typography>
      <Grid container justify="space-between" style={{ marginTop: '30px' }}>
        {isMobile ? (
          <>
            <Fab
              color="primary"
              className={classes.iconButton + ' ' + classes.facebook}
              onClick={share('facebook')}
            >
              <FacebookIcon />
            </Fab>
            <Fab
              color="primary"
              className={classes.iconButton + ' ' + classes.twitter}
              onClick={share('twitter')}
            >
              <TwitterIcon />
            </Fab>
            <Fab
              color="primary"
              className={classes.iconButton + ' ' + classes.whatsapp}
              onClick={share('whatsapp')}
            >
              <WhatsappIcon />
            </Fab>
          </>
        ) : (
          <>
            <Button
              className={classes.button}
              color="facebook"
              label={
                <div style={{ display: 'flex', width: '100%', padding: '5px' }}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ width: '20%' }}
                  >
                    <FacebookIcon
                      color="#FFF"
                      style={{ transform: 'scale(0.6)' }}
                    />
                  </Grid>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ width: '80%' }}
                  >
                    {props.customText?.shareFacebookButton ||
                      'Compartí en tu muro'}
                  </Grid>
                </div>
              }
              onClick={share('facebook')}
            />
            <Button
              className={classes.button}
              color="twitter"
              label={
                <div style={{ display: 'flex', width: '100%', padding: '5px' }}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ width: '20%' }}
                  >
                    <TwitterIcon
                      color="#FFF"
                      style={{ transform: 'scale(0.6)' }}
                    />
                  </Grid>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ width: '80%' }}
                  >
                    {props.customText?.shareTwitterButton || 'Escribí un tweet'}
                  </Grid>
                </div>
              }
              onClick={share('twitter')}
            />
          </>
        )}
      </Grid>
    </div>
  )
}

export default ShareButtons
