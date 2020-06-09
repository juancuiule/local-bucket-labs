import React from 'react'

type IconProps = {
  width?: number
  height?: number
  color?: string
  style?: React.CSSProperties
}

const TwitterIcon = ({
  width = 31,
  height = 26,
  style = {},
  color = '#54AEEF',
}: IconProps) => (
  <svg {...{ width, height, style }}>
    <title>{'twitter'}</title>
    <path
      d="M27.813 6.275c.02.275.02.55.02.826 0 8.399-6.393 18.077-18.077 18.077-3.6 0-6.943-1.043-9.756-2.852.511.059 1.003.078 1.534.078 2.97 0 5.705-1.003 7.888-2.714a6.365 6.365 0 01-5.94-4.406c.393.059.786.098 1.2.098.57 0 1.14-.079 1.671-.216A6.354 6.354 0 011.26 8.93v-.078c.846.472 1.83.767 2.872.806a6.349 6.349 0 01-2.833-5.291c0-1.18.315-2.262.866-3.206a18.06 18.06 0 0013.1 6.648 7.172 7.172 0 01-.157-1.456A6.35 6.35 0 0121.46 0c1.83 0 3.482.767 4.642 2.006A12.509 12.509 0 0030.134.472a6.336 6.336 0 01-2.793 3.501A12.737 12.737 0 0031 2.99a13.657 13.657 0 01-3.187 3.285z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
)

export default TwitterIcon
