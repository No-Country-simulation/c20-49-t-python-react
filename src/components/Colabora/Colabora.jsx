import React from "react";
import Banner from "../../components/Colabora/img/imagen_banner.png";
import Img_arriba from "../../components/Colabora/img/Rectangle_arriba.png";
import Img_abajo from "../../components/Colabora/img/Rectangle_abajo.png";
import "../Colabora/Colabora.css";
import CuadradoVioleta from "../Colabora/img/cuadrado_violeta.png";
import Cuadrado1 from "../Colabora/img/colabora_cuadrado1.jpg";
import Cuadrado2 from "../Colabora/img/colabora_cuadrado2.png";
import Cuadrado3 from "../Colabora/img/colabora_cuadrado3.png";


function Colabora() {
  return (
    <main className="colabora">
      <img className="colabora_imgAbajo" src={Img_abajo} />

      <img className="colabora_banner" src={Banner} />

      <img className="colabora_imgArriba" src={Img_arriba} />
      <p className="tituloColabora">¿De qué manera?</p>

      <div className="cuadrados">
        <img className="CuadradoVioleta" src={CuadradoVioleta} />
        <img className="Cuadrado1" src={Cuadrado1} />
        <img className="CuadradoVioleta" src={CuadradoVioleta} />
        <img className="Cuadrado2" src={Cuadrado2} />
        <img className="CuadradoVioleta" src={CuadradoVioleta} />
        <img className="Cuadrado3" src={Cuadrado3} />
      </div>
      <img className="colabora_imgArriba" src={Img_arriba} />
    </main>
  );
}

export default Colabora;
