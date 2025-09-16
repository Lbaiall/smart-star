import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import styled, { css } from 'styled-components'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.semantic.action.primary};
    color: ${({ theme }) => theme.semantic.text.inverse};
    border: 1px solid ${({ theme }) => theme.semantic.action.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.primaryHover};
      border-color: ${({ theme }) => theme.semantic.action.primaryHover};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.primaryActive};
      border-color: ${({ theme }) => theme.semantic.action.primaryActive};
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme.semantic.action.secondary};
    color: ${({ theme }) => theme.semantic.text.primary};
    border: 1px solid ${({ theme }) => theme.semantic.border.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.secondaryHover};
      border-color: ${({ theme }) => theme.semantic.border.secondary};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.secondaryActive};
    }
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.semantic.text.primary};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.secondary};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.secondaryHover};
    }
  `,

  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.semantic.action.primary};
    border: 1px solid ${({ theme }) => theme.semantic.action.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.primary};
      color: ${({ theme }) => theme.semantic.text.inverse};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.semantic.action.primaryActive};
      border-color: ${({ theme }) => theme.semantic.action.primaryActive};
    }
  `,
}

const buttonSizes = {
  sm: css`
    height: ${({ theme }) => theme.components.button.height.sm};
    padding: ${({ theme }) => theme.components.button.padding.sm};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  `,

  md: css`
    height: ${({ theme }) => theme.components.button.height.md};
    padding: ${({ theme }) => theme.components.button.padding.md};
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
  `,

  lg: css`
    height: ${({ theme }) => theme.components.button.height.lg};
    padding: ${({ theme }) => theme.components.button.padding.lg};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  `,
}

const StyledButton = styled.button<{
  $variant: ButtonProps['variant']
  $size: ButtonProps['size']
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  font-weight: ${({ theme }) => theme.components.button.fontWeight};
  font-family: inherit;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.duration.fast}ms ${({ theme }) => theme.animations.easing.easeInOut};
  text-decoration: none;
  white-space: nowrap;

  ${({ $variant }) => buttonVariants[$variant || 'primary']}
  ${({ $size }) => buttonSizes[$size || 'md']}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.semantic.border.focus};
    outline-offset: 2px;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, disabled, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'