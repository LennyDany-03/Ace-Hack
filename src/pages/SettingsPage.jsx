"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const SettingsHelp = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" || false)
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en")
  const [activeTab, setActiveTab] = useState("settings")

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())

    // Apply dark mode to document
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const changeLanguage = (e) => {
    const newLanguage = e.target.value
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const faqs = [
    {
      question: "How does the diagnostic chatbot work?",
      answer:
        "Our diagnostic chatbot uses advanced AI algorithms to analyze the symptoms you describe. It applies 8D problem-solving methodology, 5 Why Analysis, and Fault Tree Analysis to identify the root cause of your vehicle issues. The more details you provide, the more accurate the diagnosis will be.",
    },
    {
      question: "Is the diagnostic report accurate?",
      answer:
        "The diagnostic report provides probable causes based on the information you provide. While our AI is trained on extensive automotive data, it's meant to be a starting point for troubleshooting. For critical issues, we always recommend consulting with a certified mechanic.",
    },
    {
      question: "Can I save my diagnostic reports?",
      answer:
        "Yes, you can save or print your diagnostic reports for future reference. Each report includes a detailed analysis of the issue, potential root causes, and recommended actions.",
    },
    {
      question: "What information should I provide for the best diagnosis?",
      answer:
        "For the most accurate diagnosis, provide details such as: vehicle make, model, and year; when the issue started; any unusual sounds, smells, or behaviors; whether the issue is constant or intermittent; and any recent maintenance or repairs.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team by clicking the 'Contact Support' button below. Our team is available Monday through Friday, 9 AM to 5 PM EST.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-blue-600 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ml-2 text-gray-800 dark:text-white">Vehicle Diagnostic Assistant</h1>
          </Link>
          <nav className="flex space-x-4">
            <Link
              to="/chatbot"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Diagnostic Chat
            </Link>
            <Link
              to="/knowledge-base"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Knowledge Base
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "settings"
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab("help")}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "help"
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Help & FAQs
            </button>
          </div>

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Application Settings</h2>

              <div className="space-y-6">
                {/* Appearance Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Appearance</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Dark Mode</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark theme</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </motion.div>

                {/* Language Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Language</h3>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Language</label>
                    <select
                      value={language}
                      onChange={changeLanguage}
                      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="ja">日本語</option>
                    </select>
                  </div>
                </motion.div>

                {/* Notifications Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Notifications</h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        id="email-notifications"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="email-notifications" className="ml-2 text-gray-700 dark:text-gray-300">
                        Email Notifications
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="maintenance-reminders"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="maintenance-reminders" className="ml-2 text-gray-700 dark:text-gray-300">
                        Maintenance Reminders
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="diagnostic-updates"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="diagnostic-updates" className="ml-2 text-gray-700 dark:text-gray-300">
                        Diagnostic Updates
                      </label>
                    </div>
                  </div>
                </motion.div>

                {/* Data & Privacy Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Data & Privacy</h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        id="data-collection"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="data-collection" className="ml-2 text-gray-700 dark:text-gray-300">
                        Allow anonymous data collection to improve diagnostics
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="chat-history"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="chat-history" className="ml-2 text-gray-700 dark:text-gray-300">
                        Save chat history
                      </label>
                    </div>
                  </div>

                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium"
                    >
                      Clear All Data
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
                >
                  Save Settings
                </motion.button>
              </div>
            </div>
          )}

          {/* Help & FAQs Tab */}
          {activeTab === "help" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Help & Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Need More Help?</h3>
                  <p className="text-blue-700 dark:text-blue-400 mb-6">
                    Our support team is ready to assist you with any questions or issues you may have with the Vehicle
                    Diagnostic Assistant.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
                  >
                    Contact Support
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    About Vehicle Diagnostic Assistant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Version 1.0.0</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    © 2023 Vehicle Diagnostic Assistant. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SettingsHelp

