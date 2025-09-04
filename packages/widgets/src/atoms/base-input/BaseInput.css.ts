import { createVar, style } from '@vanilla-extract/css'
import { color, font, rem, shadow, transition, uniteShadows, important } from '../../styling/lib'
import { hoverStyle } from '../../styling/mixin'

const vars = {
  textColor: createVar(),
  bgColor: createVar(),
  placeholderColor: createVar(),
  inputPadding: createVar(),
}

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(4),
  cursor: 'text',
  backgroundColor: vars.bgColor,
  borderRadius: rem(999),
  border: 'none',
  transition: transition('box-shadow'),
  overflow: 'hidden',
  padding: `0 ${vars.inputPadding}`,
  boxShadow: uniteShadows(
    shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(0, 0, 0, 0.04)'),
    shadow('out', rem(0, 2, 2, -1)).colorize('rgba(0, 0, 0, 0.03)'),
    shadow('out', rem(0, 1, 1, -0.5)).colorize('rgba(0, 0, 0, 0.03)'),
    shadow('out', rem(0, 0.5, 0.5, 0)).colorize('rgba(0, 0, 0, 0.03)'),
    shadow('out', rem(0, 0.5, 0.5, 1)).colorize('rgba(0, 0, 0, 0.06)')
  ),
  vars: {
    [vars.bgColor]: color.neutral(0),
    [vars.textColor]: color.neutral(700),
  },
  ...hoverStyle({
    boxShadow: shadow('out', rem(0, 0.5, 0.5, 1)).colorize('rgba(0, 0, 0, 0.06)'),
    vars: {
      [vars.textColor]: color.neutral(900),
    },
  }),
  ':focus-within': {
    boxShadow: important(
      uniteShadows(
        shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(0, 0, 0, 0.04)'),
        shadow('out', rem(0, 2, 2, -1)).colorize('rgba(0, 0, 0, 0.03)'),
        shadow('out', rem(0, 1, 1, -0.5)).colorize('rgba(0, 0, 0, 0.03)'),
        shadow('out', rem(0, 0.5, 0.5, 0)).colorize('rgba(0, 0, 0, 0.03)'),
        shadow('out', rem(0, 0, 0, 1)).colorize(color.neutral(900))
      )
    ),
    vars: {
      [vars.textColor]: important(color.neutral(950)),
    },
  },
})

export const small = style({
  height: rem(40),
  vars: {
    [vars.inputPadding]: rem(10),
  },
})

export const large = style({
  height: rem(44),
  vars: {
    [vars.inputPadding]: rem(12),
  },
})

export const icon = style({
  width: rem(20),
  height: rem(20),
  color: vars.textColor,
  transition: transition('color'),
})

export const input = style({
  backgroundColor: 'inherit',
  color: vars.textColor,
  font: font('14/20'),
  height: '100%',
  width: '100%',
  transition: transition('color'),
  padding: `${vars.inputPadding} 0`,
  '::placeholder': {
    font: font('14/20'),
    color: vars.textColor,
    transition: transition('color'),
  },
})

export const disabled = style({
  boxShadow: important('none'),
  vars: {
    [vars.bgColor]: color.neutral(50),
    [vars.textColor]: important(color.neutral(400)),
  },
})

export const errorIcon = style({
  color: color.red('base'),
  selectors: {
    [`${container}:focus-within &`]: {
      color: vars.textColor,
    },
  },
})

export const error = style({
  boxShadow: important(
    uniteShadows(
      shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('out', rem(0, 2, 2, -1)).colorize('rgba(0, 0, 0, 0.03)'),
      shadow('out', rem(0, 1, 1, -0.5)).colorize('rgba(0, 0, 0, 0.03)'),
      shadow('out', rem(0, 0.5, 0.5, 0)).colorize('rgba(0, 0, 0, 0.03)'),
      shadow('out', rem(0, 0, 0, 1)).colorize(color.red('base'))
    )
  ),
})
