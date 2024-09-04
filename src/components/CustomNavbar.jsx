import Person from "../assets/person_13924070.png";
import Lupa from "../assets/lupa.png";
import Corazon from "../assets/corazon.png";
import Refugio from "../assets/refugio.png";
import Gato from "../assets/logo gato.png";
import Peludito from "../assets/PELUDITOS.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

export const CustomNavbar = () => {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="#home">Quiénes Somos</Nav.Link>
            <Nav.Link href="#adopta">Adoptá</Nav.Link>
            <Nav.Link href="#colabora">Colaborá</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <div className="d-flex icon-container">
              <Nav.Link href="#icono">
                <img src={Person} style={{ width: "20px", height: "20px" }} />
              </Nav.Link>
              <Nav.Link href="#icono">
                <img src={Lupa} style={{ width: "20px", height: "20px" }} />
              </Nav.Link>
              <Nav.Link href="#icono">
                <img src={Corazon} style={{ width: "20px", height: "20px" }} />
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="logo">
        <img src={Refugio} style={{ width: "4rem", height: "1.3rem" }} />
        <img src={Gato} style={{ width: "8rem", height: "4rem" }} />
        <img src={Peludito} style={{ width: "7.5rem", height: "1.1rem" }} />
      </div>
      <hr />
    </>
  );
};
