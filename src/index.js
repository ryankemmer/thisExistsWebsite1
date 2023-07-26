import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Paradise from './pages/Paradise';
import BleedingOut from './pages/BleedingOut';
import ThePast from './pages/ThePast';
import ThreeAM from './pages/3AM';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="paradise" element={<Paradise />} />
          <Route path="bleedingout" element={<BleedingOut />} />
          <Route path="3am" element={<ThreeAM />} />
          <Route path="thepast" element={<ThePast />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

