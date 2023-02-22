import React, { useState } from "react";
import { useAgregarTareasMutation } from "../Redux/Api";

export const TodoAdd = () => {
  const [dateTask, setDateTask] = useState({
    tarea: "",
    descripcion: "",
  });
  const [createTaks, { data, isError, error, isSucces }] =
    useAgregarTareasMutation();
  const handleOnchangue = (e) => {
    e.preventDefault();
    setDateTask({ ...dateTask, [e.target.name]: e.target.value });
    console.log(dateTask);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTaks(dateTask);
    e.target.reset();
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
      <input
        type="text"
        className="input-add"
        name="descripcion"
        placeholder="Descripcion"
        onChange={handleOnchangue}
      />
      <div>
        <button className="btn-add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};
