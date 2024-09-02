import React from "react";
import "./QuienesSomos.css";
import foto_1 from "../QuienesSomos/img/foto_1.png";
import foto_2 from "../QuienesSomos/img/foto_2.png";
import foto_3 from "../QuienesSomos/img/foto_3.png";
import fondo from "../QuienesSomos/img/foto_perro.png";

function QuienesSomos() {
  return (
    <main className="fondoDelMain">
      <div className="cuadradoDos"></div>
      <div className="imagenDeFondo">
        <h2 class="tituloQuienesSomos">REFUGIO PELUDITOS</h2>
      </div>
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
          <img className="foto" src={foto_1} />
          <img className="foto" src={foto_2} />
        </div>
      </div>

      <div className="contenedorDos">
        <div className="texto">
          <h3 className="sobre">Nuestra</h3>
          <h3 className="nosotros">Mision</h3>
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
        </div>
        <div className="imagenes">
          <img className="foto" src={foto_3} />
        </div>
      </div>
      <div className="cuadrado"></div>
    </main>
  );
}

export default QuienesSomos;
