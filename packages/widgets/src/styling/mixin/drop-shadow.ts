import { dropShadow, rem, uniteDropShadows } from '../lib'
import type { StyleRule } from '@vanilla-extract/css'

export const dropShadowTitleImage = () => {
  return {
    filter: uniteDropShadows(
      dropShadow(rem(0, 2, 8)).colorize('rgba(0, 0, 0, 0.24)'),
      dropShadow(rem(0, 1, 2)).colorize('rgba(0, 0, 0, 0.24)')
    ),
  } satisfies StyleRule
}
