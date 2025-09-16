import styled from 'styled-components'
import { motion } from 'framer-motion'

interface FloatingOrbProps {
  size?: number
  color?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  delay?: number
}

const Orb = styled(motion.div)<FloatingOrbProps>`
  position: absolute;
  width: ${({ size }) => size || 200}px;
  height: ${({ size }) => size || 200}px;
  border-radius: 50%;
  background: ${({ color }) => color || 'rgba(236, 111, 61, 0.1)'};
  filter: blur(40px);
  top: ${({ top }) => top || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  pointer-events: none;
  z-index: 0;
`

const FloatingOrb = (props: FloatingOrbProps) => {
  const { delay = 0 } = props
  
  return (
    <Orb
      {...props}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default FloatingOrb