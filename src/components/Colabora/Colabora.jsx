import React from "react";
import Banner from "../../components/Colabora/img/imagen_banner.png";
import Img_arriba from "../../components/Colabora/img/Rectangle_arriba.png";
import Img_abajo from "../../components/Colabora/img/Rectangle_abajo.png";
import "../Colabora/Colabora.css";

function Colabora() {
  return (
    <main className="colabora">
      <img className="colabora_imgAbajo" src={Img_abajo} />

      <img className="colabora_banner" src={Banner} />

      <img className="colabora_imgArriba" src={Img_arriba} />
      <p className="tituloColabora">¿De qué manera?</p>
    </main>
  );
}

export default Colabora;
