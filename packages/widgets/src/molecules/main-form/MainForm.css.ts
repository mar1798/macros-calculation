import { style } from '@vanilla-extract/css'
import { rem } from '../../styling/lib'

export const container = style({
  maxWidth: rem(324),
  width: '100%',
})

export const field = style({
  marginBottom: rem(16),
})

export const button = style({
  width: '100%',
  marginTop: rem(24),
})
