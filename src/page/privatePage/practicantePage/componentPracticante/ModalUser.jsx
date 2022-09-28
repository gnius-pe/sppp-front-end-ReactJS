import React from "react";
import "../style-component-practicante/ModalUser.css";
import xoosAvatar from "../../../../assets/avatar-user/xoos-avatar.jpg";
import carnet from "../../../../assets/icons/icons-navbar-avatar/carnet.svg";
import closeUser from "../../../../assets/icons/icons-navbar-avatar/close-user.svg";
function ModalUser({ stateOpenModalUser, captureCursorElement }) {
  return (
    <div
      className={`Container-modal-user ${stateOpenModalUser ? "visible" : ""}`}
      onClickCapture={captureCursorElement}
    >
      <div className="user-information">
        <img className="avatar-user" src={xoosAvatar} alt="" />
        <p className="name-user">
          Kim
          <br />
          Soo Yeon
        </p>
        <hr className="line" />
        <img className="carnet" src={carnet} alt="esto es un carnet" />
        <p className="tipo-user">Practicante</p>
        <p className="codigo-user">0020222343</p>
        <hr className="line" />
        <button className="buton-close">
          <a href="/">
            <img src={closeUser} alt="" />
            <p>Cerrar Sesión</p>
          </a>
        </button>
      </div>
    </div>
  );
}
export default ModalUser;
