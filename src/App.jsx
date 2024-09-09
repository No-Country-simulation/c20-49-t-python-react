import { CustomNavbar } from "../src/components/CustomNavbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Home from "./components/Home/Home";
import Contacto from "./components/Contacto/Contacto";
import { Footer } from "../src/components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
