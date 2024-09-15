import Person from "../../assets/person.png";
import Lupa from "../../assets/lupa.png";
import Corazon from "../../assets/corazon.png";
import Refugio from "../../assets/refugio.png";
import Gato from "../../assets/logo_gato.png";
import Peludito from "../../assets/PELUDITOS.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../../App.css";

export const CustomNavbar = () => {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Nav className="m-auto">
            <NavLink to={"/QuienesSomos"}>Quiénes Somos</NavLink>
            <NavLink to={"/Adopta"}>Adoptá</NavLink>
            <NavLink to={"/Colabora"}>Colaborá</NavLink>
            <NavLink to={"/Contacto"}>Contacto</NavLink>
            <div className="d-flex icon-container">
              <NavLink to={"#"}>
                <img src={Person} style={{ width: "20px", height: "20px" }} />
              </NavLink>
              <NavLink to={"#"}>
                <img src={Lupa} style={{ width: "20px", height: "20px" }} />
              </NavLink>
              <NavLink to={"#"}>
                <img src={Corazon} style={{ width: "20px", height: "20px" }} />
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
