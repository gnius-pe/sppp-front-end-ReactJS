import React from "react";
import "../styleVistaDocumento/OrganigramaPPP.css";
import organi from "../../../assets/organigrama/organigramaPPP.png";

function OrganigramaPPP() {
  return (
    <div>
      <dir className="laborPPP">
        <h3>
          {" "}
          La comisión de Prácticas Pre Profesionales, es la encargada de
          organizar, estructurar, dirigir, controlar y supervisar la ejecución
          de las prácticas pre profesionales de los estudiantes de la facultad
          que se desarrollan en los últimos años de estudios académicos, según
          currícula vigente.
        </h3>
      </dir>
      <div>
        <img className="organigrama" src={organi} alt="" />
      </div>
    </div>
  );
}

export default OrganigramaPPP;
