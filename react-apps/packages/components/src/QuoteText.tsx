import React from 'react'
import { Typography } from '@material-ui/core'
import useAppStyles from './useAppStyles'

const LeftQuote = (props: any) => (
  <svg width={13} height={11} fill="none" {...props}>
    <path
      d="M6.93 10.082H12v-5.07h-1.924c-.052-1.404.806-2.236 2.548-2.444L12.208.67C8.984.774 6.93 2.178 6.93 5.948v4.134zm-6.89 0h5.07v-5.07H3.186c-.078-1.404.78-2.236 2.522-2.444L5.318.67C2.068.774.04 2.178.04 5.948v4.134z"
      fill="var(--primary)"
    />
  </svg>
)

const RightQuote = (props: any) => (
  <svg width={14} height={11} fill="none" {...props}>
    <path
      d="M7.93 10.212c3.224-.104 5.252-1.482 5.252-5.278V.8h-5.07v5.07h1.95c.052 1.404-.806 2.262-2.548 2.444l.416 1.898zm-6.916 0c3.25-.104 5.278-1.482 5.278-5.278V.8h-5.07v5.07h1.924C3.198 7.274 2.34 8.132.598 8.314l.416 1.898z"
      fill="var(--primary)"
    />
  </svg>
)

interface Props {
  text: string
}

const QuoteText = (props: Props) => {
  const appStyles = useAppStyles()
  return (
    <Typography className={appStyles.text}>
      <LeftQuote style={{ padding: '5px' }} />
      {props.text}
      <RightQuote style={{ padding: '5px' }} />
    </Typography>
  )
}

export default QuoteText
