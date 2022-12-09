import React from "react";
import isotipoPPP from "../assets/icons/isotipo-ppp.svg";
import iconlogin from "../assets/icons/icon-login.svg";
import "../style-components/NavbarPublico.css";
import MenuNavbar from "./MenuNavbar";

function Navbar({ openModal, openModalRegistro }) {
  return (
    <nav className="navbar-publico">
      <div className="content-navbar-publico">
        <a className="icono-sistema" href="/">
          <img
            className="imgen-navbar"
            src={isotipoPPP}
            alt="isotipo del sistema"
          />
        </a>
        <a className="title-proyect" href="/">
          <h2 className="name-sistem">
            Sistema de Gestion de Practicas Pre profesionales
          </h2>
          <h2 className="name-sistem-response">SGPPP</h2>
        </a>
        <MenuNavbar />
      </div>
      <div className="contenedor-botones">
        <button className="boton-ingresar" onClick={openModal}>
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
