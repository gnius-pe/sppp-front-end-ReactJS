import React, { useState } from "react";

import hambuergerMenu from "../assets/icon-button/hamburger-menu.svg";
import "../style-components/MenuNavbar.css";

function MenuNavbar({ setEstateContet }) {
  const [stateMenu, setStateMenu] = useState(true);
  const handle = (event) => {
    if (stateMenu == true) {
      setStateMenu(false);
      setEstateContet(false);
    } else {
      setStateMenu(true);
      setEstateContet(true);
    }
  };

  return (
    <div>
      <button class="button-menu" onClick={handle}>
        <img src={hambuergerMenu} alt="" />
      </button>
      <div class={`content-menu ${stateMenu ? "active" : ""}`}>
        <ul class="list-menu">
          <li><a href="#" class="item-menu">Reglamento de PPP</a></li><br /><br /><br />
          <li><a href="#" class="item-menu">Organigrama Comision PPP</a></li><br /><br /><br />
          <li><a href="#" class="item-menu">Descarga de Formatos</a>
            <ul class="submenu">
                <li><a href="#">Formato solicitud</a></li>
                <li><a href="#">Formato aceptacion</a></li>
                <li><a href="#">Formato F1</a></li>
            </ul>
          </li>
          <li><a href="#" class="item-menu">Programa de Investigacion</a>
            <ul class="submenu">
              <li><a href="#">Tecnologias de la informacion</a></li>
              <li><a href="#">Sistemas de informacion</a></li>
              <li><a href="#">Ingienieria de software</a></li>
            </ul>
          </li>
          <li><a href="#" class="item-menu">Estructura de Informe final</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
