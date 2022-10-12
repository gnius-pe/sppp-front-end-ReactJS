import React from "react";
import "../style-component-practicante/HomePracticante.css";
import isotipoCasita from "../../../../assets/icons/isotipo-casita.svg";
import xoos from "../../../../assets/avatar-user/xoos-avatar.jpg";

function HomePracticante() {
  return (
    <div className="contenedor-practicante">
      <header className="nombre-practicante">
        <h2>Kim Soo Yeon</h2>
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
                <p className="text-dinamico">0020222343</p>
              </span>
              <hr className="linea-punteada" />
              <span className="textN">
                <p>Correo Institucional:</p>{" "}
                <p className="text-dinamico">kim.soo@unas.edu.pe</p>
              </span>
              <hr className="linea-punteada" />
              <span className="textN">
                <p>Linea de Investigacion:</p>{" "}
                <p className="text-dinamico">INGENIERIA DE SOFTWARE</p>
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
