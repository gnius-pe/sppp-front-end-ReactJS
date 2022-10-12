import React from "react";
import "../../page/publicLoginPage/style-page/ModalLogin.css";
import iconUserDefault from "../../assets/icons/icon-user-default.svg";
import iconButonClose from "../../assets/icon-button/close-modal.svg";
import iconUserCorreo from "../../assets/icons/icon-user.svg";
import iconPassword from "../../assets/icons/icon-password.svg";
import iconTipousuario from "../../assets/icons/icon-tipousuario.svg";
import iconDespliegue from "../../assets/icons/icon-despliegue.svg";

function ModalLogin({ stateModal, handlerCLose }) {
  return (
    <main className={`container-modal ${stateModal ? "open-modal" : ""}`}>
      <div className="modal">
        <div className="info-modal">
          <img className="img-user-default" src={iconUserDefault} alt="" />
          <h3>Iniciar Sesion</h3>
          <p>Sistema de Gestión de Prácticas Pre Profesionaleas</p>
          {/* Your code */}
          <div className="property-data-login">
            <img className="user-icon icon" src={iconUserCorreo} alt="" />
            <input
              className="login-input"
              type="text"
              name="correo"
              id="correo"
              placeholder="Correo institucional"
            />
          </div>

          <div className="property-data-login">
            <img className="password-icon icon" src={iconPassword} alt="" />
            <input
              className="login-input"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
          </div>

          <div className="property-data-login">
            <img
              className="tipousuario-icon icon"
              src={iconTipousuario}
              alt=""
            />
            <input
              className="login-input style-type-user"
              type="text"
              name="type-user"
              id="type-user"
              placeholder="Tipo de Usuario"
            />
            <img className="despliegue-icon icon" src={iconDespliegue} alt="" />
          </div>

          <div className="property-data-user">
            <a className="btn-ingresar" href="practicante/home">
              Ingresar
            </a>
          </div>
          {/* end your code :) */}
        </div>
        <button className="buton-close" onClick={handlerCLose}>
          <img className="close-icon" src={iconButonClose} alt="" />
        </button>
      </div>
    </main>
  );
}
export default ModalLogin;
