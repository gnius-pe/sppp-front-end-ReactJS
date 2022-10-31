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
        <h1 className="title-modal">Regístrate</h1>
        <span className="mensaje">Es rápido y sencillo...</span>
        <br />
        <div className="contenedor-cajas">
          <div className="cont-nombreApellido style-espacios-dos-input">
            <input type="" placeholder="Nombres" className="nombres-modal" />
            <input
              type="text"
              placeholder="Apellidos"
              className="apellidos-modal"
            />
          </div>
          <div className="cont-correo style-espacios-un-input">
            <input
              type="text"
              placeholder=" Correo Institucional"
              className="correo-modal"
            />
            <br />
            <span className="correotexto">
              Ejemplo:alumno.apellido@unas.edu.pe
            </span>
            <br />
          </div>
          <div className="contenedor-codidomi style-espacios-dos-input">
            <label className="item-contenedor-codidomi" htmlFor="">
              <input
                type="text"
                placeholder="Codigo"
                className="codigo-modal"
              />
              <span className="codigotexto">Solo se aceptan números</span>
              <br />
            </label>
            <label className="item-contenedor-codidomi" htmlFor="">
              <input
                type="text"
                placeholder="Domicilio"
                className="domicilio-modal"
              ></input>
              <span className="domiciliotexto">Direccion actual</span>
            </label>
          </div>
          <br />
          <div className="contenedor-registrar"></div>
          <br />
        </div>
        <button className="registrar-modal">REGISTRAR</button>
      </div>
    </div>
  );
}
export default ModalRegistro;
