import React, { useState } from "react";
import isotipoPPP from "../../../../assets/icons/isotipo-ppp.svg";
import "../style-component-practicante/NavbarPracticante.css";
import MenuNavbar from "../componentPracticante/MenuNavbar";
import xoosAvatar from "../../../../assets/avatar-user/xoos-avatar.jpg";
import ModalUser from "./ModalUser";

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
        <MenuNavbar />
      </div>
      <div className="content-front">
        <div className="container-elements">
          <p className="texto-bienvenida">Bienvenido a SysPP-FIIS UNAS</p>
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
