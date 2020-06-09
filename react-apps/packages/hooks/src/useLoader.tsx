import * as React from 'react'

type LoaderContextValue = {
  loading: boolean
  setLoading: (updater: (loading: boolean) => boolean) => void
}

const LoaderContext = React.createContext<LoaderContextValue | undefined>(
  undefined
)

type LoadingProviderProps = {
  value?: LoaderContextValue
  children: React.ReactNode
}

export function LoadingProvider(props: LoadingProviderProps) {
  const [loading, setLoading] = React.useState(false)
  const value = React.useMemo(() => ({ loading, setLoading }), [loading])
  return <LoaderContext.Provider value={value} {...props} />
}

export default function useLoader() {
  const context = React.useContext(LoaderContext)
  if (!context) {
    throw new Error(`useLoading must be used within a LoadingProvider`)
  }
  const { loading, setLoading } = context
  const startLoading = React.useCallback(() => setLoading(_ => true), [
    setLoading,
  ])
  const stopLoading = React.useCallback(() => setLoading(_ => false), [
    setLoading,
  ])
  return {
    loading,
    startLoading,
    stopLoading,
  }
}
