import React from "react";
import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className="contenedor">
        <h1>Sobre Nosotros</h1>
        <h2>¿Quienes somos?</h2>
        <div className="contenedor-about">
          <h2>Descripcion</h2>
          <p className="p-edit">
            Todo App es una herramienta para guardar, elimiar y editar tareas
            del dia a dia
          </p>
          <h2>Funciones</h2>
          <ol>
            <li style={{ marginLeft: "25px" }}>
              Guarda, edita, muestra y elimina tareas de forma segura.
            </li>
            <li style={{ marginLeft: "25px" }}>
              Las tareas cuentan con un estado el cual puedes cambiar segun lo
              quiera el usuario
            </li>
            <li style={{ marginLeft: "25px" }}>
              Te indica en tiempo real el numero de tareas que tienes
              pendientes.
            </li>
            <li style={{ marginLeft: "25px" }}>
              Es un sistema practico y de uso facil.
            </li>
          </ol>
          <p className="p-edit">
            Este sistema fue desarrollado con JavaScript, React y MongoDB
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
