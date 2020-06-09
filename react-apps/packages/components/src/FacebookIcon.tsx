import React from 'react'

type IconProps = {
  width?: number
  height?: number
  color?: string
  style?: React.CSSProperties
}

const FacebookIcon = ({
  width = 14,
  height = 25,
  style = {},
  color = 'var(--facebook)',
}: IconProps) => (
  <svg {...{ width, height, style }}>
    <title>{'facebook'}</title>
    <path
      d="M4.067 24.889V13.757H0V9.333h4.067V5.848C4.067 2.06 6.592 0 10.277 0 12.043 0 13.56.122 14 .175v3.957h-2.556c-2.005 0-2.392.875-2.392 2.153v3.048h4.524l-.62 4.424H9.051v11.132"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
)

export default FacebookIcon
