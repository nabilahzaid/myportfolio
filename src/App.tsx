import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './layouts/Main';
import { Profile } from './components/Profile';
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
      {/* <Main /> */}
    
    {/* <Profile nama='Nelle was here' />
    <Profile nama='Belle was here' />
    <Profile className='text-3xl font-bold underline text-primary hover:bg-secondary hover:text-white' 
      nama='Belle was here'/>
      <Profile nama='Belle 2 was here'/> */}
    </div>
  );
}

export default App;
