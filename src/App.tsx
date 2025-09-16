import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DocumentProcessingPage from './pages/DocumentProcessingPage'
import TemplateBuilderPage from './pages/TemplateBuilderPage'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/process" element={<DocumentProcessingPage />} />
      <Route path="/templates" element={<TemplateBuilderPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  )
}

export default App