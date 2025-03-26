import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedArticle, setExpandedArticle] = useState(null);
  
  const articles = [
    {
      id: 1,
      title: "Car Won't Start: Common Causes and Solutions",
      category: "Starting Issues",
      excerpt: "Learn about the most common reasons why your car won't start and how to diagnose them.",
      content: `
        <h3>Common Causes for a Car Not Starting</h3>
        <p>When your car won't start, it's typically due to one of these issues:</p>
        <ul>
          <li><strong>Dead Battery:</strong> The most common cause. Check for dim lights or no electrical response.</li>
          <li><strong>Faulty Starter Motor:</strong> Listen for a clicking sound when turning the key.</li>
          <li><strong>Bad Alternator:</strong> If your battery is new but still dies quickly.</li>
          <li><strong>Fuel System Issues:</strong> Clogged fuel filter or faulty fuel pump.</li>
          <li><strong>Ignition Switch Problems:</strong> If dashboard lights work but the engine won't crank.</li>
        </ul>
        
        <h3>DIY Diagnostic Steps</h3>
        <ol>
          <li>Check if dashboard lights come on when you turn the key</li>
          <li>Listen for any sounds when attempting to start</li>
          <li>Check battery terminals for corrosion or loose connections</li>
          <li>Test battery voltage with a multimeter if possible</li>
          <li>Try jump-starting the vehicle</li>
        </ol>
        
        <h3>When to Call a Professional</h3>
        <p>If basic troubleshooting doesn't resolve the issue, it's time to consult a mechanic, especially if:</p>
        <ul>
          <li>You've tried jump-starting and the car still won't start</li>
          <li>You hear unusual grinding or clicking sounds</li>
          <li>There are burning smells or visible leaks</li>
          <li>The car starts but immediately stalls</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Understanding Engine Warning Lights",
      category: "Dashboard Warnings",
      excerpt: "A guide to decoding those mysterious dashboard warning lights and what action to take.",
      content: `
        <h3>Common Warning Lights and Their Meanings</h3>
        <p>Modern vehicles have numerous warning lights that indicate different issues:</p>
        <ul>
          <li><strong>Check Engine Light:</strong> General engine problems that could affect emissions, performance, or fuel economy.</li>
          <li><strong>Battery Alert:</strong> Issues with the charging system or battery.</li>
          <li><strong>Oil Pressure Warning:</strong> Low oil pressure which can cause severe engine damage if ignored.</li>
          <li><strong>Temperature Warning:</strong> Engine overheating, which requires immediate attention.</li>
          <li><strong>Brake System Warning:</strong> Issues with the braking system that could affect stopping ability.</li>
          <li><strong>ABS Warning:</strong> Problems with the anti-lock braking system.</li>
        </ul>
        
        <h3>What to Do When a Warning Light Appears</h3>
        <ol>
          <li>Don't panic, but don't ignore it either</li>
          <li>Check your owner's manual for specific information</li>
          <li>For red warning lights, consider stopping safely as soon as possible</li>
          <li>For yellow/amber lights, schedule a check-up soon</li>
          <li>Use an OBD-II scanner to read specific error codes</li>
        </ol>
        
        <h3>Preventative Maintenance</h3>
        <p>Regular maintenance can prevent many warning lights from appearing:</p>
        <ul>
          <li>Follow your vehicle's recommended service schedule</li>
          <li>Check fluid levels regularly</li>
          <li>Address minor issues before they become major problems</li>
          <li>Keep records of all maintenance performed</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Brake System Troubleshooting",
      category: "Brakes",
      excerpt: "How to identify and fix common brake problems before they become dangerous.",
      content: `
        <h3>Signs of Brake Problems</h3>
        <p>Your brakes may need attention if you notice:</p>
        <ul>
          <li><strong>Squealing or Grinding:</strong> Indicates worn brake pads or rotors.</li>
          <li><strong>Soft/Spongy Pedal:</strong> Could be air in the brake lines or a fluid leak.</li>
          <li><strong>Vibration When Braking:</strong> Often caused by warped rotors.</li>
          <li><strong>Pulling to One Side:</strong> May indicate uneven brake pad wear or a stuck caliper.</li>
          <li><strong>Burning Smell:</strong> Overheated brakes or stuck calipers.</li>
        </ul>
        
        <h3>DIY Brake Inspection</h3>
        <ol>
          <li>Visually inspect brake pads through the wheel spokes</li>
          <li>Check for brake fluid leaks around wheels and under the vehicle</li>
          <li>Inspect brake fluid level in the master cylinder reservoir</li>
          <li>Test brakes in a safe area to feel for any issues</li>
        </ol>
        
        <h3>When to Replace Brake Components</h3>
        <ul>
          <li>Brake pads: When they're less than 1/4 inch thick</li>
          <li>Rotors: When they're heavily grooved, cracked, or below minimum thickness</li>
          <li>Brake fluid: Every 2 years or when it appears dark and contaminated</li>
          <li>Calipers: When they're sticking or leaking</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Overheating Engine: Causes and Solutions",
      category: "Cooling System",
      excerpt: "What to do when your temperature gauge rises into the danger zone.",
      content: `
        <h3>Why Engines Overheat</h3>
        <p>Engine overheating can be caused by several factors:</p>
        <ul>
          <li><strong>Low Coolant Level:</strong> Due to leaks or evaporation over time.</li>
          <li><strong>Faulty Thermostat:</strong> Prevents proper coolant circulation.</li>
          <li><strong>Bad Water Pump:</strong> Fails to circulate coolant through the engine.</li>
          <li><strong>Radiator Issues:</strong> Clogged radiator or malfunctioning fan.</li>
          <li><strong>Head Gasket Leak:</strong> Allows coolant to leak into cylinders or oil.</li>
        </ul>
        
        <h3>What to Do If Your Engine Overheats</h3>
        <ol>
          <li>Turn off the AC and turn on the heater (draws heat from the engine)</li>
          <li>Pull over safely and turn off the engine</li>
          <li>Wait at least 30 minutes for the engine to cool</li>
          <li>Check coolant level (only when engine is cool)</li>
          <li>Look for visible leaks</li>
          <li>If necessary, add coolant or water temporarily</li>
        </ol>
        
        <h3>Preventing Overheating</h3>
        <ul>
          <li>Check coolant levels regularly</li>
          <li>Inspect hoses and connections for leaks</li>
          <li>Replace the thermostat according to maintenance schedule</li>
          <li>Ensure the radiator fan is working properly</li>
          <li>Flush and replace coolant as recommended</li>
        </ul>
      `
    }
  ];
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleArticleClick = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
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
            <Link to="/chatbot" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Diagnostic Chat</Link>
            <Link to="/settings" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Settings</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Vehicle Knowledge Base</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Browse our collection of articles and guides to help you understand and troubleshoot common vehicle issues.
          </p>
          
          <div className="relative mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for articles..."
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{article.title}</h3>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleArticleClick(article.id)}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                  >
                    {expandedArticle === article.id ? 'Show Less' : 'Read More'}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${expandedArticle === article.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {expandedArticle === article.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 dark:border-gray-600"
                    >
                      <div 
                        className="p-6 text-gray-700 dark:text-gray-300 article-content"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms or browse all articles.</p>
            </div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-blue-600 rounded-xl shadow-lg p-6 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Can't find what you're looking for?</h3>
              <p className="text-blue-100">Our diagnostic chatbot can help you troubleshoot specific vehicle issues.</p>
            </div>
            <Link to="/chatbot">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg"
              >
                Start Diagnostic Chat
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
