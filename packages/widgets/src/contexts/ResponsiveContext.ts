import { createContainer } from '../utils/unstated'
import { useState, useEffect } from 'react'
import { useWindowEventListener } from '../hooks'
import { responsiveMap, responsiveMatcher } from '../utils/responsive'

export interface ResponsiveValueProps extends ReturnType<typeof responsiveMap> {
  ready: boolean
}

export type ResponsiveContextProps = ResponsiveValueProps

export const ResponsiveContext = createContainer<ResponsiveContextProps, undefined>(() => {
  const [val, setVal] = useState(() => ({ ready: false, ...responsiveMap(() => false) }))

  const handler = (): void => {
    const newState = { ready: true, ...responsiveMap(responsiveMatcher) }
    setVal(prev => {
      for (const key in newState) {
        if (
          newState[key as keyof ResponsiveValueProps] !== prev[key as keyof ResponsiveValueProps]
        ) {
          return newState
        }
      }
      return prev
    })
  }
  useWindowEventListener('resize', handler)
  useEffect(handler, [])

  return { ...val }
})
