import React from 'react'

interface Props {
  color: string
  width?: string
  height?: string
  className?: string
}

const ChevronIconDown = (props: Props) => {
  const id = Math.floor((Math.random() * 100) % 100)
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <mask
        id={`prefix__icon_down_${id}`}
        maskUnits="userSpaceOnUse"
        x={5}
        y={8}
        width={14}
        height={9}
      >
        <path
          d="M18.81 9.228l-.62-.619a.375.375 0 00-.53 0L12 14.256 6.34 8.61a.375.375 0 00-.53 0l-.62.62a.375.375 0 000 .53l6.545 6.544a.375.375 0 00.53 0L18.81 9.76a.375.375 0 000-.53z"
          fill="#fff"
        />
      </mask>
      <g mask={`url(#prefix__icon_down_${id})`}>
        <path fill={props.color} d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default ChevronIconDown
