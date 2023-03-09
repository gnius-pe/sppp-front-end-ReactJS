import React from "react";
import { NavLink } from "react-router-dom";
import "./HeadBoardPrivate.css";
import isotipoSPPPrivate from "../../../../../assets/icons/isotipo-ppp.svg";
import MenuPrivateAlumno from "./MenuPrivateAlumno";
import iconButonbandera from "../../../../../assets/icon-button/icons-navbar/icon-bandera.svg"
import iconButonAvatar from "../../../../../assets/avatar-user/avatar-white.svg"
import iconbutonCampana from "../../../../../assets/icon-button/icons-navbar/icon-campana.svg"
import iconButonCasita from "../../../../../assets/icon-button/icons-navbar/icon-casa.svg"
function HeadBoardPrivate() {
  return (
    <div className="header-style-practicante-private">
      <div className="header-manipule-box">
        <div className="title-style-private">
          <MenuPrivateAlumno/>
          <NavLink to="/practicante">
            {" "}
            <img
              className="isotipo-img-ppp-private"
              src={isotipoSPPPrivate}
              alt=""
            />
          </NavLink>
          <NavLink to="/practicante">
            <h2 className="name-system-style-private">Sistemas de Practicas Preprofesionales</h2>
          </NavLink>
        </div>
        <div className="options-alumno-private">
          <p className="label-information">Bienvenido a SysPPP - FIIS UNAS </p>
          <NavLink className="option-casita-alumno long-box-option-alumno" ><img src={iconButonCasita} alt="" /></NavLink>
          <button className="option-notifications-alumno long-box-option-alumno"><img src={iconbutonCampana} alt="" /></button>
          <button className="option-progres-limit-alumno ">Progreso <img src={iconButonbandera} alt="" /></button>
          <button className="option-your-informtation "><img src={iconButonAvatar} alt="" /></button>
        </div>
      </div>
      <div className="ubication-refence-detail-private">
        <h2 className="title-head-private">Bienvenido Practicante</h2>
        <p className="sub-tutle-head-private">/Sistema de practica pre profesionales</p>
      </div>
    </div>
  );
}

export default HeadBoardPrivate;
