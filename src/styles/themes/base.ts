import { colors, typography, spacing, shadows, animations, breakpoints, zIndex } from '../tokens'

export const baseTheme = {
  colors,
  typography,
  spacing,
  shadows,
  animations,
  breakpoints,
  zIndex,
  
  // Component-specific tokens
  components: {
    button: {
      height: {
        sm: spacing[8],
        md: spacing[10],
        lg: spacing[12],
      },
      padding: {
        sm: `${spacing[2]} ${spacing[3]}`,
        md: `${spacing[2.5]} ${spacing[4]}`,
        lg: `${spacing[3]} ${spacing[6]}`,
      },
      borderRadius: spacing[2],
      fontWeight: typography.fontWeights.medium,
    },
    
    input: {
      height: {
        sm: spacing[8],
        md: spacing[10],
        lg: spacing[12],
      },
      padding: {
        sm: `${spacing[2]} ${spacing[3]}`,
        md: `${spacing[2.5]} ${spacing[3]}`,
        lg: `${spacing[3]} ${spacing[4]}`,
      },
      borderRadius: spacing[1.5],
      fontSize: {
        sm: typography.fontSizes.sm,
        md: typography.fontSizes.base,
        lg: typography.fontSizes.lg,
      },
    },
    
    card: {
      borderRadius: spacing[3],
      padding: spacing[6],
      shadow: shadows.md,
    },
    
    modal: {
      borderRadius: spacing[3],
      shadow: shadows['2xl'],
      backdropBlur: '8px',
    },
  },
} as const

export type Theme = typeof baseTheme