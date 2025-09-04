import type { ComplexStyleRule, GlobalStyleRule } from '@vanilla-extract/css'
import { media } from '../lib'

export function hoverStyle(style: GlobalStyleRule): ComplexStyleRule {
  return {
    ...media({
      hoverAnimatable: {
        selectors: {
          '&:hover': style,
        },
      },
    }),
  }
}
