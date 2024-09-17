import React from "react";
import Rectangle from "../../assets/Rectangle.png";
import Rectangle_2 from "../../assets/Rectangle_2.png";
import Rectangle_3 from "../../assets/Rectangle_3.png";
import Rectangle_4 from "../../assets/Rectangle_4.png";
import ImgGato from "../../assets/gato_1.png";
import ImgUno from "../../assets/imageHome1.png";
import ImgDos from "../../assets/imageHome2.png";
import Perro_home from "../../assets/perro_home.png";
import Perro_home2 from "../../assets/perro_home2.png";
import ImgGato1 from "../../assets/gatito1.png";
import Gato_home from "../../assets/gato_home.png";
import "./Home.css";

function Home() {
  return (
    <main>
      {/* Sección 1 - Bienvenida */}
      <section className="section section-1">
        <div className="content-wrapper">
          <div className="text-content">
            <h3 className="letraNegra">Bienvenido a</h3>
            <h3 className="letraVioleta">Peluditos</h3>
            <br />
            <p className="parrafo">
              ¿Buscás un compañero que te acompañe? En Peluditos encontrarás a
              tu mejor amigo. Tenemos muchos animalitos esperando un hogar y con
              cariño para brindar. Te acompañamos en la búsqueda y seguimiento
              para que puedas adoptar a tu futura mascota.
            </p>
          </div>
          <div className="imagenHomeGato">
            <img className="imgGato" src={ImgGato} alt="Gato" />
          </div>
        </div>
      </section>

      {/* Sección 2 - Sobre el Refugio */}

      <section className="section section-2">
        <div className="content-wrapper">
          <div className="text-content">
            <h3 className="letraNegra">Sobre el</h3>
            <h3 className="letraVioleta">Refugio</h3>
            <br />
            <p className="parrafo">
              Somos un refugio que se dedica al cuidado y bienestar de los
              animales abandonados. Nuestro objetivo es encontrarlos un hogar
              seguro y amoroso.
            </p>
            <button className="custom-button">Conócenos</button>
          </div>
          <div className="imagenRefugio">
            <img className="imgUno" src={ImgUno} alt="Refugio" />
            <img className="imgDos" src={ImgDos} alt="Refugio" />
          </div>
        </div>
      </section>

      {/* Sección 3 - Conocé a las mascotas */}

      <section
        className="section section-3"
        style={{ backgroundImage: `url(${Rectangle_3})` }}
      >
        <div className="section3">
          <h3 className="letraNegra">Conocé</h3>
          <h3 className="letraVioleta">a las mascotas</h3>
          <br />
          <p className="parrafo">
            En el refugio tenemos perros y gatos, de distintas edades y tamaños.
            Animate a conocerlos.
          </p>
          <br />
          <div className="mascotas">
            <img className="perrito1" src={Perro_home} alt="Perrito" />
            <img className="gatito1" src={ImgGato1} alt="Gatito 1" />
            <img className="gatito2" src={Gato_home} alt="Gatito 2" />
          </div>
          <br />
          <button class="custom-button">Ver todo</button>
        </div>
      </section>

      {/* Sección 4 - Colaborá */}

      <section className="section section-4">
        <div className="content-wrapper">
          <div className="imagenColabora">
            <img className="perro_home2" src={Perro_home2} alt="Colaborar" />
          </div>
          <div className="text-content">
            <h3 className="letraNegra">Colaborá con</h3>
            <h3 className="letraVioleta">Peluditos</h3>
            <br />
            <p className="parrafo">
              En Peluditos agradecemos a las distintas maneras de colaborar con
              nuestro refugio: difundiendo en redes, acogiendo a animales en
              tránsito, organizando colectas de materiales y objetos. ¿Querés
              ser parte de la comunidad? ¡Sumate!
            </p>
            <button class="custom-button">Unite</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
