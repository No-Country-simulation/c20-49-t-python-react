import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <header>
            <nav>
                <div>
                    <ul>
                        <li><Link className="nav-link" to={'/'}>Home</Link></li>
                        <li><Link className="nav-link" to={'/QuienesSomos'}>Quienes Somos</Link></li>
                    </ul>
                </div>
                <hr />
                <h1>Titulo</h1>
                <hr />
            </nav>
        </header>
    )
   
}

export default NavBar;