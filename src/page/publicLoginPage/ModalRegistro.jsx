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
        <span className="mensaje spam-style">Es rápido y sencillo...</span>
        <br />
        <div className="contenedor-cajas">
          <div className="cont-nombreApellido style-espacios-dos-input">
            <input
              type=""
              placeholder="Nombres"
              className="nombres-modal input-style-all"
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="apellidos-modal input-style-all"
            />
          </div>
          <div className="cont-correo style-espacios-un-input">
            <input
              type="text"
              placeholder=" Correo Institucional"
              className="correo-modal input-style-all"
            />
            <br />
            <span className="correotexto spam-style">
              Ejemplo:alumno.apellido@unas.edu.pe
            </span>
          </div>
          <div className="contenedor-codidomi ">
            <div className="item-contenedor-codidomi stily-input-code style-espacios-dos-input">
              <input
                type="text"
                placeholder="Codigo"
                className="codigo-modal input-style-all"
              />
              <span className="codigotexto codidomi-style spam-style">
                Solo se aceptan números
              </span>
            </div>
            <div className="item-contenedor-codidomi stily-input-domicilio style-espacios-dos-input">
              <input
                type="text"
                placeholder="Domicilio"
                className="domicilio-modal input-style-all"
              ></input>
              <span className="domiciliotexto codidomi-style spam-style">
                Direccion actual
              </span>
            </div>
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
