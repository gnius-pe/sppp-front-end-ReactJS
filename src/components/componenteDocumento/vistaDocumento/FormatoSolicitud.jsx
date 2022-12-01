import React from "react";
import "../styleVistaDocumento/FormatoSolicitud.css";
import iconDownload from "../../../assets/icons/icon-download.svg";

function FormatoSolicitud() {
  return (
    <div className="contenerdor-FSolicitud">
      <div className="estructura-cabezera-principal">
        <div className="cabezera-secundaria">
          <h1>FORMATO DE SOLICITUD DE PRÁCTICAS PRE PROFESIONALES</h1>
          <p>/public</p>
        </div>

        <button className="button-download">
          {" "}
          <a
            className="link-down"
            href="https://drive.google.com/u/0/uc?id=1UrMTccVJ6-K0Pa4SsqRZp7FbqujjzrBK&export=download"
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
            src="https://drive.google.com/file/d/1UrMTccVJ6-K0Pa4SsqRZp7FbqujjzrBK/preview"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FormatoSolicitud;
