import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, FileText, Layers, DollarSign } from 'lucide-react'
import Button from '../atoms/Button'
import StarLogo from '../atoms/StarLogo'

const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  transition: all ${({ theme }) => theme.transitions.duration.normal} ${({ theme }) => theme.transitions.timing.easeInOut};
  
  ${({ $scrolled, theme }) => $scrolled && `
    background: ${theme.colors.glass.white};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid ${theme.colors.glass.light};
    box-shadow: ${theme.shadows.glass.sm};
  `}
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
`

const LogoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary[500]};
    transition: width ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
    
    &::after {
      width: 100%;
    }
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${({ theme }) => theme.colors.background.primary};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  z-index: ${({ theme }) => theme.zIndex.modal};
`

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background.overlay};
  z-index: ${({ theme }) => theme.zIndex.overlay};
`

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/process', label: '文档处理', icon: <FileText size={18} /> },
    { path: '/templates', label: '模板库', icon: <Layers size={18} /> },
    { path: '/pricing', label: '价格', icon: <DollarSign size={18} /> },
  ]

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <Container>
          <Logo to="/">
            <LogoIconWrapper>
              <StarLogo size={40} animated={true} />
            </LogoIconWrapper>
            <LogoText>Smart Star</LogoText>
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <Actions>
            <Button variant="ghost" size="small">
              登录
            </Button>
            <Button variant="primary" size="small">
              免费试用
            </Button>
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </MobileMenuButton>
          </Actions>
        </Container>
      </Nav>

      {mobileMenuOpen && (
        <>
          <MobileOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
            {/* Mobile menu content */}
          </MobileMenu>
        </>
      )}
    </>
  )
}

export default Navigation