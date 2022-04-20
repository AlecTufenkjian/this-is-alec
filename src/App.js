import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
