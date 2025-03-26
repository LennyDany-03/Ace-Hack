import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import ChatbotPage from './pages/ChatbotPage.jsx';
import DiagnosticReportPage from './pages/DiagnosticReportPage.jsx';
import KnowledgeBasePage from './pages/KnowledgeBasePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

const App = () => {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/diagnostic-report" element={<DiagnosticReportPage />} />
              <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
