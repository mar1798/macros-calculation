import { createVar, style } from '@vanilla-extract/css'
import {
  blur,
  border,
  color,
  font,
  important,
  linearGradient,
  media,
  rem,
  transition,
} from '../../styling/lib'
import {
  boxShadowVar2,
  boxShadowVar3,
  boxShadowVar4,
  boxShadowVar5,
  gradientBackground3,
  gradientBackground4,
} from '../../styling/mixin'

export const vars = {
  hoverColor: createVar(),
  borderColor: createVar(),
  childrenColor: createVar(),
  iconColor: createVar(),
  boxShadow: createVar(),
}

export const container = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: rem(999),
  border: border(1, 'transparent'),
  gap: rem(4),
  transition: transition('background', 'box-shadow', 'border-color'),
  overflow: 'hidden',
  ':after': {
    content: '',
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0,
    borderRadius: rem(999),
    boxShadow: vars.boxShadow,
    opacity: 0,
    transition: transition('opacity'),
  },
  ...media({
    hoverAnimatable: {
      selectors: {
        '&:hover': {
          background: vars.hoverColor,
          borderColor: vars.borderColor,
        },
      },
    },
    lg: {
      selectors: {
        '&:hover::after': {
          opacity: 1,
        },
      },
    },
  }),
})

export const small = style({
  padding: rem(6),
  maxHeight: rem(32),
})

export const medium = style({
  padding: rem(10),
  maxHeight: rem(40),
})

export const large = style({
  padding: rem(12),
  maxHeight: rem(44),
})

export const extraLarge = style({
  padding: rem(14),
  maxHeight: rem(48),
})

export const primary = style({
  ...gradientBackground3(),
  ...boxShadowVar2(),
  color: color.neutral(0),
  vars: {
    [vars.hoverColor]: linearGradient(
      '180deg',
      ['rgba(0, 0, 0, 0.80)', '0%'],
      ['rgba(0, 0, 0, 0.80)', '100%']
    ),
    [vars.borderColor]: 'transparent',
    [vars.childrenColor]: gradientBackground4().background,
    [vars.boxShadow]: boxShadowVar4().boxShadow,
  },
  ':active': {
    background: important(gradientBackground3().background),
  },
})

export const secondary = style({
  ...boxShadowVar3(),
  background: color.neutral(0),
  color: color.neutral(900),
  vars: {
    [vars.hoverColor]: color.neutral(0),
    [vars.borderColor]: color.neutral(0),
    [vars.childrenColor]: gradientBackground3().background,
    [vars.boxShadow]: boxShadowVar5().boxShadow,
  },
})

export const stroke = style({
  backgroundColor: 'transparent',
  color: 'transparent',
  border: border(1, color.neutral(200)),
  vars: {
    [vars.hoverColor]: color.neutral(100),
    [vars.borderColor]: 'transparent',
    [vars.childrenColor]: gradientBackground3().background,
  },
  ':active': {
    border: important(border(1, color.neutral(200))),
  },
})

export const plain = style({
  backgroundColor: 'transparent',
  border: border(1, 'transparent'),
  vars: {
    [vars.hoverColor]: 'transparent',
    [vars.borderColor]: color.neutral(200),
    [vars.childrenColor]: gradientBackground3().background,
  },
  ':active': {
    background: 'transparent',
    borderColor: important('transparent'),
  },
})

export const child = style({
  background: vars.childrenColor,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: font('14/20', 500),
  color: 'transparent',
})

export const icon = style({
  width: rem(20),
  height: rem(20),
  flexShrink: 0,
  vars: {
    [vars.iconColor]: color.neutral(450),
  },
  color: vars.iconColor,
})

export const disabled = style({
  background: color.neutral(50),
  boxShadow: 'none',
  pointerEvents: 'none',
  vars: {
    [vars.hoverColor]: color.neutral(50),
    [vars.childrenColor]: color.neutral(400),
    [vars.iconColor]: color.neutral(400),
  },
})

export const light = style({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: rem(67),
  height: rem(67),
  mixBlendMode: 'plus-lighter',
  background:
    'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.02) 100%)',
  filter: blur(10),
  transition: transition('opacity'),
  opacity: 0,
  selectors: {
    [`${container}:hover &`]: {
      opacity: 1,
    },
  },
})
