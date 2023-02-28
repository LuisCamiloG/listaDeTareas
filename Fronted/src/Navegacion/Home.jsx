import React from "react";
import { useAuthStore } from "../Redux/zustand";
import NavBar from "./NavBar";
import "./Home.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  const profileAuth = useAuthStore((state) => state.profile);
  return (
    <div style={{ width: "100%", height: "93%" }}>
      <NavBar />
      <div className="h1-cont">
        <h1>Hola!, {profileAuth?.user?.nombre}</h1>
      </div>
      <div className="contenedor-home">
        <div className="subContainer-home">
          <h1 style={{ fontSize: "50px", textAlign: "initial" }}>
            Bienvenido al mejor sitio web para listar tus tareas
          </h1>
          <br />
          <p style={{ textAlign: "initial" }}>
            ¿Cansado de que se te olviden las tareas que debes hacer a diario?
            Llegó Todo List, un sitio web para que guardes, actualices y borres
            tu tareas diarias! El mejor sitio web para tener siempre presente lo
            que debes hacer!
          </p>

          <br />

          <p style={{ justifyContent: "center" }}>¿Qué esperas para usarla?</p>
        </div>
        <div>
          <div className="card" style={{ borderRadius: "50px" }}>
            <div className="image" style={{ borderRadius: "50px" }}>
              <img
                style={{ borderRadius: "50px" }}
                src="https://img.freepik.com/vector-gratis/hombre-revisando-lista-tareas-gigante_23-2148099425.jpg?w=2000"
              />
            </div>
            <div className="details">
              <div className="center">
                <h1>
                  Todo List
                  <br />
                  <span>By: Luis Camilo Garcia</span>
                </h1>
                <p>
                  El mejor sitio web para listar tus tareas diarias, sin que se
                  te olviden, ven usala ya!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-edit">
        <ul className="ul-home">
          <li>
            <label className="label-icons">
              <FaFacebook className="li-icons" />
              /TodoList
            </label>
          </li>
          <li>
            <label className="label-icons">
              <FaInstagram className="li-icons" />
              /TodoList
            </label>
          </li>
          <li>
            <label className="label-icons">
              <FaTwitter className="li-icons" />
              #TodoList
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
