import { CustomNavbar } from "./components/NavBar/CustomNavbar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Home from "./components/Home/Home";
import Contacto from "./components/Contacto/Contacto";
import Adopta from "./components/Adopta/Adopta";
import Colabora from "./components/Colabora/Colabora";
import Adopta_gatos from "./components/Adopta_gatos/Adopta_gatos";
import Adopta_perros from "./components/Adopta_perros/Adopta_perros";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Adopta" element={<Adopta />} />
        <Route path="/Adopta_gatos" element={<Adopta_gatos />} />
        <Route path="/Adopta_perros" element={<Adopta_perros />} />
        <Route path="/Colabora" element={<Colabora />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
