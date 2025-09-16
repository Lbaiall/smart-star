import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

// 星光闪烁动画
const starPulse = keyframes`
  0%, 100% {
    filter: brightness(1) saturate(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.2) saturate(1.3);
    transform: scale(1.05);
  }
`

// 光线扫过动画
const lightSweep = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) rotate(45deg);
    opacity: 0;
  }
`

// 主容器
const LogoContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[400]} 0%,
    ${({ theme }) => theme.colors.primary[500]} 50%,
    ${({ theme }) => theme.colors.primary[600]} 100%
  );
  background-size: 200% 200%;
  animation: ${starPulse} 3s ease-in-out infinite;
  overflow: hidden;
  box-shadow: 
    0 4px 20px rgba(236, 111, 61, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 70%
    );
    animation: ${lightSweep} 4s ease-in-out infinite;
  }
`

// 星形SVG容器
const StarSvg = styled.svg`
  width: 20px;
  height: 20px;
  z-index: 2;
  position: relative;
`

// 星形路径
const StarPath = styled(motion.path)`
  fill: white;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
`

// 中心光点
const CenterDot = styled(motion.circle)`
  fill: #fff;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.9));
`

// 外围光环
const OuterRing = styled(motion.circle)`
  fill: none;
  stroke: rgba(255, 255, 255, 0.3);
  stroke-width: 0.5;
`

interface StarLogoProps {
  size?: number
  animated?: boolean
}

const StarLogo = ({ size = 40, animated = true }: StarLogoProps) => {
  return (
    <LogoContainer style={{ width: size, height: size }}>
      <StarSvg viewBox="0 0 24 24" width={size * 0.5} height={size * 0.5}>
        {/* 外围光环 */}
        <OuterRing
          cx="12"
          cy="12"
          r="10"
          initial={{ scale: 0, opacity: 0 }}
          animate={animated ? {
            scale: [0, 1.2, 1],
            opacity: [0, 0.6, 0.3]
          } : { scale: 1, opacity: 0.3 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* 主星形 - 更现代的几何设计 */}
        <StarPath
          d="M12 2L14.5 8.5L22 9L17 14L18.5 22L12 18L5.5 22L7 14L2 9L9.5 8.5L12 2Z"
          initial={{ scale: 0, rotate: -180 }}
          animate={animated ? {
            scale: 1,
            rotate: 0
          } : { scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        />
        
        {/* 中心智能点 - 代表AI核心 */}
        <CenterDot
          cx="12"
          cy="12"
          r="2"
          initial={{ scale: 0 }}
          animate={animated ? {
            scale: [0, 1.5, 1],
            opacity: [0, 1, 0.8]
          } : { scale: 1, opacity: 0.8 }}
          transition={{
            duration: 1,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* 智能连接线 - 象征神经网络 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: [0, 0.6, 0] } : { opacity: 0.3 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <motion.line x1="12" y1="4" x2="12" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <motion.line x1="12" y1="16" x2="12" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <motion.line x1="4" y1="12" x2="8" y2="12" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <motion.line x1="16" y1="12" x2="20" y2="12" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
        </motion.g>
      </StarSvg>
    </LogoContainer>
  )
}

export default StarLogo