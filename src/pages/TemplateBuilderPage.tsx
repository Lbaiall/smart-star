import styled from 'styled-components'
import Navigation from '../components/organisms/Navigation'
import GlassCard from '../components/atoms/GlassCard'

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

const TemplateBuilderPage = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Title>模板构建器</Title>
        <GlassCard>
          <p>模板构建器功能正在开发中...</p>
        </GlassCard>
      </Content>
    </Container>
  )
}

export default TemplateBuilderPage