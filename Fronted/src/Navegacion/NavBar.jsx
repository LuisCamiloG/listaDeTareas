import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navegacion.css";
import "../Login/Login.css";
import { useAuthStore } from "../Redux/zustand";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text,
} from "@chakra-ui/react";
import NavbarGlobal from "./NavbarGlobal";

function NavBar() {
  const navigate = useNavigate();
  const profileAuth = useAuthStore((state) => state.profile);
  const setLogOut = useAuthStore((state) => state.logOut);
  const onClick = () => {
    setLogOut("", null);
    navigate("/");
  };
  return (
    <>
      {profileAuth?.user ? (
        <nav className="navegacion">
          <ul className="ul-navegacion">
            <li className="li-hover">
              <Link to="/home" className="link-navegacion">
                Home
              </Link>
            </li>
            <li className="li-hover">
              <Link to="/ListaDeTareas" className="link-navegacion">
                Lista de Tareas
              </Link>
            </li>
            <li className="li-hover">
              <Link to="/About" className="link-navegacion">
                About
              </Link>
            </li>
          </ul>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Menu>
                <MenuButton
                  as={Button}
                  background="transparent"
                  _hover={{
                    bg: "#020436",
                    transform: "translateY(-3px) scale(1.05)",
                  }}
                  position="absolute"
                  top="25px"
                  left="95%"
                >
                  <FaUserAlt className="btn-login" />
                </MenuButton>
                <MenuList>
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    width={"100%"}
                    padding="10px"
                  >
                    <Box display={"flex"} justifyContent="center">
                      <Text fontWeight={700}>Perfil del usuario</Text>
                    </Box>
                    <br />
                    <Text textAlign={"initial"} fontWeight={600}>
                      Nombre:
                    </Text>
                    <Text textAlign={"initial"}>
                      {profileAuth?.user?.nombre}
                    </Text>
                    <Text textAlign={"initial"} fontWeight={600}>
                      Usuario:
                    </Text>
                    <Text textAlign={"initial"}>
                      {profileAuth?.user?.usuario}
                    </Text>
                    <Text textAlign={"initial"} fontWeight={600}>
                      Celular:
                    </Text>
                    <Text textAlign={"initial"}>
                      {profileAuth?.user?.celular}
                    </Text>
                  </Box>
                  <MenuDivider />
                  <Box width={"90%"} display="flex" justifyContent={"flex-end"}>
                    <Button
                      colorScheme={"red"}
                      size="sm"
                      fontWeight={700}
                      onClick={onClick}
                    >
                      <RiLogoutBoxRLine />
                    </Button>
                  </Box>
                </MenuList>
              </Menu>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <NavbarGlobal />
          <div className="contenedor-home">
            <div className="subContainer-home">
              <h1 style={{ fontSize: "50px", textAlign: "initial" }}>
                Bienvenido al mejor sitio web para listar tus tareas
              </h1>
              <br />
              <p style={{ textAlign: "initial" }}>
                ¿Cansado de que se te olviden las tareas que debes hacer a
                diario? Llegó Todo List, un sitio web para que guardes,
                actualices y borres tu tareas diarias! El mejor sitio web para
                tener siempre presente lo que debes hacer!
              </p>

              <br />

              <p style={{ justifyContent: "center" }}>
                ¿Qué esperas para usarla?
              </p>
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
                      El mejor sitio web para listar tus tareas diarias, sin que
                      se te olviden, ven usala ya!
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
                  <a href="https://es-la.facebook.com/" target="_blank">
                    <FaFacebook className="li-icons" />
                  </a>
                  /TodoList
                </label>
              </li>
              <li>
                <label className="label-icons">
                  <a href="https://www.instagram.com/" target="_blank">
                    <FaInstagram className="li-icons" />
                  </a>
                  /TodoList
                </label>
              </li>
              <li>
                <label className="label-icons">
                  <a href="https://twitter.com/?lang=es" target="_blank">
                    <FaTwitter className="li-icons" />
                  </a>
                  #TodoList
                </label>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
