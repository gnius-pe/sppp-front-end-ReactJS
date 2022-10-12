import React from "react";
import isotipoPPP from "../assets/icons/isotipo-ppp.svg";
import iconlogin from "../assets/icons/icon-login.svg";
import "../style-components/Navbar.css";
import MenuNavbar from "./MenuNavbar";

function Navbar({ openModal, openModalRegistro }) {
  return (
    <nav className="navbar">
      <div className="content-navbar">
        <a className="icon-sistem" href="/">
          <img src={isotipoPPP} alt="isotipo del sistema" />
        </a>
        <a className="title-proyect" href="/">
          <h2 className="name-sistem">
            Sistema de Gestion de Practicas Pre profesionales
          </h2>
        </a>
        <MenuNavbar />
      </div>
      <div className="login-sistema" href="#">
        <button className="ingresar" onClick={openModal}>
          <p>Ingresar</p>
          <img
            className="icon-ingresar"
            src={iconlogin}
            alt="isotipo de login"
          />
        </button>
        <button className="crear-usuario" onClick={openModalRegistro}>
          Crear Usuario
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
