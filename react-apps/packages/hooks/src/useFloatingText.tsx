import * as React from 'react'

type FloatingTextContextValue = {
  shouldShowFloatingText: boolean
  setShouldShowFloatingText: (
    updater: (shouldShowFloatingText: boolean) => boolean
  ) => void
  pathnames: string[]
  setPathnames: (updater: (pathnames: string[]) => string[]) => void
}

const FloatingText = React.createContext<FloatingTextContextValue | undefined>(
  undefined
)

type FloatingTextProviderProps = {
  value?: FloatingTextContextValue
  children: React.ReactNode
}

export function FloatingTextProvider(props: FloatingTextProviderProps) {
  const [shouldShowFloatingText, setShouldShowFloatingText] = React.useState(
    false
  )
  const [pathnames, setPathnames] = React.useState<string[]>([])
  const value = React.useMemo(
    () => ({
      shouldShowFloatingText,
      setShouldShowFloatingText,
      pathnames,
      setPathnames,
    }),
    [shouldShowFloatingText, pathnames]
  )
  return <FloatingText.Provider value={value} {...props} />
}

export default function useFLoatingText(pathnames: string[], location: string) {
  const context = React.useContext(FloatingText)
  if (!context) {
    throw new Error(
      `useFLoatingText must be used within a FloatingTextProvider`
    )
  }

  const {
    shouldShowFloatingText,
    setShouldShowFloatingText,
    pathnames: contextPathnames,
    setPathnames,
  } = context

  React.useEffect(() => {
    setPathnames(() => pathnames)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showFloatingText = React.useCallback(
    () => setShouldShowFloatingText(_ => true),
    [setShouldShowFloatingText]
  )

  const hideFloatingText = React.useCallback(
    () => setShouldShowFloatingText(_ => false),
    [setShouldShowFloatingText]
  )

  React.useEffect(() => {
    if (contextPathnames.find(path => path.includes(location)) !== undefined) {
      showFloatingText()
    } else {
      hideFloatingText()
    }
  }, [contextPathnames, location, hideFloatingText, showFloatingText])

  return {
    shouldShowFloatingText,
    // showFloatingText,
    // hideFloatingText,
  }
}
