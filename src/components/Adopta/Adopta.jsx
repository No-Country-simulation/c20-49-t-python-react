import React from "react";
import "./Adopta.css";
import { Link } from "react-router-dom";
import rectangulo_1 from "../QuienesSomos/img/rectangulo_1.png";
import rectangulo_2 from "../QuienesSomos/img/rectangulo_2.png";

const Adopta = () => {
  return (
    <main>
      <img className="rectanguloUno" src={rectangulo_1} />
      <div className="imagenDeFondoAdoptaGeneral">
      <h2 className="tituloAdopta">Encontrá a tu mejor amigo</h2>
      </div>
      <img className="rectanguloDos" src={rectangulo_2} />
        <section className="section-mascota">
          <h2 className="h2-mascota">
            Cual va a ser tu <br /> futura <span>mascota</span>?
          </h2>
        </section>
        <section className="section-mascota2">
          <div className="d-flex justify-content-around mx-5">
            <div className="section-p">
              <p>Perros</p>
            </div>
            <div className="section-p">
              <p>Gatos</p>
            </div>
          </div>
          <div>
            {/* div header */}
            <div className="col-12 ">
              <div className="d-flex justify-content-around mx-5">
                <div className="image-wrapper">
                  <img
                    src="/src/assets/AdoptaImg/image 6.png"
                    alt="perrito"
                    className="dog-image"
                  />
                  <img
                    src="/src/assets/AdoptaImg/Vector (3).png"
                    alt="borde"
                    className="border-image "
                  />
                </div>
                <div className="image-wrapper">
                  <img
                    src="/src/assets/AdoptaImg/image 3.png"
                    alt="perrito"
                    className="dog-image"
                  />
                  <img
                    src="/src/assets/AdoptaImg/Vector (2).png"
                    alt="borde"
                    className="border-image"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-around mx-5 mt-3 ">
                <div className="conocer">
                  <Link className="linkAdopta" to={"/Adopta_perros"}><p>Conocer</p></Link>
                </div>
                <div className="conocer">
                  <Link className="linkAdopta" to={"/Adopta_gatos"}><p>Conocer</p></Link>
                </div>
              </div>
            </div>
            {/* Div huella */}
            <div className="col-12">
              {/* div center */}
              <div className="col-5 mx-auto">
                {/* Div dedos */}
                <div
                  className="d-flex justify-content-between position-relative "
                  style={{
                    height: 180,
                  }}
                >
                  <div
                    className="rounded-circle position-absolute "
                    style={{
                      width: 128,
                      height: 176,
                      backgroundColor: "#fff",
                      rotate: "-10deg",
                      top: 150,
                      left: 30,
                    }}
                  />
                  <div
                    className="rounded-circle position-absolute"
                    style={{
                      width: 128,
                      height: 176,
                      backgroundColor: "#fff",
                      rotate: "-10deg",
                      left: "25%",
                      top: 10,
                    }}
                  />
                  <div
                    className="rounded-circle position-absolute"
                    style={{
                      width: 128,
                      height: 176,
                      backgroundColor: "#fff",
                      rotate: "10deg",
                      right: "25%",
                      top: 10,
                    }}
                  />
                  <div
                    className="rounded-circle position-absolute"
                    style={{
                      width: 128,
                      height: 176,
                      backgroundColor: "#fff",
                      rotate: "10deg",
                      top: 150,
                      right: 30,
                    }}
                  />
                </div>
                {/* div planta */}
                <div className="d-flex justify-content-center">
                  <div
                    className="curved-div"
                    style={{
                      width: 300,
                      height: 150,
                      backgroundColor: "#fff",
                      borderRadius: "200px 200px 0 0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="section-img-footer">
            <img src="/src/assets/AdoptaImg/Rectangle 46.png" alt="" />
          </section>
        </section>
      
    </main>

  );
};

export default Adopta;
