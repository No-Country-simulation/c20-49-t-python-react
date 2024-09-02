import React from "react";
import "./Footer.css";

function Footer(){
    return (
        <footer className="footer">
            <div className="divUno">
                <p className="textoFooter">Copyright 2024 Peluditos</p>
            </div>
            <div className="divDos">
                <h4 className="tituloFooter">Soporte</h4>
                <br />
                <p className="textoFooter">Centro de atención</p>
                <p className="textoFooter">Terminos de servicio</p>
                <p className="textoFooter">Legal</p>
                <p className="textoFooter">Política de privacidad</p>
            </div>
            <div>
                <h4 className="tituloFooter">Contacto</h4>
            </div>
        </footer>
    )
   
}

export default Footer;