import React, { useState } from "react";
import isotipoPPP from "../../../../assets/icons/isotipo-ppp.svg";
import "../style-component-practicante/NavbarPracticante.css";
import MenuNavbarPracticante from "../componentPracticante/MenuNavbarPracticante";
import xoosAvatar from "../../../../assets/avatar-user/xoos-avatar.jpg";
import ModalUser from "./ModalUser";
import BanderaIcon from "../../../../assets/icon-button/icons-navbar/icon-bandera.svg";
import CampanaIcon from "../../../../assets/icon-button/icons-navbar/icon-campana.svg";
import CasaIcon from "../../../../assets/icon-button/icons-navbar/icon-casa.svg";
import { NavLink } from "react-router-dom";

function NavbarPracticante() {
  const [stateOpenModalUser, setOpenModal] = useState(false);
  const openModalAvatarUser = () => {
    if (stateOpenModalUser == true) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  /**
   * esto se encarga de cerrar el modal, si es que
   * hace click fuera del modal
   * @param {*} event
   */
  const captureElementForClose = (event) => {
    if (event.target.className == "Container-modal-user visible") {
      if (stateOpenModalUser == true) {
        setOpenModal(false);
      } else {
        setOpenModal(true);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="content-navbar">
        <a className="icon-sistem" href="#">
          <img src={isotipoPPP} alt="isotipo del sistema" />
        </a>
        <a className="title-proyect" href="#">
          <p className="name-sistem">
            Sistema de Gestion de Practicas Pre profesionales
          </p>
        </a>
        <MenuNavbarPracticante />
      </div>
      <div className="content-front">
        <div className="container-elements">
          <p className="texto-bienvenida">Bienvenido a SysPP-FIIS UNAS</p>
          {/* Aqui voy a agregar */}
          <NavLink className="home" to={"/practicante/home"}>
            <img className="icon-casa" src={CasaIcon} alt="" />
          </NavLink>
          <img className="icon-campana" src={CampanaIcon} alt="" />
          <button className="button-progreso">
            <p className="texto-progreso">Progreso</p>
            <img className="icon-bandera" src={BanderaIcon} alt="" />
          </button>
          {/* Aqui va terminar */}
          <img
            className="avatar"
            src={xoosAvatar}
            alt="imagen de mi crush xD"
            onClick={openModalAvatarUser}
          />
        </div>
      </div>
      <ModalUser
        stateOpenModalUser={stateOpenModalUser}
        captureCursorElement={captureElementForClose}
      />
    </nav>
  );
}

export default NavbarPracticante;
