import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import NavMenu from './components/NavMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}
