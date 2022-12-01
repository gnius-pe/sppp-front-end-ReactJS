import React from "react";
import "../styleVistaDocumento/FormatoAceptacion.css";
import iconDownload from "../../../assets/icons/icon-download.svg";

function FormatoAceptacion() {
  return (
    <div className="contenerdor-FAceptacion">
      <div className="estructura-cabezera-principal">
        <div className="cabezera-secundaria">
          <h1>FORMATO CARTA DE ACEPTACIÓN DE PRÁCTICA PRE PROFESIONAL</h1>
          <p>/public</p>
        </div>

        <button className="button-download">
          {" "}
          <a
            className="link-down"
            href="https://drive.google.com/u/0/uc?id=1bqoc3z5UArOz8sOirYt47W0D3tAP5b1v&export=download"
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
            src="https://drive.google.com/file/d/1bqoc3z5UArOz8sOirYt47W0D3tAP5b1v/preview"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FormatoAceptacion;
