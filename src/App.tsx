import React from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Interest } from './pages/Interest';
import { About } from './pages/About';
import { Project } from './pages/Project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </div>
  );
}

export default App;
