import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatbotPage from './pages/ChatbotPage'
import DiagnosticReportPage from './pages/DiagnosticReportPage'
import KnowledgeBasePage from './pages/KnowledgeBasePage'
import SettingsPage from './pages/SettingsPage'

const App = () => {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/report" element={<DiagnosticReportPage />} />
              <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
