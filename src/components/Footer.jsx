import "../App.css";
import Links from "../assets/social Links.png";
import Send from "../assets/vector.png";

export const Footer = () => {
  return (
    <>
      <div className="pieDePagina">
        <div className="footUno">
          <h6>Copyright © 2024 Peluditos</h6>
          <img src={Links} style={{ width: "5rem" }}></img>
        </div>
        <div className="footDos soport">
          <h4 style={{ width: "160px", height: "28px" }}>Soporte</h4>
          <h7>Centro de atención</h7>
          <h7>Términos de servicio</h7>
          <h7>Legal</h7>
          <h7>Política de privacidad</h7>
        </div>
        <div className="footTres">
          <h4 style={{ width: "160px", height: "28px" }}>Contacto</h4>
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Escribí tu email"
              className="email-input"
            />
            <img src="/src/assets/Vector.png" alt="Icono" className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
