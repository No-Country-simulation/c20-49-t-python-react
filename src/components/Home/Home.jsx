import React from "react";
import Rectangle from "../../assets/Rectangle.png";
import Rectangle_2 from "../../assets/Rectangle_2.png";
import Rectangle_3 from "../../assets/Rectangle_3.png";
import Rectangle_4 from "../../assets/Rectangle_4.png";
import ImgGato from "../../assets/gato_1.png";
import ImgUno from "../../assets/imageHome1.png";
import ImgDos from "../../assets/imageHome2.png";
import ImgPerro1 from "../../assets/perrito1.jpg";
import ImgGato1 from "../../assets/gatito1.png";
import ImgGato2 from "../../assets/gatito2.jpg";
import "./Home.css";

function Home() {
  return (
    <main>
      {/* Sección 1 - Bienvenida */}
      <section
        className="section section-1"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="text-content">
          <h3 className="letraNegra">Bienvenido a</h3>
          <h3 className="letraVioleta">Peluditos</h3>
          <p className="parrafo">
            ¿Buscás un compañero que te acompañe? En Peluditos encontrarás a tu
            mejor amigo. Tenemos muchos animalitos esperando un hogar y con
            cariño para brindar. Te acompañamos en la búsqueda y seguimiento
            para que puedas adoptar a tu futura mascota.
          </p>
          <img className="imgGato" src={ImgGato} alt="Gato" />
        </div>
      </section>

      {/* Sección 2 - Sobre el Refugio */}

      <section
        className="section section-2"
        style={{ backgroundImage: `url(${Rectangle_2})` }}
      >
        <h3 className="letraNegra">Sobre el</h3>
        <h3 className="letraVioleta">Refugio</h3>
        <div className="image-content">
          <img className="imgUno" src={ImgUno} alt="Refugio" />
          <img className="imgDos" src={ImgDos} alt="Refugio 2" />
        </div>
        <p className="parrafo">
          Somos un refugio que se dedica al cuidado y bienestar de los animales
          abandonados. Nuestro objetivo es encontrarlos un hogar seguro y
          amoroso.
        </p>
      </section>

      {/* Sección 3 - Conocé a las mascotas */}

      <section
        className="section section-3"
        style={{ backgroundImage: `url(${Rectangle_3})` }}
      >
        <h3 className="letraNegra">Conocé</h3>
        <h3 className="letraVioleta">a las mascotas</h3>
        <p className="parrafo">
          En el refugio tenemos perros y gatos, de distintas edades y tamaños.
          Animate a conocerlos.
        </p>
        <div className="mascotas">
          <img className="perrito1" src={ImgPerro1} alt="Perrito" />
          <img className="gatito1" src={ImgGato1} alt="Gatito 1" />
          <img className="gatito2" src={ImgGato2} alt="Gatito 2" />
        </div>
      </section>

      {/* Sección 4 - Colaborá */}

      <section
        className="section section-4"
        style={{ backgroundImage: `url(${Rectangle_4})` }}
      >
        <h3 className="letraNegra">Colaborá con</h3>
        <h3 className="letraVioleta">Peluditos</h3>
        <p className="parrafo">
          En Peluditos agradecemos a las distintas maneras de colaborar con
          nuestro refugio: difundiendo en redes, acogiendo a animales en
          tránsito, organizando colectas de materiales y objetos. ¿Querés ser
          parte de la comunidad? ¡Sumate!
        </p>
      </section>
    </main>
  );
}

export default Home;
