import { createGlobalStyle } from 'styled-components'
import { resetStyles } from './reset'
import { baseStyles } from './base'

export const GlobalStyles = createGlobalStyle`
  ${resetStyles}
  ${baseStyles}
`

export * from './reset'
export * from './base'