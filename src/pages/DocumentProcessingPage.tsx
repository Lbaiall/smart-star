import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Upload, Cpu, Download } from 'lucide-react'
import Navigation from '../components/organisms/Navigation'
import GlassCard from '../components/atoms/GlassCard'
import Button from '../components/atoms/Button'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[50]} 0%,
    ${({ theme }) => theme.colors.neutral[50]} 100%
  );
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[16]};
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`

const ProcessingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`

const StepCard = styled(motion.div)`
  text-align: center;
`

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[400]},
    ${({ theme }) => theme.colors.primary[600]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing[6]};
  color: white;
`

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`

const DocumentProcessingPage = () => {
  const steps = [
    {
      icon: <Upload size={32} />,
      title: '上传文档',
      description: '支持PDF、图片等多种格式，拖拽即可上传'
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI处理',
      description: '智能识别和提取文档中的关键信息'
    },
    {
      icon: <Download size={32} />,
      title: '导出结果',
      description: '获得结构化数据，支持多种格式导出'
    }
  ]

  return (
    <Container>
      <Navigation />
      <Content>
        <Title>文档处理</Title>
        
        <ProcessingGrid>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard>
                <StepIcon>
                  {step.icon}
                </StepIcon>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </GlassCard>
            </StepCard>
          ))}
        </ProcessingGrid>

        <div style={{ textAlign: 'center' }}>
          <Button variant="primary" size="large">
            开始处理
          </Button>
        </div>
      </Content>
    </Container>
  )
}

export default DocumentProcessingPage