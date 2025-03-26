import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const DiagnosticReport = () => {
  const location = useLocation();
  const analysis = location.state?.analysis || {
    issue: "Car won't start",
    rootCauses: [
      "Low battery voltage",
      "Faulty starter motor",
      "Ignition switch malfunction"
    ],
    recommendations: [
      "Check battery voltage with multimeter",
      "Inspect starter motor connections",
      "Test ignition switch continuity"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-blue-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ml-2 text-gray-800 dark:text-white">Vehicle Diagnostic Assistant</h1>
          </Link>
          <nav className="flex space-x-4">
            <Link to="/chatbot" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Back to Chat</Link>
            <Link to="/knowledge-base" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Knowledge Base</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 bg-blue-600 text-white">
            <h2 className="text-2xl font-bold">Diagnostic Report</h2>
            <p className="text-blue-100">Generated on {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Issue Reported</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
                <p className="text-gray-800 dark:text-gray-200">{analysis.issue}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">5 Why Analysis</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Why does the car not start?</h4>
                  <p className="text-gray-700 dark:text-gray-300">The engine doesn't crank when the key is turned.</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Why doesn't the engine crank?</h4>
                  <p className="text-gray-700 dark:text-gray-300">The starter motor isn't receiving power or is malfunctioning.</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Why isn't the starter receiving power?</h4>
                  <p className="text-gray-700 dark:text-gray-300">The battery voltage may be too low or there's a connection issue.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Probable Root Causes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {analysis.rootCauses.map((cause, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
                  >
                    {cause}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Recommended Actions</h3>
              <div className="space-y-3">
                {analysis.recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{rec}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">Need Professional Help?</h3>
              <p className="text-blue-700 dark:text-blue-400 mb-4">
                If you're unable to resolve this issue on your own, we recommend consulting with a certified mechanic.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Find Mechanics Near Me
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-6">
          <Link to="/chatbot">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg mr-4"
            >
              Back to Chat
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            onClick={() => window.print()}
          >
            Print Report
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticReport;
