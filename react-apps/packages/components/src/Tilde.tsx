import React from 'react'

export interface TildeProps {
  color: string
  width?: string
  height?: string
}

const Tilde = (props: TildeProps) => (
  <svg viewBox="0 0 24 19" {...props}>
    <path
      fill={props.color}
      d="M8.71 18.1L.6 9.99l3.54-3.53 4.57 4.57L19.63.11l3.53 3.54z"
    />
  </svg>
)

export default Tilde
