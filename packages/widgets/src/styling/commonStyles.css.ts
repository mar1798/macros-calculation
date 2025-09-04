import { ComplexStyleRule, globalStyle, keyframes, style } from '@vanilla-extract/css'
import { blur, color, font, linearGradient, media, rem, textShadow, uniteTextShadows } from './lib'
import { dropShadowTitleImage } from './mixin/drop-shadow'
import { boxShadowVar3, gradientBackground5 } from './mixin'

export const descriptionHero = style({
  font: font('16/24', 400),
  letterSpacing: rem(-0.176),
  color: color.neutral(700),
  maxWidth: rem(600),
})

globalStyle(`${descriptionHero} span`, {
  font: font('14/22', 500),
  letterSpacing: rem(-0.14),
  color: color.neutral(950),
  padding: rem(2, 5),
  borderRadius: rem(6),
  background: color.neutral(100),
  whiteSpace: 'nowrap',
})

export const title = style({
  color: color.neutral(950),
  font: font('32/40', 500, 'eloqua'),
  letterSpacing: rem(-0.32),
  marginBottom: rem(16),
  textAlign: 'center',
  marginInline: 'auto',
  position: 'relative',
  zIndex: 2,
  ...media({
    md: {
      font: font('40/48', 500, 'eloqua'),
      letterSpacing: rem(-0.4),
    },
    lg: {
      font: font('48/56', 500, 'eloqua'),
      letterSpacing: rem(-0.48),
    },
  }),
})

globalStyle(`${title} div`, {
  position: 'relative',
  display: 'inline-block',
})

globalStyle(`${title} img`, {
  position: 'relative',
  display: 'inline-block',
  zIndex: 2,
  width: rem(34),
  height: rem(34),
  marginInline: rem(4),
  verticalAlign: 'top',
  ...dropShadowTitleImage(),
  ...media({
    md: {
      verticalAlign: 'middle',
    },
    lg: {
      verticalAlign: 'top',
      width: rem(48),
      height: rem(48),
    },
  }),
})

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
})

export const skeleton = style({
  background: linearGradient(
    '90deg',
    [color.neutral(300), '25%'],
    [color.neutral(500), '50%'],
    [color.neutral(300), '75%']
  ),
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite linear`,
  borderRadius: rem(6),
})
