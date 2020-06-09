import { useState, useEffect } from 'react'

const x = (userAgent: string) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))

  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows())

  return {
    isMobile,
    isAndroid,
    isIos,
  }
}

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(x(navigator.userAgent).isMobile())
  }, [])

  return { isMobile }
}
