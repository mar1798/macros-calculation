/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import type { StyleRule } from '@vanilla-extract/css'

/**
 * Mixin which is used to hide scroll bars
 */

export function hideScrollbar() {
  return {
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  } satisfies StyleRule
}
