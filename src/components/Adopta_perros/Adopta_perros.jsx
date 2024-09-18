import React from "react";
import "./Adopta_perros.css";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";
import perrito_1 from "../Adopta_perros/img/perrito_1.png";
import perrito_2 from "../Adopta_perros/img/perrito_2.png";
import perrito_3 from "../Adopta_perros/img/perrito_3.png";
import perrito_4 from "../Adopta_perros/img/perrito_4.png";
import perrito_5 from "../Adopta_perros/img/perrito_5.png";
import perrito_6 from "../Adopta_perros/img/perrito_6.png";
import perrito_7 from "../Adopta_perros/img/perrito_7.png";
import perrito_8 from "../Adopta_perros/img/perrito_8.png";
import rectangulo_blanco_pie_de_pagina from "../Adopta_perros/img/rectangulo_blanco_pie_de_pagina.png";


function Adopta_perros() {
  return (
    <main>
      <img className="rectanguloUno" src={rectangulo_1} />
      <div className="imagenDeFondoGatos">
        <h2 className="tituloGatos">Busca a tu compañia preferida</h2>
      </div>
      <img className="rectanguloDos" src={rectangulo_2} />

      <h3 className="tituloAdoptaPerros">Encontrá a tu mejor <br /> amigo <span className="perruno">perruno</span></h3>
      
      <div className="imagen_fondo_perritos">
      <div className="col-xs-6 col-sm-10 col-md-12 col-lg-12 d-flex flex-wrap justify-content-around">
        
        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_1} className="card-img-top" alt="foto"/>
            <div className="card-body">
            <h5 className="tituloCinco text-center">CANELA</h5>
            <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>
        
        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_2} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">POCHO</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_3} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">LULI</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_4} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">TOMY</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_5} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">TAYLOR</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>
        
        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_6} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">SELENA</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_7} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">OLIVIA</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>

        <div className="cardItem" style={{ width: "17rem", height: "30rem" }}>
          <img src={perrito_8} className="card-img-top" alt="foto"/>
            <div className="card-body">
              <h5 className="tituloCinco text-center">MEREDITH</h5>
              <p className="parrafoAdoptaPerros">Se encuentra castrado, vacunado, tiene 10 años</p>
            </div>
        </div>
      </div>
      <img className="fotoRectanguloAdopta" src={rectangulo_blanco_pie_de_pagina} alt="" />
      </div>
    </main>
  );
}

export default Adopta_perros;
