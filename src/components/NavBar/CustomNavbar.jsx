import Lupa from "../../assets/lupa.png";
import Refugio from "../../assets/refugio.png";
import Gato from "../../assets/logo_gato.png";
import Peludito from "../../assets/PELUDITOS.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../NavBar/CustomNavbar.css";

export const CustomNavbar = () => {
  return (
    <>
      <Navbar>
        <Container className="NavBar">
          <Nav className="me-auto">
            <NavLink to={"/QuienesSomos"} className="custom-navlink">
              Quiénes Somos
            </NavLink>
            <NavLink to={"/Adopta"} className="custom-navlink">
              Adoptá
            </NavLink>
            <NavLink to={"/Colabora"} className="custom-navlink">
              Colaborá
            </NavLink>
            <NavLink to={"/Contacto"} className="custom-navlink">
              Contacto
            </NavLink>
            <div className="d-flex icon-container">
              <NavLink to="/Buscar">
                <img
                  src={Lupa}
                  alt="Buscar"
                  style={{ width: "20px", height: "20px" }}
                />
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="logo">
        <img src={Refugio} style={{ width: "4rem", height: "1.3rem" }} />
        <NavLink to="/home">
          <img
            src={Gato}
            alt="Gato"
            style={{ width: "8rem", height: "4rem" }}
          />
        </NavLink>
        <img src={Peludito} style={{ width: "7.5rem", height: "1.1rem" }} />
      </div>
      <hr />
    </>
  );
};
