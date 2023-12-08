import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'

import Topnav from './components/topnav'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topnav />
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />

        </Routes>
        
      
        <Footer />
      </BrowserRouter>
    </>


  );
};

export default App
