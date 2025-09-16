import { baseTheme } from './base'

export const darkTheme = {
  ...baseTheme,
  
  semantic: {
    background: {
      primary: baseTheme.colors.neutral[950],
      secondary: baseTheme.colors.neutral[900],
      tertiary: baseTheme.colors.neutral[800],
      inverse: baseTheme.colors.neutral[0],
    },
    
    surface: {
      primary: baseTheme.colors.neutral[950],
      secondary: baseTheme.colors.neutral[900],
      tertiary: baseTheme.colors.neutral[800],
      elevated: baseTheme.colors.neutral[900],
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    
    border: {
      primary: baseTheme.colors.neutral[800],
      secondary: baseTheme.colors.neutral[700],
      focus: baseTheme.colors.primary[400],
      error: baseTheme.colors.error[500],
    },
    
    text: {
      primary: baseTheme.colors.neutral[50],
      secondary: baseTheme.colors.neutral[400],
      tertiary: baseTheme.colors.neutral[500],
      inverse: baseTheme.colors.neutral[900],
      placeholder: baseTheme.colors.neutral[600],
      disabled: baseTheme.colors.neutral[600],
      link: baseTheme.colors.primary[400],
      linkHover: baseTheme.colors.primary[300],
    },
    
    action: {
      primary: baseTheme.colors.primary[500],
      primaryHover: baseTheme.colors.primary[400],
      primaryActive: baseTheme.colors.primary[300],
      primaryDisabled: baseTheme.colors.neutral[700],
      
      secondary: baseTheme.colors.neutral[800],
      secondaryHover: baseTheme.colors.neutral[700],
      secondaryActive: baseTheme.colors.neutral[600],
      
      success: baseTheme.colors.success[500],
      successHover: baseTheme.colors.success[400],
      
      warning: baseTheme.colors.warning[500],
      warningHover: baseTheme.colors.warning[400],
      
      error: baseTheme.colors.error[500],
      errorHover: baseTheme.colors.error[400],
    },
    
    feedback: {
      success: {
        background: baseTheme.colors.success[950],
        border: baseTheme.colors.success[800],
        text: baseTheme.colors.success[200],
        icon: baseTheme.colors.success[400],
      },
      
      warning: {
        background: baseTheme.colors.warning[950],
        border: baseTheme.colors.warning[800],
        text: baseTheme.colors.warning[200],
        icon: baseTheme.colors.warning[400],
      },
      
      error: {
        background: baseTheme.colors.error[950],
        border: baseTheme.colors.error[800],
        text: baseTheme.colors.error[200],
        icon: baseTheme.colors.error[400],
      },
      
      info: {
        background: baseTheme.colors.primary[950],
        border: baseTheme.colors.primary[800],
        text: baseTheme.colors.primary[200],
        icon: baseTheme.colors.primary[400],
      },
    },
  },
} as const

export type DarkTheme = typeof darkTheme