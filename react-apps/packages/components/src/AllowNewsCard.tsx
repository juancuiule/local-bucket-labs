import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  card: {
    maxWidth: '350px',
    border: '1px solid rgba(15, 39, 62, 0.1)',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '38px 20px 26px 20px',
  },
  cardTitle: {
    fontFamily: 'Gotham',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'var(--secondary)',
    marginBottom: '16px',
  },
  cardBody: {
    fontFamily: 'Gotham',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
    color: 'var(--secondary)',
  },
  cardButton: {
    fontFamily: 'Gotham',
    fontWeight: 'normal',
    lineHeight: '24px',
    fontSize: '16px',
    textTransform: 'none',
    color: 'var(--primary)',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  buttonHeight: {
    height: '38px',
    '@media only screen and (max-width : 376px)': {
      height: '62px',
    },
    '@media only screen and (max-width : 315px)': {
      height: '86px',
    },
  },
  cardSuccess: {
    color: '#42D08C',
    textAlign: 'left',
    display: 'flex',
    marginTop: '10px',
  },
})

interface Props {
  onSuscribeClick: () => void
  onUnsuscribeClick: () => void
}

export default function AllowNewsCard(props: Props) {
  const classes = useStyles()

  const [suscribed, setSuscribed] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      <Grid className={classes.card}>
        <Typography className={classes.cardTitle}>
          ¡Enterate de los resultados!
        </Typography>
        <Typography className={classes.cardBody}>
          Enterate de las novedades sobre los resultados de esta investigación y
          nuevos experimentos.
        </Typography>
        {!suscribed ? (
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            className={`${classes.cardButton} ${classes.buttonHeight}`}
            onClick={() => {
              setSuscribed(true)
              props.onSuscribeClick()
            }}
          >
            Quiero que me avisen
          </Button>
        ) : (
          <Grid className={classes.cardSuccess}>
            <div style={{ height: '24px', width: '24px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="6"
                  width="16"
                  height="12"
                >
                  <path
                    d="M17.62 6.60787L9.39989 14.828L6.37952 11.8076C6.23308 11.6612 5.99564 11.6612 5.84917 11.8076L4.9653 12.6915C4.81886 12.8379 4.81886 13.0754 4.9653 13.2218L9.1347 17.3912C9.28114 17.5377 9.51858 17.5377 9.66505 17.3912L19.0342 8.02209C19.1806 7.87566 19.1806 7.63822 19.0342 7.49175L18.1503 6.60787C18.0039 6.46144 17.7665 6.46144 17.62 6.60787Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <rect width="24" height="24" fill="#42D08C" />
                </g>
              </svg>
            </div>
            <div
              style={{
                marginLeft: '17px',
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              <span>¡Listo! Cuando tengamos novedades te vamos a avisar.</span>
            </div>
          </Grid>
        )}
      </Grid>
      <Grid
        style={{
          marginTop: '6px',
          width: '100%',
          textAlign: 'right',
          height: '39px',
        }}
      >
        {suscribed ? (
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            className={classes.cardButton}
            style={{ marginTop: '0' }}
            onClick={() => {
              setSuscribed(false)
              props.onUnsuscribeClick()
            }}
          >
            <span
              style={{
                paddingBottom: '2px',
                borderBottom: '1px solid var(--primary)',
                fontSize: '14px',
                lineHeight: '24px',
              }}
            >
              No quiero que me avisen
            </span>
          </Button>
        ) : null}
      </Grid>
    </div>
  )
}
