import React from "react";
import "./Adopta_gatos.css";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";


function Adopta_gatos() {
  return (
    <main>
      <img className="rectanguloUno" src={rectangulo_1} />
      <div className="imagenDeFondoGatos">
        <h2 className="tituloGatos">Busca a tu compañia preferida</h2>
      </div>
      <img className="rectanguloDos" src={rectangulo_2} />
      <h3 className="tituloAdoptaPerros">Encontrá a tu mejor <br /> amigo <span className="perruno">perruno</span></h3>
    </main>
  );
}

export default Adopta_gatos;