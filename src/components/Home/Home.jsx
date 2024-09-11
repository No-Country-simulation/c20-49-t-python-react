import React from "react";
import Rectangle from "../../assets/Rectangle.png";
import Rectangle_2 from "../../assets/Rectangle_2.png";
import Rectangle_3 from "../../assets/Rectangle_3.png";
import ImgGato from "../../assets/gato_1.png";
import ImgUno from "../../assets/imageHome1.png";
import ImgDos from "../../assets/imageHome2.png";
import "./Home.css";

function Home() {
  return (
    <main className="fondoDelMain">
      <img
        className="rectangleUno"
        src={Rectangle}
        style={{ height: "auto", width: "100%" }}
      />
      <h3 className="letraNegra">Bienvenido a</h3>
      <h3 className="letraVioleta">Peluditos</h3>
      <img className="imgGato" src={ImgGato} />
      <p className="parrafo">
        ¿Buscás un compañero que te acompañe? En Peluditos encontrarás a tu
        mejor amigo. Tenemos muchos animalitos esperando un hogar y con cariño
        para brindar. Te acompañamos en la búsqueda y seguimiento para que
        puedas adoptar a tu futura mascota.
      </p>
      <h3 className="letraNegra">Sobre el</h3>
      <h3 className="letraVioleta">Refugio</h3>
      <img className="imgUno" src={ImgUno} />
      <img className="imgDos" src={ImgDos} />
      <p className="parrafo">
        ¿Buscás un compañero que te acompañe? En Peluditos encontrarás a tu
        mejor amigo. Tenemos muchos animalitos esperando un hogar con cariño
        para brindar. Te acompañamos en la búsqueda y seguimiento para que
        puedas adoptar a tu futura mascota.
      </p>
      <h3 className="letraNegra">Conocé</h3>
      <h3 className="letraVioleta">a las mascotas</h3>
      <p className="parrafo">
        En el refugio tenemos perros y gatos, de distintas edades y tamaños.
        Animate a conocerlos
      </p>
      <img className="rectangleDos" src={Rectangle_2} />
      <img className="rectangleTres" src={Rectangle_3} />
    </main>
  );
}

export default Home;
