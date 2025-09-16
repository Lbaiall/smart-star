import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  padding?: 'small' | 'medium' | 'large'
  hoverable?: boolean
  onClick?: () => void
}

const StyledGlassCard = styled(motion.div)<{ $padding: string; $hoverable: boolean }>`
  background: ${({ theme }) => theme.colors.glass.white};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.light};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ $padding }) => $padding};
  box-shadow: ${({ theme }) => theme.shadows.glass.md};
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.duration.normal} ${({ theme }) => theme.transitions.timing.easeInOut};
  cursor: ${({ $hoverable, onClick }) => ($hoverable || onClick) ? 'pointer' : 'default'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    pointer-events: none;
  }

  ${({ $hoverable, onClick, theme }) => ($hoverable || onClick) && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.glass.lg};
      border-color: ${theme.colors.primary[200]};
      background: ${theme.colors.glass.light};
    }

    &:active {
      transform: translateY(-2px);
    }
  `}
`

const paddingSizes = {
  small: '16px',
  medium: '24px',
  large: '32px',
}

const GlassCard = ({ 
  children, 
  padding = 'medium', 
  hoverable = false,
  onClick,
  ...props 
}: GlassCardProps) => {
  return (
    <StyledGlassCard
      $padding={paddingSizes[padding]}
      $hoverable={hoverable}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </StyledGlassCard>
  )
}

export default GlassCard