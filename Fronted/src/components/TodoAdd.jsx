import React, { useState } from "react";
import { useAgregarTareasMutation } from "../Redux/Api";
import { useAuthStore } from "../Redux/zustand";

export const TodoAdd = () => {
  const profileAuth = useAuthStore((state) => state.profile);
  const [dateTask, setDateTask] = useState({
    tarea: "",
    descripcion: "",
    estado: false,
  });
  const [msg, setMsg] = useState(false);
  const [createTaks, { data, isError, error, isSucces }] =
    useAgregarTareasMutation();
  const handleOnchangue = (e) => {
    e.preventDefault();
    setDateTask({ ...dateTask, [e.target.name]: e.target.value });

    // console.log(dateTask);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tarea = e.target.tarea.value;
    const descripcion = e.target.descripcion.value;

    if (tarea.length < 8) {
      setMsg(true);
    }
    if (descripcion.length < 10) {
      setMsg(true);
    } else {
      createTaks({ dateTask, token: profileAuth?.token });
      e.target.reset();
    }
  };
  return (
    <form className="form-edit" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-add"
        name="tarea"
        placeholder="¿Qué hay que hacer?"
        onChange={handleOnchangue}
      />
      {msg ? (
        <span style={{ color: "#ac0d0d" }}>Minimo 8 caracteres!</span>
      ) : null}
      <input
        type="text"
        className="input-add"
        name="descripcion"
        placeholder="Descripcion"
        onChange={handleOnchangue}
      />
      {msg ? (
        <span style={{ color: "#ac0d0d" }}>
          Ingresa una descripcion más larga
        </span>
      ) : null}

      <div>
        <button className="btn-add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};
