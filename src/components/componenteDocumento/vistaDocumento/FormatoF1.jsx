import React from "react";
import "../styleVistaDocumento/FormatoF1.css";
import iconDownload from "../../../assets/icons/icon-download.svg";

function FormatoF1() {
  return (
    <div className="contenerdor-F1">
      <div className="estructura-cabezera-principal">
        <div className="cabezera-secundaria">
          <h1>FORMATO DE F1 - INSCRIPCIÓN DE PRÁCTICAS PRE PROFESIONALES</h1>
          <p>/public</p>
        </div>

        <button className="button-download">
          {" "}
          <a
            className="link-down"
            href="https://drive.google.com/u/0/uc?id=145lntwEwMC_xeuBuumDn_1wGSrurdOPs&export=download"
          >
            Descargar
            <img className="icon-down" src={iconDownload} alt="" />
          </a>
        </button>
      </div>
      <div className="contenedor-documento">
        <div className="contain-pdf">
          <iframe
            className="doc"
            src="https://drive.google.com/file/d/145lntwEwMC_xeuBuumDn_1wGSrurdOPs/preview"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FormatoF1;
