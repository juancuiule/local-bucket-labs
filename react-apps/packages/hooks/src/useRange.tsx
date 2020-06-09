import * as React from 'react'

export default function useRange(initial: number, min: number, max: number) {
  const [value, set] = React.useState(initial)

  const increment = React.useCallback(
    () => set(value => Math.min(max, value + 1)),
    [max]
  )
  const decrement = React.useCallback(
    () => set(value => Math.max(min, value - 1)),
    [min]
  )
  const setValue = React.useCallback(
    (newValue: number) => {
      newValue > max ? set(max) : newValue < min ? set(min) : set(newValue)
    },
    [max, min, set]
  )
  return {
    value,
    increment,
    decrement,
    setValue,
  }
}
