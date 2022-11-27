import React from "react";
import "../styleVistaDocumento/EstructuraFinal.css";
import iconDownload from "../../../assets/icons/icon-download.svg";

function EstructuraFinal() {
  return (
    <div className="contenedor-informe">
      <div className="estructura-cabezera-principal">
        <div className="cabezera-secundaria">
          <h1>ESTRUCTURA FINAL DE PRÁCTICA</h1>
          <p>/public</p>
        </div>

        <button className="button-download">
          {" "}
          <a
            className="link-down"
            href="https://drive.google.com/u/0/uc?id=1xrx_sA3eGTYS2mljkVLtd9bopJmdnRLH&export=download"
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
            src="https://drive.google.com/file/d/1xrx_sA3eGTYS2mljkVLtd9bopJmdnRLH/preview"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default EstructuraFinal;
