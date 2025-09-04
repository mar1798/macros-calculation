import { color, rem, shadow, uniteShadows } from '../lib'
import type { StyleRule } from '@vanilla-extract/css'

export function boxShadowVar1() {
  return {
    boxShadow: uniteShadows(
      shadow('out', rem(0, 8, 8, -4)).colorize('rgba(0, 0, 0, 0.02)'),
      shadow('out', rem(0, 4, 4, -2)).colorize('rgba(0, 0, 0, 0.03)'),
      shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(27, 27, 27, 0.03)'),
      shadow('out', rem(0, 2, 2, -1)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('out', rem(0, 0.5, 1, 0)).colorize('rgba(0, 0, 0, 0.06)'),
      shadow('out', rem(0, 0, 0, 1)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('in', rem(0, -1, 0.5, 0)).colorize('rgba(0, 0, 0, 0.04)')
    ),
  } satisfies StyleRule
}

export function boxShadowVar2() {
  return {
    boxShadow: uniteShadows(
      shadow('out', rem(0, 32, 32, -12)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 16, 16, -8)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 8, 8, -2)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 4, 4, -2)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 2, 2, -1)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 1, 1, -0.5)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('in', rem(0, 1, 2, 0)).colorize('rgba(255, 255, 255, 0.04)'),
      shadow('in', rem(0, 0.5, 0.5, 0)).colorize('rgba(255, 255, 255, 0.10)')
    ),
  } satisfies StyleRule
}

export function boxShadowVar3() {
  return {
    boxShadow: uniteShadows(
      shadow('in', rem(0, -1, 0.5, 0)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('out', rem(0, 8, 8, -4)).colorize('rgba(0, 0, 0, 0.02)'),
      shadow('out', rem(0, 4, 4, -2)).colorize('rgba(0, 0, 0, 0.03)'),
      shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(27, 27, 27, 0.03)'),
      shadow('out', rem(0, 2, 2, -1)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('out', rem(0, 0.5, 1, 0)).colorize('rgba(0, 0, 0, 0.06)'),
      shadow('out', rem(0, 0, 0, 1)).colorize('rgba(0, 0, 0, 0.04)')
    ),
  } satisfies StyleRule
}

export const boxShadowVar4 = () => {
  return {
    boxShadow: uniteShadows(
      shadow('in', rem(0, -2, 1, 0)).colorize('rgba(0, 0, 0, 0.20)'),
      shadow('in', rem(0, 2, 1, 0)).colorize('rgba(0, 0, 0, 0.30)'),
      shadow('out', rem(0, 32, 32, -12)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 16, 16, -8)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 8, 8, -2)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 4, 4, -2)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 2, 2, -1)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('out', rem(0, 1, 1, -0.5)).colorize('rgba(27, 27, 27, 0.12)'),
      shadow('in', rem(0, 1, 2, 0)).colorize('rgba(255, 255, 255, 0.04)'),
      shadow('in', rem(0, 0.5, 0.5, 0)).colorize('rgba(255, 255, 255, 0.10)')
    ),
  } satisfies StyleRule
}

export const boxShadowVar5 = () => {
  return {
    boxShadow: uniteShadows(
      shadow('in', rem(0, 2, 3, 0)).colorize('rgba(0, 0, 0, 0.10)'),
      shadow('in', rem(0, -2, 3, 0)).colorize('rgba(0, 0, 0, 0.05)'),
      shadow('in', rem(0, -1, 0.5, 0)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('out', rem(0, 8, 8, -4)).colorize('rgba(0, 0, 0, 0.02)'),
      shadow('out', rem(0, 4, 4, -2)).colorize('rgba(0, 0, 0, 0.03)'),
      shadow('out', rem(0, 3, 3, -1.5)).colorize('rgba(27, 27, 27, 0.03)'),
      shadow('out', rem(0, 2, 2, -1)).colorize('rgba(0, 0, 0, 0.04)'),
      shadow('out', rem(0, 0.5, 1, 0)).colorize('rgba(0, 0, 0, 0.06)'),
      shadow('out', rem(0, 0, 0, 1)).colorize('rgba(0, 0, 0, 0.04)')
    ),
  } satisfies StyleRule
}

export const boxShadowVar6 = () => {
  return {
    boxShadow: uniteShadows(
      shadow('out', rem(0, 12, 36, 0)).colorize('rgba(0, 0, 0, 0.16)'),
      shadow('out', rem(0, 4, 16, 0)).colorize('rgba(0, 0, 0, 0.24)'),
      shadow('out', rem(0, 1, 2, 0)).colorize('rgba(0, 0, 0, 0.24)'),
      shadow('out', rem(0, 0, 0, 1)).colorize('rgba(0, 0, 0, 0.64)'),
      shadow('in', rem(0, 1, 3, 0)).colorize(color.neutral(0, 0.06)),
      shadow('in', rem(0, 0.5, 0.5, 0)).colorize(color.neutral(0, 0.06))
    ),
  } satisfies StyleRule
}
