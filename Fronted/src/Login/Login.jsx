import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../Axios/axios";
import NavbarGlobal from "../Navegacion/NavbarGlobal";
import { useAuthStore } from "../Redux/zustand";

const Login = () => {
  const setProfileAuth = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    usuario: "",
    contraseña: "",
  });
  const onChangue = (e) => {
    e.preventDefault();
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginRequest(dataLogin);
    console.log(data);
    setProfileAuth(data?.data);
    navigate("/home");
  };
  return (
    <>
      <NavbarGlobal />
      <div className="contenedor-login">
        <form className="edit-form" onSubmit={handleSubmit}>
          <h2>Inicio de sesión</h2>
          <label>
            <p className="p-login">Usuario: </p>
            <input
              type="text"
              className="input-edit-login"
              name="usuario"
              onChange={onChangue}
            />
          </label>
          <label>
            <p className="p-login">Contraseña: </p>
            <input
              type="password"
              className="input-edit-login"
              name="contraseña"
              onChange={onChangue}
            />
          </label>
          <div>
            <button type="submit" className="btn-ingresar">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
