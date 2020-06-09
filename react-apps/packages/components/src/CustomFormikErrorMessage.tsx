import React from 'react'
import ErrorMessage from './ErrorMessage'

interface Props {
  children?: React.ReactNode
}

const CustomErrorMessage = (props: Props) => {
  const { children } = props
  return <ErrorMessage condition message={children as string} />
}

export default CustomErrorMessage
