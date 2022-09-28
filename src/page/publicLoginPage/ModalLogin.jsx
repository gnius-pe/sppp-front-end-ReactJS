import React from "react";
import "../../page/publicLoginPage/style-page/ModalLogin.css";
import iconUserDefault from "../../assets/icons/icon-user-default.svg";
import iconButonClose from "../../assets/icon-button/close-modal.svg";
function ModalLogin({ stateModal, handlerCLose }) {
  return (
    <main className={`container-modal ${stateModal ? "open-modal" : ""}`}>
      <div className="modal">
        <div className="info-modal">
          <img className="img-user-default" src={iconUserDefault} alt="" />
          <h3>Iniciar Sesion</h3>
          <p>Sistema de Gestión de Prácticas Pre Profesionaleas</p>
          {/* Your code */}
          <div className="property-data-user">
            <button><a href="practicante">Ingresar</a></button>
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
