import { createTheme } from '@vanilla-extract/css'
import { vars } from './contract.css'
import { prepColor } from '../lib'

export const lightTheme = {
  color: {
    neutral: {
      0: prepColor('fff'),
      25: prepColor('F7F7F7'),
      50: prepColor('F2F2F2'),
      100: prepColor('EBEBEB'),
      200: prepColor('E0E0E0'),
      300: prepColor('CCCCCC'),
      400: prepColor('B8B8B8'),
      450: prepColor('A3A3A3'),
      500: prepColor('8F8F8F'),
      600: prepColor('707070'),
      700: prepColor('525252'),
      800: prepColor('3D3D3D'),
      900: prepColor('2E2E2E'),
      925: prepColor('262626'),
      950: prepColor('1C1C1C'),
      black: prepColor('000'),
    },
    blue: {
      dark: prepColor('256DCC'),
      base: prepColor('5B9DF3'),
      light: prepColor('EBF0FF'),
    },
    purple: {
      base: prepColor('6200F5'),
      light: prepColor('F3EBFF'),
    },
    pink: {
      base: prepColor('F500E9'),
      light: prepColor('FFEBFE'),
    },
    red: {
      base: prepColor('F17171'),
      light: prepColor('FFEBEB'),
    },
  },
  font: {
    inter: `var(--font-inter, Inter, sans-serif)`,
    eloqua: `var(--font-eloqua, Eloqua, sans-serif)`,
  },
} as const

export const lightThemeStyle = createTheme(vars, lightTheme)
