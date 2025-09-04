import { createElement, type FC } from 'react'
import type { IBasicStyling } from '../types'

export function iconSubset<T extends Record<string, FC<IBasicStyling>>, K extends keyof T>(
  map: T,
  fallback: FC<IBasicStyling>,
): FC<{ icon: K } & IBasicStyling> {
  // eslint-disable-next-line react/display-name
  return ({ icon, className }) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!map[icon]) {
        return createElement(fallback, { className })
    }
    return createElement(map[icon], { className })
  }
}
