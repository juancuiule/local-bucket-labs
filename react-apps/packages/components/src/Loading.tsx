import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'

interface Props {
  color?: string
  height?: string
  loading: boolean
  fixed?: boolean
  style?: React.CSSProperties
}

const Loading = ({
  color = 'var(--primary)',
  height = '100vh',
  loading = false,
  fixed = false,
  style,
}: Props) => {
  const fixedStyle: React.CSSProperties = fixed
    ? {
        position: 'fixed',
        left: '0',
        top: '0',
        backgroundColor: '#fff',
        zIndex: 1500,
      }
    : {}
  return loading ? (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        height,
        ...fixedStyle,
        ...style,
      }}
    >
      <Grid item xs={12} sm={12} md={8} lg={6} style={{ textAlign: 'center' }}>
        <CircularProgress style={{ color }} size={100} thickness={4} />
      </Grid>
    </Grid>
  ) : null
}

export default Loading
