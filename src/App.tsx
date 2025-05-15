import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Footer from './assets/components/Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './assets/pages/Info';
import XrayUploader from './assets/pages/XrayUploader';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black';
  }, [theme]);

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />

        {/* Route for the info page */}
        <Route path="/info" element={<Info />} />

        {/* Route for the XrayUploader page */}
        <Route path="/xray-uploader" element={<XrayUploader />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;