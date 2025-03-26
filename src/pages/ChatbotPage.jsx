import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Vehicle Diagnostic Assistant. What issue are you experiencing with your vehicle?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const messagesEndRef = useRef(null);
  
  const suggestedQuestions = [
    "My car won't start",
    "Engine is making strange noises",
    "Car is overheating",
    "Brakes feel spongy"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot thinking
    setIsLoading(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      let botResponse;
      
      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes("won't start")) {
        botResponse = { 
          id: messages.length + 2, 
          text: "I understand your car won't start. Let's diagnose this issue. Can you tell me if you hear any sounds when you turn the key?", 
          isBot: true 
        };
      } else if (input.toLowerCase().includes("noise") || input.toLowerCase().includes("sound")) {
        botResponse = { 
          id: messages.length + 2, 
          text: "Engine noises can indicate various issues. Can you describe the sound? Is it a knocking, whining, or grinding noise?", 
          isBot: true 
        };
      } else if (input.toLowerCase().includes("overheat")) {
        botResponse = { 
          id: messages.length + 2, 
          text: "Overheating can be serious. When did you first notice this issue? Have you checked your coolant level recently?", 
          isBot: true 
        };
      } else if (input.toLowerCase().includes("brake")) {
        botResponse = { 
          id: messages.length + 2, 
          text: "Spongy brakes could indicate air in the brake lines or a leak. When was the last time you had your brakes serviced?", 
          isBot: true 
        };
      } else {
        botResponse = { 
          id: messages.length + 2, 
          text: "I see. Could you provide more details about the issue? When did it start and under what conditions does it occur?", 
          isBot: true 
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
      
      // After a few messages, offer to generate a diagnostic report
      if (messages.length > 4) {
        setAnalysis({
          issue: input,
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
        });
      }
    }, 1500);
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
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
            <Link to="/knowledge-base" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Knowledge Base</Link>
            <Link to="/settings" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Settings</Link>
          </nav>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full p-4 gap-4">
        {/* Chat Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <div className="p-4 bg-blue-600 text-white">
            <h2 className="text-lg font-semibold">Diagnostic Chat</h2>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[60vh]">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none' 
                      : 'bg-blue-600 text-white rounded-tr-none'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-4"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </AnimatePresence>
          </div>
          
          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your vehicle issue..."
                className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </form>
        </motion.div>
        
        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-80 space-y-4"
        >
          {/* Suggested Questions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Suggested Questions</h3>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="w-full text-left p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Diagnostic Report Button */}
          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Diagnostic Report Ready</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Based on our conversation, I've prepared a diagnostic report for your vehicle issue.
              </p>
              <Link to="/diagnostic-report" state={{ analysis }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                >
                  View Diagnostic Report
                </motion.button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotPage;
