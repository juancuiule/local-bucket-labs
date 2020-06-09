import * as React from 'react'

type GatoLogoContextValue = {
  shouldShowGatoLogo: boolean
  setShouldShowGatoLogo: (
    updater: (shouldShowGatoLogo: boolean) => boolean
  ) => void
  pathnames: string[]
  setPathnames: (updater: (pathnames: string[]) => string[]) => void
}

const GatoLogo = React.createContext<GatoLogoContextValue | undefined>(
  undefined
)

type GatoLogoProviderProps = {
  value?: GatoLogoContextValue
  children: React.ReactNode
}

export function GatoLogoProvider(props: GatoLogoProviderProps) {
  const [shouldShowGatoLogo, setShouldShowGatoLogo] = React.useState(false)
  const [pathnames, setPathnames] = React.useState<string[]>([])
  const value = React.useMemo(
    () => ({
      shouldShowGatoLogo,
      setShouldShowGatoLogo,
      pathnames,
      setPathnames,
    }),
    [shouldShowGatoLogo, pathnames]
  )
  return <GatoLogo.Provider value={value} {...props} />
}

export default function useGatoLogo(pathnames: string[], location: string) {
  const context = React.useContext(GatoLogo)
  if (!context) {
    throw new Error(`useGatoLogo must be used within a GatoLogoProvider`)
  }

  const {
    shouldShowGatoLogo,
    setShouldShowGatoLogo,
    pathnames: contextPathnames,
    setPathnames,
  } = context

  React.useEffect(() => {
    setPathnames(() => pathnames)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showGatoLogo = React.useCallback(
    () => setShouldShowGatoLogo(_ => true),
    [setShouldShowGatoLogo]
  )

  const hideGatoLogo = React.useCallback(
    () => setShouldShowGatoLogo(_ => false),
    [setShouldShowGatoLogo]
  )

  React.useEffect(() => {
    if (contextPathnames.find(path => path.includes(location)) !== undefined) {
      showGatoLogo()
    } else {
      hideGatoLogo()
    }
  }, [contextPathnames, location, hideGatoLogo, showGatoLogo])

  return {
    shouldShowGatoLogo,
    // showGatoLogo,
    // hideGatoLogo,
  }
}
