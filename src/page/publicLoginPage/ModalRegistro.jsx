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
              placeholder=" Correo Institucional"
              className="correo-modal"
            />
            <br />
            <span className="correotexto">
              Ejemplo:alumno.apellido@unas.edu.pe
            </span>
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
              <span className="codigotexto">Solo se aceptan números</span>
              <br />
            </label>
            <label htmlFor="">
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
          <button className="registrar-modal">REGISTRAR</button>
          <br />
        </div>
      </div>
    </div>
  );
}
export default ModalRegistro;
