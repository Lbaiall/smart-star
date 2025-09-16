import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
`

const PricingCard = styled(motion.div)`
  text-align: center;
`

const PlanName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[600]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text.secondary};
`

const PricingPage = () => {
  const plans = [
    {
      name: '基础版',
      price: '免费',
      features: [
        '每月100页处理',
        '基础模板',
        '邮件支持'
      ]
    },
    {
      name: '专业版',
      price: '￥99/月',
      features: [
        '每月1000页处理',
        '高级模板',
        'API访问',
        '优先支持'
      ]
    },
    {
      name: '企业版',
      price: '联系我们',
      features: [
        '无限处理',
        '定制模板',
        '私有部署',
        '24/7支持'
      ]
    }
  ]

  return (
    <Container>
      <Navigation />
      <Content>
        <Title>价格方案</Title>
        
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard>
                <PlanName>{plan.name}</PlanName>
                <Price>{plan.price}</Price>
                <FeatureList>
                  {plan.features.map((feature, featureIndex) => (
                    <Feature key={featureIndex}>
                      <Check size={16} color="#EC6F3D" />
                      {feature}
                    </Feature>
                  ))}
                </FeatureList>
                <Button variant="primary" fullWidth>
                  选择方案
                </Button>
              </GlassCard>
            </PricingCard>
          ))}
        </PricingGrid>
      </Content>
    </Container>
  )
}

export default PricingPage