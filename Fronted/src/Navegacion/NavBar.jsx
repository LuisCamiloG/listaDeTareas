import React from "react";
import { Link } from "react-router-dom";
import "./Navegacion.css";

function NavBar() {
  return (
    <>
      <nav className="navegacion">
        <ul className="ul-navegacion">
          <li>
            <Link to="/" className="link-navegacion">
              Home
            </Link>
          </li>
          <li>
            <Link to="/ListaDeTareas" className="link-navegacion">
              Lista de Tareas
            </Link>
          </li>
          <li>
            <Link to="/About" className="link-navegacion">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
