import React, { useState } from "react";

import hambuergerMenu from "../../../../assets/icon-button/hamburger-menu.svg";
import "../style-component-practicante/MenuNavbar.css";
import reglamentoIcon from "../../../../assets/icons/icons-menu/icon-reglamento.svg";
import organigramaIcon from "../../../../assets/icons/icons-menu/icon-organigrama.svg";
import descargaIcon from "../../../../assets/icons/icons-menu/icon-descarga.svg";
import investigacionIcon from "../../../../assets/icons/icons-menu/icon-investigacion.svg";
import estructuraIcon from "../../../../assets/icons/icons-menu/icon-estructura.svg";
import buttonDespliegue from "../../../../assets/icon-button/icons-menu/flecha-despliegue.svg";

function MenuNavbar() {
  const [stateMenu, setStateMenu] = useState(true);
  const handle = (event) => {
    if (stateMenu == true) {
      setStateMenu(false);
    } else {
      setStateMenu(true);
    }
  };

  return (
    <div>
      <button className="button-menu" onClick={handle}>
        <img src={hambuergerMenu} alt="" />
      </button>
      <div className={`content-menu ${stateMenu ? "active" : ""}`}>
        <ul className="list-menu">
          <li>
            <img className="icon-menu" src={reglamentoIcon} alt="" />
            <a href="#" className="item-menu">
               Reglamento de PPP
            </a>
          </li>
          <br />
          <li>
            <img className="icon-menu" src={organigramaIcon} alt="" />
            <a href="#" className="item-menu">
              Organigrama Comision PPP
            </a>
          </li>
          <br />
          <li>
            <img className="icon-menu" src={descargaIcon} alt="" />
            <a href="#" className="item-menu">
              Descarga de Formatos{" "}
            </a>
            <img src={buttonDespliegue} alt="" />
            {/* <ul class="submenu">
                <li><a href="#">Formato solicitud</a></li>
                <li><a href="#">Formato aceptacion</a></li>
                <li><a href="#">Formato F1</a></li>
            </ul> */}
          </li>
          <br />
          <li>
            <img className="icon-menu" src={investigacionIcon} alt="" />
            <a href="#" className="item-menu">
            Programa de Investigacion{" "}
            </a>
            <img src={buttonDespliegue} alt="" />
            <br />
            {/* <ul class="submenu">
              <li><a href="#">Tecnologias de la informacion</a></li>
              <li><a href="#">Sistemas de informacion</a></li>
              <li><a href="#">Ingienieria de software</a></li>
            </ul> */}
          </li>
          <br />
          <li>
            <img src={estructuraIcon} alt="" />
            <a href="#" className="item-menu">
              Estructura de Informe final
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
