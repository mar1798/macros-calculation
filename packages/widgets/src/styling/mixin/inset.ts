import type { CSSProperties } from '@vanilla-extract/css'
import { rem } from '../lib'

/**
 * Mixin which is used to imitate CSS inset property
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export function inset(
  top: number,
  right: number | undefined = undefined,
  bottom: number | undefined = undefined,
  left: number | undefined = undefined
) {
  if (right === undefined) {
    const val = rem(top)
    return {
      left: val,
      right: val,
      top: val,
      bottom: val,
    } satisfies CSSProperties
  }

  if (bottom === undefined) {
    const t = rem(top),
      r = rem(right)
    return {
      top: t,
      right: r,
      bottom: t,
      left: r,
    } satisfies CSSProperties
  }

  if (left === undefined) {
    const t = rem(top),
      r = rem(right),
      b = rem(bottom)
    return {
      top: t,
      right: r,
      bottom: b,
      left: r,
    } satisfies CSSProperties
  }

  return {
    top: rem(top),
    right: rem(right),
    bottom: rem(bottom),
    left: rem(left),
  } satisfies CSSProperties
}
