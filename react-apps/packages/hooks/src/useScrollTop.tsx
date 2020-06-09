import React from 'react'

export default function useScrollTop(location: string) {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
}
