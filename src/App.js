import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import NavMenu from './components/NavMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<BlogPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}
