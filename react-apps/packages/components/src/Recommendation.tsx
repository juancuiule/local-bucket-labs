import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { analyticsUtils } from '@elgatoylacaja/utils'

const useStyles = makeStyles({
  root: {
    marginTop: '24px',
    width: '95%',
    marginBottom: '10px',
  },
  expTitle: {
    fontFamily: 'Gotham',
    fontWeight: 700,
    textAlign: 'left',
    letterSpacing: '-0.56px',
    fontSize: 24,
    color: 'var(--secondary)',
    margin: '10px 0 0',
    '@media only screen and (max-width : 800px)': {
      fontSize: 18,
    },
  },
  expBody: {
    fontFamily: 'neuton',
    textAlign: 'left',
    fontSize: 17,
    color: 'var(--secondary)',
    margin: '5px 0 0',
    '@media only screen and (max-width : 800px)': {
      fontSize: 14,
    },
  },
  expPreview: {
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
})

interface Props {
  title: string
  description: string
  imgUrl: string
  experimentUrl: string
  analyticsSlug?: string
}

const Recomendation = ({
  title,
  description,
  imgUrl,
  experimentUrl,
  analyticsSlug,
}: Props) => {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <a
        href={experimentUrl}
        rel="noopener noreferrer"
        target="_blank"
        onClick={() => {
          if (analyticsSlug !== undefined) {
            analyticsUtils.CLICK_RECOMENDACION(analyticsSlug)
          }
        }}
        className={classes.link}
      >
        <Grid>
          <img
            className={classes.expPreview}
            src={
              imgUrl.includes('http')
                ? imgUrl
                : `${process.env.PUBLIC_URL}${imgUrl}`
            }
            alt="imagen experimento"
          />
        </Grid>
        <Grid>
          <Typography className={classes.expTitle}>{title}</Typography>
        </Grid>
        <Grid>
          <Typography className={classes.expBody}>{description}</Typography>
        </Grid>
      </a>
    </Grid>
  )
}

export default Recomendation
