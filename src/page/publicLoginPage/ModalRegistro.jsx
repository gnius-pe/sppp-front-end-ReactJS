import React from "react";
import "./style-page/ModalRegistro.css";
import closeModalRegistro from "../../assets/icon-button/close-2.svg";
function ModalRegistro({ stateModalRegistro, handlerCLoseRegitro }) {
  return (
    <div className={`contenedor ${stateModalRegistro ? "openMostrar" : ""}`}>
      <div className="contenedor-inputs">
        <button className="close-modal" onClick={handlerCLoseRegitro}>
          <img className="btn-img-close" src={closeModalRegistro} alt="" />
        </button>
        <div className="titulo-modal">
          <h1 className="h1-titutlo">Registrate</h1>
          <p className="p-sub-informacion">Es rapido y sencillo</p>
        </div>
        <form className="form-inputs" action="">
          <p className="estilo-generico-elemento">
            <input
              className="input-nombre estilo-input-general"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="input-apellido estilo-input-general"
              type="text"
              placeholder="Apellidos"
            ></input>
          </p>
          <div className="estilo-correo">
            <p className="margin-correo estilo-generico-elemento">
              <input
                className="input-correo estilo-input-general"
                type="text"
                placeholder="Correo Institucional"
              />
            </p>
            <p className="ejemplo-correo">
              Ejemplo: alumno.apellido@unas.edu.pe
            </p>
          </div>
          <p className="estilo-generico-elemento estilo-duo">
            <input
              type="text"
              className="input-codigo estilo-input-general"
              placeholder="Codigo"
            />

            <input
              type="text"
              className="input-direccion estilo-input-general"
              placeholder="Domicilio Actual"
            />
          </p>
          <p className="estilo-generico-elemento">
            <input
              type="text"
              className="input-numero estilo-input-general"
              placeholder="Numero Celular"
            />
            <input
              type="password"
              className="input-password estilo-input-general"
              placeholder="Contraseña : solo 8 caracteres"
            />
          </p>
        </form>
        <div className="pie-modal">
          <button className="boton-registrar">REGISTRAR</button>
        </div>
      </div>
    </div>
  );
}
export default ModalRegistro;
