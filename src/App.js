import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import About from './Components/pages/About';
import ContactUs from './Components/pages/ContactUs';
import Career from './Components/pages/Career';

function App() {
  return (
    <> 
      <Router>  
        <Navbar />
          <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="about/*"  element={<About/>} />  
            <Route path="services/*" element={<Services/>} />
            <Route path="career/*" element={<Career/>} />
            <Route path="contact-us/*"  element={<ContactUs/>} />  
          </Routes>
      </Router>
    </>
  );
}   

export default App;
