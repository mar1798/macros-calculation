import { globalStyle, style } from '@vanilla-extract/css'
import { flexColumn } from '../../styling/mixin'
import { color, font, rem } from '../../styling/lib'

export const container = style({
  ...flexColumn(),
})

export const label = style({
  font: font('13/20'),
  color: color.neutral(950),
  marginBottom: rem(8),
  display: 'flex',
  alignItems: 'center',
  gap: rem(2),
})

globalStyle(`${label} span`, {
  color: color.neutral(500),
})

export const asterix = style({
  color: color.neutral(500),
})

export const helperText = style({
  font: font('12/16'),
  color: color.neutral(600),
  marginTop: rem(6),
  display: 'flex',
  alignItems: 'center',
  gap: rem(4),
})

export const infoIcon = style({
  width: rem(14),
  height: rem(14),
  flexShrink: 0,
  color: color.neutral(450),
})

export const error = style({
  color: color.red('base'),
})
