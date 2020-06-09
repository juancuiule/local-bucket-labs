import React from 'react'

const useTimeout = (
  duration: number,
  callback: () => void
): [() => void, () => void, boolean] => {
  const [isActive, setIsActive] = React.useState(false)

  const start = React.useCallback(() => {
    setIsActive(true)
  }, [])

  const stop = React.useCallback(() => {
    setIsActive(false)
  }, [])

  React.useEffect(() => {
    let timeout: any
    if (isActive) {
      timeout = setTimeout(() => {
        callback()
        stop()
      }, duration * 1000)
    } else {
      clearTimeout(timeout)
    }
    return () => clearTimeout(timeout)
  }, [isActive, callback, duration, stop])

  return [start, stop, isActive]
}

export default useTimeout
