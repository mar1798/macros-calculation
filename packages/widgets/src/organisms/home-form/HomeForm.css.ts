import { globalStyle, style } from '@vanilla-extract/css'
import { border, color, rem, shadow } from '../../styling/lib'
import { wrapperPadding } from '../../styling/properties.css'

export const container = style({
  overflow: 'hidden',
  position: 'relative',
  paddingRight: wrapperPadding,
  paddingLeft: wrapperPadding,
})

export const form = style({
  marginInline: 'auto',
})

export const subtitle = style({
  textAlign: 'center',
  maxWidth: rem(390),
  marginInline: 'auto',
})

globalStyle(`${subtitle} span`, {
  whiteSpace: 'nowrap',
})

export const title = style({
  maxWidth: rem(420),
})

export const ctaContent = style({
  justifyContent: 'center',
  display: 'flex',
  marginTop: rem(48),
})

export const formWrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: rem(450),
  borderRadius: rem(24),
  border: border(1, color.neutral(100)),
  padding: rem(32),
})

export const dot = style({
  position: 'absolute',
  width: rem(3),
  height: rem(3),
  borderRadius: '50%',
  background: color.neutral(200),
  boxShadow: shadow('in', rem(0, 1, 1, 0)).colorize(color.neutral('black', 0.2)),
})

export const dot1 = style({
  top: rem(16),
  left: rem(16),
})

export const dot2 = style({
  top: rem(16),
  right: rem(16),
})

export const dot3 = style({
  bottom: rem(16),
  left: rem(16),
})

export const dot4 = style({
  bottom: rem(16),
  right: rem(16),
})
