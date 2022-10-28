import React from "react";
import "./style-page/ModalRegistro.css";
function ModalRegistro({ stateModalRegistro, handlerCLoseRegitro }) {
  return (
    <div className={`contenedor ${stateModalRegistro ? "openMostrar" : ""}`}>
      <div className="contenedor-inputs">
        <button className="close" onClick={handlerCLoseRegitro}>
          {" "}
          X{" "}
        </button>
        <h1 className="title-modal">Registrate</h1>
        <span>Es rapido y facil...</span>
        <br />
        <div className="contenedor-cajas">
          <div className="cont-nombreApellido">
            <input type="" placeholder="Nombres" className="nombres-modal" />
            <input
              type="text"
              placeholder="Apellidos"
              className="apellidos-modal"
            />
          </div>
          <label className="cont-correo" htmlFor="">
            <input
              type="text"
              placeholder="Correo Institucional"
              className="correo-modal"
            />
            <br />
            <span>Ejemplo:alumno.apellido@unas.edu.pe</span>
            <br />
          </label>
          <div className="contenedor-codidomi">
            <label htmlFor="">
              <input
                type="text"
                placeholder="Codigo"
                className="codigo-modal"
              />
              <br />
              <span>Solo se aceptan números</span>
              <br />
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Domicilio"
                className="domicilio-modal"
              />
              <br />
              <span>Direccion actual</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalRegistro;
