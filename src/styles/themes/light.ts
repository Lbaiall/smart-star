import { baseTheme } from './base'

export const lightTheme = {
  ...baseTheme,
  
  semantic: {
    background: {
      primary: baseTheme.colors.neutral[0],
      secondary: baseTheme.colors.neutral[50],
      tertiary: baseTheme.colors.neutral[100],
      inverse: baseTheme.colors.neutral[900],
    },
    
    surface: {
      primary: baseTheme.colors.neutral[0],
      secondary: baseTheme.colors.neutral[50],
      tertiary: baseTheme.colors.neutral[100],
      elevated: baseTheme.colors.neutral[0],
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    
    border: {
      primary: baseTheme.colors.neutral[200],
      secondary: baseTheme.colors.neutral[300],
      focus: baseTheme.colors.primary[500],
      error: baseTheme.colors.error[500],
    },
    
    text: {
      primary: baseTheme.colors.neutral[900],
      secondary: baseTheme.colors.neutral[600],
      tertiary: baseTheme.colors.neutral[500],
      inverse: baseTheme.colors.neutral[0],
      placeholder: baseTheme.colors.neutral[400],
      disabled: baseTheme.colors.neutral[400],
      link: baseTheme.colors.primary[600],
      linkHover: baseTheme.colors.primary[700],
    },
    
    action: {
      primary: baseTheme.colors.primary[600],
      primaryHover: baseTheme.colors.primary[700],
      primaryActive: baseTheme.colors.primary[800],
      primaryDisabled: baseTheme.colors.neutral[300],
      
      secondary: baseTheme.colors.neutral[100],
      secondaryHover: baseTheme.colors.neutral[200],
      secondaryActive: baseTheme.colors.neutral[300],
      
      success: baseTheme.colors.success[600],
      successHover: baseTheme.colors.success[700],
      
      warning: baseTheme.colors.warning[600],
      warningHover: baseTheme.colors.warning[700],
      
      error: baseTheme.colors.error[600],
      errorHover: baseTheme.colors.error[700],
    },
    
    feedback: {
      success: {
        background: baseTheme.colors.success[50],
        border: baseTheme.colors.success[200],
        text: baseTheme.colors.success[800],
        icon: baseTheme.colors.success[600],
      },
      
      warning: {
        background: baseTheme.colors.warning[50],
        border: baseTheme.colors.warning[200],
        text: baseTheme.colors.warning[800],
        icon: baseTheme.colors.warning[600],
      },
      
      error: {
        background: baseTheme.colors.error[50],
        border: baseTheme.colors.error[200],
        text: baseTheme.colors.error[800],
        icon: baseTheme.colors.error[600],
      },
      
      info: {
        background: baseTheme.colors.primary[50],
        border: baseTheme.colors.primary[200],
        text: baseTheme.colors.primary[800],
        icon: baseTheme.colors.primary[600],
      },
    },
  },
} as const

export type LightTheme = typeof lightTheme