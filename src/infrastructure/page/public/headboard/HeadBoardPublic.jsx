import React from "react";
import "./headBoardPublic.css";
import isotipoSPP from "../../../../assets/icons/isotipo-ppp.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
} from "react-router-dom";
import MenuPublic from "./MenuPublic";
import IconoButonLogin from "../../../../assets/icons/icon-login.svg";

function HeadBoardPublic() {
  return (
    <div className="header-style-public">
      <div className="header-page-public">
        <div className="buton-title-style-public">
          <MenuPublic />
          <NavLink to="/">
            <img
              className="isotipo-img-ppp-public"
              src={isotipoSPP}
              alt="isotipo del sistema"
            />
          </NavLink>
          <NavLink to="/">
            <h2 className="name-system-style">
              Sistema de Practicas Preprofesionales
            </h2>
            <p className="alternative-name-system-style">SPPP</p>
          </NavLink>
        </div>
        <button className="login-button-sistem-style">
          {" "}
          <p className="texto-in-button-style">Ingresar</p>
          <img
            className="icon-login-button-style"
            src={IconoButonLogin}
            alt=""
          />
        </button>
      </div>
      <div className="title-information-details">
        <h2 className="title-head-public">Bienvenido !</h2>
        <p className="sub-tutle-head-public">/ sistema de Practicas Preprofesionales</p>
      </div>
    </div>
  );
}

export default HeadBoardPublic;
