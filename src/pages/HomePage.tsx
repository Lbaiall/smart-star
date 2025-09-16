import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Globe, Cpu, FileText, ChevronRight } from 'lucide-react'
import Button from '../components/atoms/Button'
import GlassCard from '../components/atoms/GlassCard'
import FloatingOrb from '../components/molecules/FloatingOrb'
import Navigation from '../components/organisms/Navigation'

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[50]} 0%,
    ${({ theme }) => theme.colors.neutral[50]} 25%,
    ${({ theme }) => theme.colors.primary[100]} 50%,
    ${({ theme }) => theme.colors.neutral[100]} 75%,
    ${({ theme }) => theme.colors.primary[50]} 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  z-index: -2;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

const NoiseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  z-index: -1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
`

const HeroSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[20]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.glass.white};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.primary[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text.primary} 0%,
    ${({ theme }) => theme.colors.primary[600]} 50%,
    ${({ theme }) => theme.colors.text.primary} 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textGradient 3s ease infinite;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.1;

  @keyframes textGradient {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 100% center; }
  }
`

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing[10]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
`

const FeatureCard = styled(motion.div)`
  position: relative;
`

const FeatureIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[400]},
    ${({ theme }) => theme.colors.primary[600]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: white;
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`

const HomePage = () => {

  const features = [
    {
      icon: <Zap size={28} />,
      title: '极速转换',
      description: '毫秒级处理速度，将PDF、图片等非结构化数据瞬间转为精确的结构化格式。'
    },
    {
      icon: <Shield size={28} />,
      title: '精准提取',
      description: '智能识别表格、文本、图表等元素，准确率99.9%，零信息丢失。'
    },
    {
      icon: <Globe size={28} />,
      title: '格式自由',
      description: '支持JSON、Excel、CSV等多种输出格式，满足不同系统对接需求。'
    },
    {
      icon: <Cpu size={28} />,
      title: '智能理解',
      description: '深度学习技术理解文档语义，自动识别字段关系和数据类型。'
    },
    {
      icon: <FileText size={28} />,
      title: '结构定制',
      description: '灵活定义输出数据结构，完全按照您的业务逻辑组织信息。'
    },
    {
      icon: <Sparkles size={28} />,
      title: '持续优化',
      description: 'AI不断学习您的数据模式，让结构化输出越来越贴合业务需求。'
    }
  ]

  return (
    <Container>
      <GradientBackground />
      <NoiseOverlay />
      <Navigation />
      
      <FloatingOrb 
        size={300} 
        color="rgba(236, 111, 61, 0.1)"
        top="10%"
        left="-10%"
        delay={0}
      />
      <FloatingOrb 
        size={400} 
        color="rgba(236, 111, 61, 0.08)"
        top="60%"
        right="-15%"
        delay={2}
      />
      <FloatingOrb 
        size={250} 
        color="rgba(236, 111, 61, 0.06)"
        bottom="10%"
        left="10%"
        delay={4}
      />

      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Badge
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles size={16} />
            数据之星 V2.0
          </Badge>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            智能文档处理
            <br />
            结构化数据之星
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            将非结构化数据转换为结构化数据，让信息价值如星光般闪耀。
            精准提取，智能转换，为您的数据赋予新的生命。
          </Subtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button variant="primary" size="large">
              开始免费试用
              <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" size="large">
              观看演示
              <ChevronRight size={20} />
            </Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <GlassCard>
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </GlassCard>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </Container>
  )
}

export default HomePage