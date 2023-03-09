import React from "react";
import "./menuPublic.css";
import MenuPublicButton from "../../../../assets/icon-button/hamburger-menu.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuPublic() {
  const [butonMenu, setButonMenu] = useState(false);
  const handleActiveMenu = () => {
    setButonMenu(butonMenu == false ? true : false);
  };

  const handlerCursorPublic = (event) => {
    setButonMenu(
      event.target.className == "sombra-menu active-sombra-menu" ? false : true
    );
  };

  return (
    <div className="container-menu-button-public">
      <button
        className="button-menu-hambuerger-public"
        onClick={handleActiveMenu}
      >
        <img
          className="img-menu-hambuerger-public"
          src={MenuPublicButton}
          alt=""
        />
      </button>
      <div className={`menu-public ${butonMenu ? "active-menu-public" : ""}`}>
        <button
          className="button-menu-hambuerger-public"
          onClick={handleActiveMenu}
        >
          <img
            className="img-menu-hambuerger-public"
            src={MenuPublicButton}
            alt=""
          />
        </button>
        <ul className="list-option-menu-public">
          <li><NavLink to="/reglamento" onClick={handleActiveMenu}>Reglamento PPP</NavLink></li>
          <li>Documentos</li>
        </ul>
      </div>
      <div
        className={`sombra-menu ${butonMenu ? "active-sombra-menu" : ""}`}
        onClickCapture={handlerCursorPublic}
      ></div>
    </div>
  );
}

export default MenuPublic;
