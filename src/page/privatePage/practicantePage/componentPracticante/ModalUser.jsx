import React from "react";
import "../style-component-practicante/ModalUser.css";
import avatarDefault from "../../../../assets/avatar-user/avatar-default.svg";
import carnet from "../../../../assets/icons/icons-navbar-avatar/carnet.svg";
import closeUser from "../../../../assets/icons/icons-navbar-avatar/close-user.svg";
import Cookies from "universal-cookie";

const cokies = new Cookies();

function ModalUser({ stateOpenModalUser, captureCursorElement }) {
  const cerrarSesion = () => {
    cokies.remove("id", { path: "/practicante" });
    cokies.remove("nombre", { path: "/practicante" });
    cokies.remove("apellido", { path: "/practicante" });
    cokies.remove("email", { path: "/practicante" });
    cokies.remove("codigo", { path: "/practicante" });
    cokies.remove("direccionActual", { path: "/practicante" });
    cokies.remove("numeroCelular", { path: "/practicante" });
    window.location.href = "../";
  };
  return (
    <div
      className={`Container-modal-user ${stateOpenModalUser ? "visible" : ""}`}
      onClickCapture={captureCursorElement}
    >
      <div className="user-information">
        <img className="avatar-user" src={avatarDefault} alt="" />
        <p className="name-user">
          {cokies.get("nombre")}
          <br />
          {cokies.get("apellido")}
        </p>
        <hr className="line" />
        <img className="carnet" src={carnet} alt="esto es un carnet" />
        <p className="tipo-user">Practicante</p>
        <p className="codigo-user">{cokies.get("codigo")}</p>
        <hr className="line" />
        <button className="buton-close" onClick={cerrarSesion}>
          <img src={closeUser} alt="" />
          <p>Cerrar Sesión</p>
        </button>
      </div>
    </div>
  );
}
export default ModalUser;
