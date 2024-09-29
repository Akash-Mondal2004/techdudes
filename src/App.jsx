
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/navbar';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Pricing from './components/Pricing/Pricing';
import Faq from './components/Pricing/Faq';
// import Back from './components/common/back/Back';
import PriceCard from './components/Pricing/PricingCard';
function App() {
  

  return (
    <Router>
      <div className="App p-0">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Pricing/>
      {/* <PriceCard/> */}
      {/* <Faq/> */}
      <Footer/>
    </Router>
  )
}

export default App
