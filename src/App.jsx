import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import NavBar from './components/NavBar/NavBar';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Home  from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/QuienesSomos' element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
