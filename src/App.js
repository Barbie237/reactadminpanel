import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import About from './Components/pages/About';

function App() {
  return (
    <> 
      <Router>  
        <Navbar />
          <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="about/*"  element={<About/>} />  
            <Route path="services/*" element={<Services/>} />
            <Route path="products/*" element={<Products/>} />
            <Route path="sign-up/*"  element={<SignUp/>} />  
          </Routes>
      </Router>
    </>
  );
}   

export default App;
