import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
