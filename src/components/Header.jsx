import React from "react";
import isotipoPPP from "../assets/icons/isotipo-ppp.svg";
import hambuergerMenu from "../assets/icon-button/hamburger-menu.svg";
import "../style-components/header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="content-navbar">
        <a className="icon-sistem" href="#">
          <img src={isotipoPPP} alt="isotipo del sistema" />
        </a>
        <a className="title-proyect" href="#">
          <h2 className="name-sistem">
            Sistema de Gestion de Practicas Pre profesionales
          </h2>
        </a>
        <button className="button-menu">
          <img src={hambuergerMenu} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
