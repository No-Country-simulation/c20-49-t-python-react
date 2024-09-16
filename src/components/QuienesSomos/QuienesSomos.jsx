import React from "react";
import "./QuienesSomos.css";
import foto_1 from "../QuienesSomos/img/foto_1.png";
import foto_2 from "../QuienesSomos/img/foto_2.png";
import foto_3 from "../QuienesSomos/img/foto_3.png";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";
import Group from "../QuienesSomos/img/Group.png";
import Vector from "../QuienesSomos/img/Vector.png";
import rectangulo_blanco from "../QuienesSomos/img/rectangulo_blanco.png";


function QuienesSomos() {
  return (
    <main className="fondoDelMain">
      <br />
      <img className="rectanguloUno" src={rectangulo_1} />
      <div className="imagenDeFondo">
        <h2 className="tituloQuienesSomos">REFUGIO PELUDITOS</h2>
      </div>
      <img className="rectanguloDos" src={rectangulo_2} />
      <div className="contenedor">
        <div className="texto">
          <h3 className="sobre">Sobre</h3>
          <h3 className="nosotros">Nosotros</h3>
          <br />
          <p className="parrafo">
            Peluditos se centra en proporcionar un entorno seguro y amoroso para
            animales que han sido maltratados, abandonados o que necesitan un
            hogar temporal.
          </p>
          <br />
          <p className="parrafo">
            Ofrecemos a los animales un cuidado inmediato, atención médica y un
            refugio seguro, además de facilitar la adopción de los animales a
            hogares permanentes asegurándose de que los futuros dueños sean
            aptos y comprometidos.
          </p>
          <br />
          <p className="parrafo">
            Por otro lado, nos involucrandonos en la comunidad con apoyo de
            distintas personas del pais, ayudandonos a sostener este lugar que
            acoge con cariño a los animales.
          </p>
          <br />
        </div>
        <div className="imagenes">
          <img className="group" src={Group} />
          <img className="fotoUno" src={foto_1} />
          <img className="fotoDos" src={foto_2} />
        </div>
      </div>

      <div className="contenedorDos">
        <div className="texto">
          <h3 className="nuestra">Nuestra</h3>
          <h3 className="mision">Misión</h3>
          <br />
          <p className="parrafo">
            Peluditos nace en el año 2010 con el primer rescate en la provincia
            de San Juan. Se trataba de un criadero de aproximadamente 15 perros
            en estado de desnutrición y privados de su libertad.
          </p>
          <br />
          <p className="parrafo">
            Con la finalidad de salvarlos, nos reunimos los vecinos del Barrio
            Maipu para poder colaborar a la causa y ayudar a los animales.
          </p>
          <br />
          <p className="parrafo">
            Desde allí, con el objetivo de poder encontrarles un hogar calido a
            los perros rescatados, nos pusimos en marcha en difundir y poco a
            poco organizar un espacio a aquellos animales que han pasado por la
            misma situación.
          </p>
          <br />
          <img src={rectangulo_blanco} className="rectanguloBlanco"/>
        </div>
        <div className="imagenes">
          <img className="fotoTres" src={foto_3} />
          <img className="vector" src={Vector} /> 
        </div>
      </div>
    </main>
  );
}

export default QuienesSomos;
