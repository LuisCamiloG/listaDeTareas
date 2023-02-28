import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarGlobal() {
  return (
    <div>
      <nav className="navegacion">
        <ul className="ul-navegacion">
          <li>Bienvenido al mejor sitio Web!</li>
        </ul>
        <ul>
          <li style={{ listStyle: "none" }}>
            <Link to="/Login" className="login">
              <FaUserAlt className="btn-login" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
