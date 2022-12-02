import React from "react";
import "../style-component-practicante/HomePracticante.css";
import isotipoCasita from "../../../../assets/icons/isotipo-casita.svg";
import xoos from "../../../../assets/avatar-user/avatar-default.svg";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function HomePracticante() {
  console.log(cookies.getAll());
  return (
    <div className="contenedor-practicante">
      <header className="nombre-practicante">
        <h2>
          {cookies.get("nombre")} {cookies.get("apellido")}
        </h2>
        <p>
          {" "}
          <img src={isotipoCasita} alt="" /> / Alumno
        </p>
      </header>
      <main className="detalles-practicante">
        <div className="practicante">
          <hr className="barra-estado-solicitud" />
          <div className="informacion-practicante">
            <img className="avatar-practicante" src={xoos} alt="" />
            <section className="informacion">
              <span className="textN">
                <p>Facultad:</p>
                <p className="text-dinamico">
                  FACULTAD DE INGENIERIA EN INFORMATICA Y SISTEMAS
                </p>
              </span>
              <hr className="linea-punteada" />
              <span className="textN">
                <p>Escuela Profesional:</p>{" "}
                <p className="text-dinamico">
                  INGENIERIA EN INFORMATICA Y SISTEMAS
                </p>{" "}
              </span>
              <hr className="linea-punteada" />
              <span className="textN">
                <p>Codigo Universitario:</p>{" "}
                <p className="text-dinamico">{cookies.get("codigo")}</p>
              </span>
              <hr className="linea-punteada" />
              <span className="textN">
                <p>Correo Institucional:</p>{" "}
                <p className="text-dinamico">{cookies.get("email")}</p>
              </span>
              <hr className="linea-punteada" />
              <span className="textN">
                <p>Linea de Investigacion:</p>{" "}
                <p className="text-dinamico">NO DEFINIDO</p>
              </span>
              <hr className="linea-punteada" />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePracticante;
