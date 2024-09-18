import React, { useState } from "react";
import Banner from "../../components/Colabora/img/imagen_banner.png";
import Img_arriba from "../../components/Colabora/img/Rectangle_arriba.png";
import Img_abajo from "../../components/Colabora/img/Rectangle_abajo.png";
import "../Colabora/Colabora.css";
import CuadradoVioleta from "../Colabora/img/cuadrado_violeta.png";
import Cuadrado1 from "../Colabora/img/colabora_cuadrado1.jpg";
import Cuadrado2 from "../Colabora/img/colabora_cuadrado2.png";
import Cuadrado3 from "../Colabora/img/colabora_cuadrado3.png";

function Colabora() {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <main className="colabora">
      <img className="colabora_imgAbajo" src={Img_abajo} />

      <img className="colabora_banner" src={Banner} />

      <img className="colabora_imgArriba" src={Img_arriba} />
      <p className="tituloColabora">¿De qué manera?</p>

      <div className="cuadrados">
        <div
          className={`cuadrado-container ${flipped[0] ? "flipped" : ""}`}
          onClick={() => handleFlip(0)}
        >
          <div className="cuadrado-inner">
            <div className="cuadrado-front">
              <img src={CuadradoVioleta} alt="Cuadrado Violeta" />
              <p className="cuadrado-texto">Personas provisorias</p>
            </div>
            <div className="cuadrado-back">
              <p>
                Cuando rescatamos cachorros recién nacidos, necesitamos
                voluntarios que los puedan tener en su casa, alimentándolos con
                biberón, hasta que puedan ser vacunados y estar en nuestro
                centro
              </p>
              <button className="VerMasColabora">Ver más</button>
            </div>
          </div>
        </div>

        <div className="cuadrado-container">
          <img className="Cuadrado1" src={Cuadrado1} alt="Cuadrado 1" />
        </div>

        <div
          className={`cuadrado-container ${flipped[1] ? "flipped" : ""}`}
          onClick={() => handleFlip(1)}
        >
          <div className="cuadrado-inner">
            <div className="cuadrado-front">
              <img src={CuadradoVioleta} alt="Cuadrado Violeta" />
              <p className="cuadrado-texto">Donaciones</p>
            </div>
            <div className="cuadrado-back">
              <p>
                A través de distintas donaciones como transferencias,
                medicaciones, alimento, colchones, mantitas, y demás elementos
                podes ayudar a los animales de nuestro refugio.
              </p>
              <button className="VerMasColabora">Ver más</button>
            </div>
          </div>
        </div>

        <div className="cuadrado-container">
          <img className="Cuadrado2" src={Cuadrado2} alt="Cuadrado 2" />
        </div>

        <div
          className={`cuadrado-container ${flipped[2] ? "flipped" : ""}`}
          onClick={() => handleFlip(2)}
        >
          <div className="cuadrado-inner">
            <div className="cuadrado-front">
              <img src={CuadradoVioleta} alt="Cuadrado Violeta" />
              <p className="cuadrado-texto">Difusiones</p>
            </div>
            <div className="cuadrado-back">
              <p>
                Difundiendo a través de nuestras redes las adopciones nos ayudas
                a llegar a aquellas personas que estén interesadas en adoptar o
                colaborar.
              </p>
              <button className="VerMasColabora">Ver más</button>
            </div>
          </div>
        </div>

        <div className="cuadrado-container">
          <img className="Cuadrado3" src={Cuadrado3} alt="Cuadrado 3" />
        </div>
      </div>
    </main>
  );
}

export default Colabora;
