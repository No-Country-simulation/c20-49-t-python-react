import { CustomNavbar } from "./components/NavBar/CustomNavbar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Home from "./components/Home/Home";
import Contacto from "./components/Contacto/Contacto";
import Adopta from "./components/Adopta/Adopta";
import Colabora from "./components/Colabora/Colabora";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/adopta" element={<Adopta />} />
          <Route path="/colabora" element={<Colabora />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
