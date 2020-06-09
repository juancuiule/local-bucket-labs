import React from 'react'

const useTime = (
  initialSeconds: number,
  step: number = 1000,
  intervalDuration: number = 1000
): [() => void, () => void, number, boolean] => {
  const [isActive, setIsActive] = React.useState(false)
  const [miliseconds, setMiliseconds] = React.useState(initialSeconds * 1000)

  const start = React.useCallback(() => {
    setMiliseconds(initialSeconds * 1000)
    setIsActive(true)
  }, [initialSeconds])

  const stop = React.useCallback(() => {
    setMiliseconds(0)
    setIsActive(false)
  }, [])

  React.useEffect(() => {
    let interval: any = undefined
    if (isActive && miliseconds !== 0) {
      interval = setInterval(() => {
        setMiliseconds(miliseconds => miliseconds - step)
      }, intervalDuration)
    } else if (!isActive) {
      clearInterval(interval)
    } else {
      stop()
    }
    return () => clearInterval(interval)
  }, [isActive, miliseconds, step, intervalDuration, stop])

  return [start, stop, miliseconds, isActive]
}

export default useTime
