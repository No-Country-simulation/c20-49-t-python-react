import React from "react";
import "./Adopta_gatos.css";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";
import gatito_1 from "./img/gatito_1.png";
import gatito_2 from "./img/gatito_2.png";
import gatito_3 from "./img/gatito_3.png";
import gatito_4 from "./img/gatito_4.png";
import gatito_5 from "./img/gatito_5.png";
import gatito_6 from "./img/gatito_6.png";
import gatito_7 from "./img/gatito_7.png";
import gatito_8 from "./img/gatito_8.png";
import rectangulo_blanco_pie_de_pagina from "../Adopta_perros/img/rectangulo_blanco_pie_de_pagina.png"; 

function Adopta_gatos() {
  return (
    <main>
      <img className="rectanguloUno" src={rectangulo_1} />
      <div className="imagenDeFondoGatos">
        <h2 className="tituloGatos">Busca a tu compañia preferida</h2>
      </div>
      <img className="rectanguloDos" src={rectangulo_2} />
      <h3 className="tituloAdoptaPerros">Encontrá a tu mejor <br /> amigo <span className="perruno">gatuno</span></h3>

      <div className="imagen_fondo_perritos">
      <div className="col-xs-6 col-sm-10 col-md-12 col-lg-12 d-flex flex-wrap justify-content-around">
        
        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_1} className="card-img-top" alt="foto"/>
            <div className="card-body">
            <h5 className="tituloCinco text-center">LOLA</h5>
            <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>
        
        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_2} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">GALA</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_3} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">LUIGI</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_4} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">MARIO</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_5} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">THEODORA</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>
        
        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_6} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">BIGOTES</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_7} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">SIMBA</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={gatito_8} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">NUBE</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>
      </div>
      <img className="fotoRectanguloAdopta" src={rectangulo_blanco_pie_de_pagina} alt="" />
      </div>
      
      
    </main>
  );
}

export default Adopta_gatos;