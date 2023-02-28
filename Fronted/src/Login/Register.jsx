import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCrearUsuarioMutation } from "../Redux/Api";

const Register = () => {
  const [creacionUsuario, { data, error, isError }] = useCrearUsuarioMutation();
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState({
    usuario: "",
    contraseña: "",
    nombre: "",
    celular: Number,
  });
  const handleOnchangue = (e) => {
    setCreateUser({
      ...createUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isError) {
      // alert("basfjam,f ba");
    } else {
      const datos = await creacionUsuario(createUser);
      console.log(datos);
      e.target.reset();
    }
  };
  return (
    <>
      <div className="contenedor-register">
        <form className="edit-form" onSubmit={handleSubmit}>
          <h1>Registro</h1>
          <label>
            <p className="p-login">Nombre: </p>
            <input
              type="text"
              className="input-edit-login"
              name="nombre"
              onChange={handleOnchangue}
            />
          </label>
          <label>
            <p className="p-login">Usuario: </p>
            <input
              type="text"
              className="input-edit-login"
              name="usuario"
              onChange={handleOnchangue}
            />
          </label>

          <label>
            <p className="p-login">Contraseña: </p>
            <input
              type="password"
              className="input-edit-login"
              name="contraseña"
              onChange={handleOnchangue}
            />
          </label>
          <label>
            <p className="p-login">Celular: </p>
            <input
              type="text"
              className="input-edit-login"
              name="celular"
              onChange={handleOnchangue}
            />
            <p style={{ color: "#ac0d0d" }}>{error?.data?.msg}</p>
          </label>

          <div className="btns-login">
            <button className="btn-ingresar" type="submit">
              Registro
            </button>
            <button
              className="btn-ingresar"
              Ingresar
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
