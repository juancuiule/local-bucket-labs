import React from 'react'
import { Grid } from '@material-ui/core'

interface Props {
  step: number
  total: number
  colorAll?: boolean
}

const StepCounter = (props: Props) => {
  const { total, step } = props
  return (
    <Grid container justify="space-between" style={{ margin: '55px 0 25px 0' }}>
      {Array.from({ length: total }).map((_, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'inline',
              backgroundColor:
                index === step || (props.colorAll && index < step)
                  ? 'var(--primary)'
                  : 'var(--gray)',
              height: '4px',
              width: `calc((100% - (${total} - 1) * 5px) / ${total})`,
            }}
          ></div>
        )
      })}
    </Grid>
  )
}

export default StepCounter
