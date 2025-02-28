import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { LuSunMoon } from 'react-icons/lu';
import { BsSun } from 'react-icons/bs'; // Import Sun icon
import { useEffect } from 'react';

function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    document.body.classList.remove('light', 'dark'); // Remove existing classes
    document.body.classList.add(mode); // Add current mode class
  }, [mode]); // Runs whenever `mode` changes

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  return (
    <Router>
      <Header mode={mode} />
      <div className={mode}>
        <AppRoutes mode={mode} />
      </div>
      <Footer mode={mode} />
      <button 
        className={`fixed bottom-7 right-8 rounded-md p-2 z-10 text-2xl border border-opacity-10 transition-all duration-300 ease-in-out ${mode=== 'dark'? 'border-white bg-opacity-20 bg-black shadow-card-inset text-white': 'border-black bg-white bg-opacity-65 text-black'}`}
        onClick={toggleMode} // Corrected onClick
      >
        {mode === 'dark' ? <LuSunMoon /> : <BsSun />}
      </button>
    </Router>
  );
}

export default App;
