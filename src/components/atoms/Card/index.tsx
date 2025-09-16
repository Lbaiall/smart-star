import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import styled from 'styled-components'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const StyledCard = styled.div<{
  $variant: CardProps['variant']
  $padding: CardProps['padding']
  $hover: boolean
}>`
  background: ${({ theme }) => theme.semantic.surface.primary};
  border-radius: ${({ theme }) => theme.components.card.borderRadius};
  border: 1px solid ${({ theme, $variant }) => 
    $variant === 'outlined' ? theme.semantic.border.primary : 'transparent'
  };
  box-shadow: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'elevated':
        return theme.shadows.lg
      case 'outlined':
        return 'none'
      default:
        return theme.components.card.shadow
    }
  }};
  transition: all ${({ theme }) => theme.animations.duration.normal}ms ${({ theme }) => theme.animations.easing.easeInOut};

  ${({ $padding, theme }) => {
    switch ($padding) {
      case 'none':
        return 'padding: 0;'
      case 'sm':
        return `padding: ${theme.spacing[4]};`
      case 'lg':
        return `padding: ${theme.spacing[8]};`
      default:
        return `padding: ${theme.components.card.padding};`
    }
  }}

  ${({ $hover, theme }) =>
    $hover &&
    `
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', padding = 'md', hover = false, ...props }, ref) => {
    return (
      <StyledCard
        ref={ref}
        $variant={variant}
        $padding={padding}
        $hover={hover}
        {...props}
      >
        {children}
      </StyledCard>
    )
  }
)

Card.displayName = 'Card'