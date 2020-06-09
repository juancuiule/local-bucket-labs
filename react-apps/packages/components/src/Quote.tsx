import React from 'react'

type Props = {
  size?: number
  color?: string
  style?: React.CSSProperties
}

const Quote = (props: Props) => {
  const { color = 'var(--primary)', style } = props
  return (
    <svg width={150} height={150} fill="none" style={style}>
      <g opacity={0.1}>
        <mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={22}
          y={37}
          width={122}
          height={108}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.875 83.417h15.167c8.365 0 15.166 6.801 15.166 15.166v30.334c0 8.365-6.801 15.166-15.166 15.166H37.5c-8.365 0-15.167-6.801-15.167-15.166V77.729c0-21.944 17.869-39.812 39.813-39.812h3.791a9.476 9.476 0 019.48 9.479v7.583a9.476 9.476 0 01-9.48 9.48h-3.791c-7.323 0-13.271 5.947-13.271 13.27v5.688zm64.458 0H128.5c8.365 0 15.167 6.801 15.167 15.166v30.334c0 8.365-6.802 15.166-15.167 15.166h-26.542c-8.365 0-15.166-6.801-15.166-15.166V77.729c0-21.944 17.868-39.812 39.812-39.812h3.792a9.477 9.477 0 019.479 9.479v7.583a9.477 9.477 0 01-9.479 9.48h-3.792c-7.323 0-13.271 5.947-13.271 13.27v5.688z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <path fill={color} d="M-8 0h182v182H-8z" />
        </g>
      </g>
    </svg>
  )
}

export default Quote
