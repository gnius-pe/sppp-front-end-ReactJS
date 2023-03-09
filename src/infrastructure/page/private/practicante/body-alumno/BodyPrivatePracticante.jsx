import React from "react";
import "./BodyPrivatePracticante.css";
import iconAvatarDefault from "../../../../../assets/avatar-user/avatar-default.svg";

function BodyPrivatePracticante() {
  return (
    <div className="body-private-practicante">
      <section className="information-practicante-private">
        <hr className="line-status-practice" />
        <div className="date-practice-private">
          <img src={iconAvatarDefault} alt="" />
          <div className="information-especific-private">
            <span className="container-date-private">
              <p>Nombre :</p> <p className="date-dinamic">Igor Ramos Cruzado</p>
            </span>
            <hr className="line-punted" />
            <span className="container-date-private">
              <p>Titulo del Proyecto :</p>{" "}
              <p className="date-dinamic">Fenoles Totales</p>
            </span>
            <hr className="line-punted" />
            <span className="container-date-private">
              <p>Programa de investigacion :</p>
              <p className="date-dinamic">Ingenieria de Software</p>
            </span>
            <hr className="line-punted" />
            <span className="container-date-private">
              <p>Empresa :</p>
              <p className="date-dinamic">UNAS</p>
            </span>
            <hr className="line-punted" />
            <span className="container-date-private">
              <p>Asesor :</p> <p className="date-dinamic">Cristhian Villegas</p>
            </span>
            <hr className="line-punted" />
            <span className="container-date-private">
              <p>Estado :</p> <p className="date-dinamic">Pendiente</p>
            </span>
            <hr className="line-punted" />
          </div>
        </div>
      </section>
      <section className="information-practica-init">
        <div className="title-informacion-correction">
          <h3>Correcciones</h3>
          <p>Nota: las correciones son eviadas directamente de la comision</p>
        </div>
        <div className="correction-practicante">
          <h3>Importante</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="correction-of-comision"
          ></textarea>
        </div>
        <div className="corrections-details">
          <h3>Correcciones detalladas</h3>
          <p>claro</p>
          <button>lo</button>
        </div>
      </section>
    </div>
  );
}

export default BodyPrivatePracticante;
