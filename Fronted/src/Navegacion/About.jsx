import React from "react";

function About() {
  return (
    <div className="contenedor">
      <h1>Sobre Nosotros</h1>
      <h2>¿Quienes somos?</h2>
      <div className="contenedor-about">
        <h2>Descripcion</h2>
        <p>
          Todo App es una herramienta para guardar, elimiar y editar tareas del
          dia a dia
        </p>
        <h2>Funciones</h2>
        <ol>
          <li>Guarda, edita, muestra y elimina tareas de forma segura.</li>
          <li>
            Las tareas cuentan con un estado el cual puedes cambiar segun lo
            quiera el usuario
          </li>
          <li>
            Te indica en tiempo real el numero de tareas que tienes pendientes.
          </li>
          <li>Es un sistema practico y de uso facil.</li>
        </ol>
        <p>Este sistema fue desarrollado con JavaScript, React y MongoDB</p>
      </div>
    </div>
  );
}

export default About;
