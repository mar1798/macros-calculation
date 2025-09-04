import { style } from '@vanilla-extract/css'
import { border, color, font, media, rem, transition } from '../../styling/lib'
import { wrapperPadding } from '../../styling/properties.css'

export const container = style({
  marginBottom: rem(40),
})

export const content = style({
  display: 'flex',
  marginRight: wrapperPadding,
  marginLeft: wrapperPadding,
  justifyContent: 'center',
  backgroundImage: `radial-gradient(circle, ${color.neutral(200)} 15%, transparent 10%)`,
  backgroundPosition: 'bottom',
  backgroundSize: rem(8, 8),
  backgroundRepeat: 'repeat-x',
  paddingTop: rem(24),
  paddingBottom: rem(24),
  ...media({
    lg: {
      gap: rem(110),
      paddingTop: 0,
      paddingBottom: 0,
    },
  }),
})

export const nav = style({
  display: 'flex',
  gap: rem(12),
  alignItems: 'center',
  paddingBottom: rem(20),
  paddingTop: rem(20),
  ...media({
    lg: {
      paddingTop: rem(24),
      paddingBottom: rem(24),
    },
  }),
})

export const link = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: rem(999),
  background: 'transparent',
  font: font('16/24'),
  color: color.neutral(925),
  border: border(1, 'transparent'),
  transition: transition('border-color', 'color'),
  ...media({
    lg: {
      padding: rem(6, 10),
      font: font('14/20'),
      color: color.neutral(700),
      ':hover': {
        borderColor: color.neutral(200),
        color: color.neutral(900),
      },
    },
  }),
})
