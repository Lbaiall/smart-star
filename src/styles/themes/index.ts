export { baseTheme } from './base'
export { lightTheme } from './light'
export { darkTheme } from './dark'
export type { Theme } from './base'
export type { LightTheme } from './light'
export type { DarkTheme } from './dark'

import { lightTheme } from './light'
import { darkTheme } from './dark'

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const

export type ThemeName = keyof typeof themes
export type AppTheme = typeof themes.light