import { createContext, useContext, useEffect, useState } from 'react'

const UIVariantContext = createContext(null)

const STORAGE_KEY = 'finovia-ui'

export function UIVariantProvider({ children }) {
  const [variant, setVariant] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === '1' || saved === '2') return saved
    }
    return '1'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, variant)
  }, [variant])

  return (
    <UIVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </UIVariantContext.Provider>
  )
}

export function useUIVariant() {
  const ctx = useContext(UIVariantContext)
  if (!ctx) throw new Error('useUIVariant must be used within UIVariantProvider')
  return ctx
}
