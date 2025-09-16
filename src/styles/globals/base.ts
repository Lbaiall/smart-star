import { css } from 'styled-components'

export const baseStyles = css`
  html {
    font-family: ${({ theme }) => theme.typography.fontFamilies.sans.join(', ')};
  }

  body {
    background-color: ${({ theme }) => theme.semantic.background.primary};
    color: ${({ theme }) => theme.semantic.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    transition: background-color ${({ theme }) => theme.animations.duration.normal} ${({ theme }) => theme.animations.easing.easeInOut},
                color ${({ theme }) => theme.animations.duration.normal} ${({ theme }) => theme.animations.easing.easeInOut};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.semantic.surface.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.semantic.border.secondary};
    border-radius: ${({ theme }) => theme.spacing[1]};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.semantic.text.tertiary};
  }

  /* Selection styles */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  /* Focus styles for accessibility */
  .focus-visible {
    outline: 2px solid ${({ theme }) => theme.semantic.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.spacing[1]};
  }

  /* Loading skeleton animation */
  @keyframes skeleton-loading {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  .skeleton {
    animation: skeleton-loading 1.2s ease-in-out infinite;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.semantic.surface.secondary} 0px,
      ${({ theme }) => theme.semantic.surface.tertiary} 40px,
      ${({ theme }) => theme.semantic.surface.secondary} 80px
    );
    background-size: 200px 100%;
  }
`