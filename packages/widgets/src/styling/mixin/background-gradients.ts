/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import type { StyleRule } from '@vanilla-extract/css'
import { linearGradient } from '../lib'

/**
 * Mixins which are used to work with gradients
 */

export function gradientBackground3() {
  return {
    background: linearGradient(
      '180deg',
      ['rgba(0, 0, 0, 0.90)', '0%'],
      ['rgba(0, 0, 0, 0.80)', '100%']
    ),
  } satisfies StyleRule
}

export function gradientBackground4() {
  return {
    background: linearGradient(
      '180deg',
      ['rgba(255, 255, 255, 0.96)', '0%'],
      ['rgba(255, 255, 255, 0.88)', '100%']
    ),
  } satisfies StyleRule
}

export function gradientBackground5() {
  return {
    background: linearGradient(
      '93deg',
      ['#8BD8FC', '-34.49%'],
      ['#449AFA', '23.07%'],
      ['#7D6BF9', '80.63%'],
      ['#CC6BF9', '138.19%']
    ),
  }
}
