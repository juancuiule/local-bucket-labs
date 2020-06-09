import React from 'react'

interface Props {
  color: string
  width?: string
  height?: string
  className?: string
}

const ChevronIconUp = (props: Props) => {
  const id = Math.floor((Math.random() * 100) % 100)
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <mask
        id={`prefix__icon_up_${id}`}
        maskUnits="userSpaceOnUse"
        x={5}
        y={7}
        width={14}
        height={9}
      >
        <path
          d="M5.19 14.772l.62.619a.375.375 0 00.53 0L12 9.744l5.66 5.647a.375.375 0 00.53 0l.62-.62a.375.375 0 000-.53l-6.544-6.544a.375.375 0 00-.532 0L5.191 14.24a.375.375 0 000 .53z"
          fill="#fff"
        />
      </mask>
      <g mask={`url(#prefix__icon_up_${id})`}>
        <path fill={props.color} d="M24 24H0V0h24z" />
      </g>
    </svg>
  )
}

export default ChevronIconUp
