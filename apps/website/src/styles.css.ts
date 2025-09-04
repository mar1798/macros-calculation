import { style } from '@vanilla-extract/css'
import { media, rem } from 'widgets/styling/lib'

export const main = style({
  marginTop: rem(100),
  ...media({
    lg: {
      marginTop: rem(82),
    },
  }),
})

export const hidden = style({
  overflow: 'hidden',
})
