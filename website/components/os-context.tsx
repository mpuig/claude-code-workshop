import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

export type Platform = 'mac' | 'win'

type OsContextType = {
  os: Platform
  toggle: () => void
}

const OsContext = createContext<OsContextType>({ os: 'mac', toggle: () => {} })

export function OsProvider({ children }: { children: ReactNode }) {
  const [os, setOs] = useState<Platform>('mac')

  useEffect(() => {
    const stored = localStorage.getItem('os-platform') as Platform | null
    if (stored === 'mac' || stored === 'win') {
      setOs(stored)
    }
  }, [])

  const toggle = useCallback(() => {
    setOs(prev => {
      const next = prev === 'mac' ? 'win' : 'mac'
      localStorage.setItem('os-platform', next)
      return next
    })
  }, [])

  return <OsContext.Provider value={{ os, toggle }}>{children}</OsContext.Provider>
}

export function useOs() {
  return useContext(OsContext)
}
