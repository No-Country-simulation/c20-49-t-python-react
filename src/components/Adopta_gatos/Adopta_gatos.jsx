import React from "react";
import "./Adopta_gatos.css";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";
import perrito_1 from "../Adopta_perros/img/perrito_1.png";
import perrito_2 from "../Adopta_perros/img/perrito_2.png";
import perrito_3 from "../Adopta_perros/img/perrito_3.png";
import perrito_4 from "../Adopta_perros/img/perrito_4.png";
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
        
        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_1} className="card-img-top" alt="foto"/>
            <div className="card-body">
            <h5 className="tituloCinco text-center">Canela</h5>
            </div>
        </div>
        
        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_2} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Pocho</h5>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_3} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Luli</h5>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_4} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Tomy</h5>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_1} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Taylor</h5>
            </div>
        </div>
        
        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_2} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Selena</h5>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_3} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Olivia</h5>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "25rem" }}>
          <img src={perrito_4} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">Meredith</h5>
            </div>
        </div>
        <img src={rectangulo_blanco_pie_de_pagina} alt="" />

      </div>
      </div>
      
      
    </main>
  );
}

export default Adopta_gatos;