import React from "react";
import isotipoPPP from "../assets/icons/isotipo-ppp.svg";
import "../style-components/header.css";
import MenuNavbar from "../components/MenuNavbar";

function Header({ setEstateContet }) {
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
        <MenuNavbar setEstateContet={setEstateContet} />
      </div>
    </nav>
  );
}

export default Header;
