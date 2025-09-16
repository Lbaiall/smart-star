import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  children: ReactNode
}

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    min-height: 36px;
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    min-height: 44px;
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};
    min-height: 52px;
  `,
}

const variantStyles = {
  primary: css`
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary[500]},
      ${({ theme }) => theme.colors.primary[600]}
    );
    color: white;
    box-shadow: ${({ theme }) => theme.shadows.smooth.md};
    border: none;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.5s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.smooth.lg};
      
      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.primary[600]};
    border: 1.5px solid ${({ theme }) => theme.colors.primary[200]};
    box-shadow: ${({ theme }) => theme.shadows.smooth.sm};

    &:hover {
      background: ${({ theme }) => theme.colors.primary[50]};
      border-color: ${({ theme }) => theme.colors.primary[300]};
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.smooth.md};
    }

    &:active {
      transform: translateY(0);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: none;

    &:hover {
      background: ${({ theme }) => theme.colors.neutral[100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.neutral[200]};
    }
  `,
  glass: css`
    background: ${({ theme }) => theme.colors.glass.light};
    backdrop-filter: blur(10px);
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid ${({ theme }) => theme.colors.glass.medium};
    box-shadow: ${({ theme }) => theme.shadows.glass.sm};

    &:hover {
      background: ${({ theme }) => theme.colors.glass.medium};
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.glass.md};
    }

    &:active {
      transform: translateY(0);
    }
  `,
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  outline: none;
  transition: all ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut};
  white-space: nowrap;
  user-select: none;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};

  ${({ size }) => sizeStyles[size || 'medium']}
  ${({ variant }) => variantStyles[variant || 'primary']}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`

const Button = ({ children, variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button