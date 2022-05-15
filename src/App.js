import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blank" element={<BlogPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
