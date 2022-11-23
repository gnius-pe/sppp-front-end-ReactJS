import React from "react";
import "../styleVistaDocumento/OrganigramaPPP.css";
import organi from "../../../assets/organigrama/organigramaPPP.png";

function OrganigramaPPP() {
  return (
    <div className="page-organigrama">
      <div className="portada-organigrama">
        <p>Comisión Prácticas Pre Profesionales</p>
        <h1 className="text-organigrama">ORGANIGRAMA</h1>
        <p>FIIS - UNAS</p>
        {/* {<img className="organigrama" src={fiis} alt="" />} */}
      </div>

      <div className="laborPPP">
        <h3>
          {" "}
          La comisión de Prácticas Pre Profesionales, es la encargada de
          organizar, estructurar, dirigir, controlar y supervisar la ejecución
          de las prácticas pre profesionales de los estudiantes de la facultad
          que se desarrollan en los últimos años de estudios académicos, según
          currícula vigente.
        </h3>
      </div>

      <div>{<img className="organigrama" src={organi} alt="" />}</div>
    </div>
  );
}

export default OrganigramaPPP;
