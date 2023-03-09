import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuPublicButtonPrivate  from "../../../../../assets/icon-button/hamburger-menu.svg"
import "./MenuPrivateAlumno.css"

function MenuPrivateAlumno() {
  const [butonMenu, setButonMenu] = useState(false);
  const handleActiveMenu = () => {
    setButonMenu(butonMenu == false ? true : false);
  };

  const handlerCursorPublic = (event) => {
    setButonMenu(
      event.target.className == "sombra-menu-private-alumno active-sombra-menu-private-alumno" ? false : true
    );
  };
  return (
    <div className="container-menu-button-private-alumno">
      <button
        className="button-menu-hambuerger-private-alumno"
        onClick={handleActiveMenu}
      >
        <img
          className="img-menu-hambuerger-private-alumno"
          src={MenuPublicButtonPrivate}
          alt=""
        />
      </button>
      <div
        className={`menu-private-alumno ${
          butonMenu ? "active-menu-private-alumno" : ""
        }`}
      >
        <button
          className="button-menu-hambuerger-private-alumno"
          onClick={handleActiveMenu}
        >
          <img
            className="img-menu-hambuerger-private-alumno"
            src={MenuPublicButtonPrivate}
            alt=""
          />
        </button>
        <ul className="list-option-menu-private-alumno">
          <li>
            <NavLink to="/reglamento" onClick={handleActiveMenu}>
              Reglamento PPP
            </NavLink>
          </li>
          <li>Documentos</li>
        </ul>
      </div>
      <div
        className={`sombra-menu-private-alumno ${
          butonMenu ? "active-sombra-menu-private-alumno" : ""
        }`}
        onClickCapture={handlerCursorPublic}
      ></div>
    </div>
  );
}

export default MenuPrivateAlumno;
