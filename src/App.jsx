import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './components/About';
import Portofolio from './Portofolio';
import ThanksPage from './components/ThanksPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
