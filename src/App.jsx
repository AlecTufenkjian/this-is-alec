import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import NavMenu from './components/NavMenu';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}
