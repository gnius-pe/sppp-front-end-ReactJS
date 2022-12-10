import React, { useState } from "react";

import hambuergerMenu from "../assets/icon-button/hamburger-menu.svg";

import reglamentoIcon from "../assets/icons/icons-menu/icon-reglamento.svg";
import organigramaIcon from "../assets/icons/icons-menu/icon-organigrama.svg";
import descargaIcon from "../assets/icons/icons-menu/icon-descarga.svg";
import investigacionIcon from "../assets/icons/icons-menu/icon-investigacion.svg";
import estructuraIcon from "../assets/icons/icons-menu/icon-estructura.svg";
import buttonDespliegue from "../assets/icon-button/icons-menu/flecha-despliegue.svg";
import "../style-components/MenuNavbarPublic.css";

import { NavLink } from "react-router-dom";

function MenuNavbar() {
  const [stateMenu, setStateMenu] = useState(true);
  const [stateSubMenu, setSubMenu] = useState(false);
  const [stateSubMenuTow, setStateSubMenuTow] = useState(false);

  const handle = (event) => {
    if (stateMenu == true) {
      setStateMenu(false);
    } else {
      setStateMenu(true);
    }
  };

  const handlerCaptureCursor = (event) => {
    if (event.target.className == "font") {
      stateMenu ? setStateMenu(false) : setStateMenu(true);
    }
  };

  const handlerSubMenu = () => {
    if (stateSubMenu == true) {
      setSubMenu(false);
    } else {
      setSubMenu(true);
    }
  };

  const handlerOpenSubMenuTow = () => {
    if (stateSubMenuTow == true) {
      setStateSubMenuTow(false);
    } else {
      setStateSubMenuTow(true);
    }
  };

  return (
    <div className="menu-usuario-publico" onClickCapture={handlerCaptureCursor}>
      <button className="boton-menu-publico" onClick={handle}>
        <img src={hambuergerMenu} alt="" />
      </button>
      <div className={`font ${stateMenu ? "desactive-font" : ""}`}></div>
      <div
        className={`content-menu-public ${
          stateMenu ? "active-menu-lateral-public" : ""
        }`}
      >
        <ul className="lista-menu">
          <li className="opcion-menu">
            <NavLink to="/reglamento-ppp" className="opcion" onClick={handle}>
              <img
                className="icon-menu ajuste-icon"
                src={reglamentoIcon}
                alt=""
              />
              <p className="text-menu text-sub-menu">Reglamento de PPP</p>
            </NavLink>
          </li>
          <br />
          <li className="opcion-menu">
            <NavLink to="/organigrama-ppp" className="opcion" onClick={handle}>
              <img
                className="icon-menu ajuste-icon"
                src={organigramaIcon}
                alt=""
              />
              <p className="text-menu text-sub-menu">
                Organigrama Comision PPP
              </p>
            </NavLink>
          </li>
          <br />
          <li
            className={`opcion-menu con-button ${
              stateSubMenu ? "style-submenu" : ""
            }`}
          >
            <button className="button-sub-menu" onClick={handlerSubMenu}>
              <img className="icon-menu" src={descargaIcon} alt="" />
              <p className="text-sub-menu text-menu">Formatos </p>
              <img src={buttonDespliegue} alt="" />
            </button>
            <ul className={`submenu ${stateSubMenu ? "" : "close-sub-menu"}`}>
              <li className="option-sub-menu">
                <NavLink
                  className="elemento-sub-menu"
                  to="/formato-solicitud"
                  onClick={handle}
                >
                  Formato solicitud
                </NavLink>
              </li>
              <hr />
              <li className="option-sub-menu">
                <NavLink
                  className="elemento-sub-menu"
                  to="/formato-aceptacion"
                  onClick={handle}
                >
                  Formato aceptacion
                </NavLink>
              </li>
              <hr />

              <li className="option-sub-menu">
                <NavLink
                  className="elemento-sub-menu"
                  to="/formato-f1"
                  onClick={handle}
                >
                  Formato F1
                </NavLink>
              </li>
              <hr />
            </ul>
          </li>
          <br />
          <li
            className={`opcion-menu ${stateSubMenuTow ? "style-submenu" : ""}`}
          >
            <button className="button-sub-menu" onClick={handlerOpenSubMenuTow}>
              <img className="icon-menu" src={investigacionIcon} alt="" />
              <p className="text-sub-menu text-menu">
                Programa de Investigacion
              </p>
              <img src={buttonDespliegue} alt="" />
            </button>
            <ul
              className={`submenu ${stateSubMenuTow ? "" : "close-sub-menu"}`}
            >
              <li className="option-sub-menu">
                <a className="elemento-sub-menu" href="#">
                  Tecnologias de la informacion
                </a>
              </li>
              <hr />
              <li className="option-sub-menu">
                <a className="elemento-sub-menu" href="#">
                  Sistemas de informacion
                </a>
              </li>
              <hr />
              <li className="option-sub-menu">
                <a className="elemento-sub-menu" href="#">
                  Ingienieria de software
                </a>
              </li>
              <hr />
            </ul>
          </li>
          <br />
          <li className="opcion-menu">
            <NavLink
              to="/estructura-informe-final"
              className="opcion"
              onClick={handle}
            >
              <img
                className="icon-menu ajuste-icon"
                src={estructuraIcon}
                alt=""
              />
              <p className="text-sub-menu text-menu">
                Estructura de Informe final
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
