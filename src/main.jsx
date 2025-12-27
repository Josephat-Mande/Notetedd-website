import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ContactPage from './pages/ContactPage'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/Faq'
import CTA from './components/CTA'
import NotFound from './pages/NotFound'
import DownloadPage from './components/DownloadPage'
import PrivacyPolicy from './components/PrivacyPolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
