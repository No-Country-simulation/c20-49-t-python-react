import React from "react";
import "./Contacto.css";
import { Link } from "react-router-dom";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";
import Captura from "../Contacto/img/Captura.png";
import icono_casa from "../Contacto/img/icono_casa.png";
import icono_instagram from "../Contacto/img/icono_instagram.png";
import icono_whatsapp from "../Contacto/img/icono_whatsapp.png";
import img_gato from "../Contacto/img/img_gato.png";
import circulo from "../Contacto/img/circulo.png";
import fondofooter from "../Contacto/img/fondofooter.png";

function Contacto() {
  return (
    <main>
      <img className="rectanguloUno" src={rectangulo_1} />
      <div className="imagenContacto">
        <h2 class="tituloContacto">
          Acercate a <br />
          conocernos
        </h2>
      </div>
      <img className="rectanguloDos" src={rectangulo_2} />
      <div className="divTituloTres">
      <h3 className="tituloUno">
        Enterate de nuestras <br />
        maneras de
      </h3>
      <h3 className="tituloDos">contactarnos</h3>
      </div>

      <div className="contenedorPrincipal">
        <div className="divCard">
          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <img src={circulo} className="circulo" />
                <a href="https://g.co/kgs/GBQYEb9" target="_blank">
                  <img src={icono_casa} className="iconoCasa" />
                </a>
                <p className="card-text">
                  Av. del Trabajo 234 <br />
                  Barrio Maipú <br />
                  San Juan
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={circulo} className="circulo" />
              <a
                href="https://www.instagram.com/refugiofelizoficial/?hl=es"
                target="_blank"
              >
                <img src={icono_instagram} className="iconoInstagram" />
              </a>
              <p className="card-text">
                Siguenos en <br />
                nuestras redes
              </p>
              <p className="textoInstagram">@refugio.peluditos</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={circulo} className="circulo" />
              <Link className="nav-link" to={"/QuienesSomos"}>
                <img src={icono_whatsapp} className="iconoWhatsapp" />
              </Link>
              <p className="card-text">
                Envíanos mensajes <br />
                al número: <br />
                (11) 345 55555568
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="tituloCompleta">Completá el</h4>
          <h4 className="tituloFormulario">Formulario</h4>
          <div className="divFormulario">
            <form action="#" method="post">
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
              />
              <br />
              <input
                type="text"
                placeholder="Ingresa tu apellido"
                name="apellido"
              />
              <br />
              <input type="email" placeholder="Ingresa tu mail" name="mail" />
              <br />
              <input
                className="btn boton"
                type="submit"
                for="enviar nombre"
                value="enviar"
              />
            </form>
            <img src={img_gato} className="imgGato" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </main>
  );
}

export default Contacto;
