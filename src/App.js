import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SellerRegister from './pages/Seller Register/SellerRegister';
import Navbar from './components/Navbar'
import './App.css'
import SuccessPage from './pages/SuccessPage/SuccessPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/seller/register/:id" element={<SellerRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
