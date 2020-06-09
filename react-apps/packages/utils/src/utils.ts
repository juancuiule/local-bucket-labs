import * as Yup from 'yup'
import { Option } from './options'

export const capitalizeFirstLetter = (string: string) =>
  `${string.charAt(0).toUpperCase()}${string.toLowerCase().slice(1)}`

export const getIds = <T = string>(list: Array<{ id: T }>) =>
  list.map(({ id }) => id)

export const getValues = <T = string>(list: Array<{ value: T }>) =>
  list.map(({ value }) => value)

export const movedShape = Yup.boolean().oneOf([true])

export const optionShape = (options: Option[]) =>
  Yup.string()
    .oneOf(
      getIds(options).map(_ => _.toString()),
      'Este campo es requerido'
    )
    .required('Este campo es requerido')

export function shuffle<T>(array: Array<T>) {
  const newArray = array.map(x => x)
  let currentIndex = newArray.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }
  return newArray
}

export const toRoman = (x: number) => {
  const ROMANOS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  return ROMANOS[x - 1]
}

export const random = (from: number) => (to: number) =>
  from + Math.floor(Math.random() * (to - from + 1))

// export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
