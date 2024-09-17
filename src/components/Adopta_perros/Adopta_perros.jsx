import React from "react";
import "./Adopta_perros.css";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";
import perrito_1 from "../Adopta_perros/img/perrito_1.png";
import perrito_2 from "../Adopta_perros/img/perrito_2.png";
import perrito_3 from "../Adopta_perros/img/perrito_3.png";
import perrito_4 from "../Adopta_perros/img/perrito_4.png";


function Adopta_perros() {
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

export default Adopta_perros;
