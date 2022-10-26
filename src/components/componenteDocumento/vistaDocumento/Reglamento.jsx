import React from "react";
import "../styleVistaDocumento/Reglamento.css";
import iconDownload from "../../../assets/icons/icon-download.svg";
function Reglamento() {
  return (
    <div className="contenedor-reglamento">
      <div className="reglamento-cabezera-principal">
        <div className="cabezera-secundaria">
          <h1>REGLAMENTO DE PRÁCTICAS PRE PROFESIONALES</h1>
          <p>/public</p>
        </div>

        <button className="button-download">
          {" "}
          <a
            className="link-down"
            href="https://drive.google.com/u/0/uc?id=1aGhbgNf6wT3OAUZKyx-gVVxQxl_7Bv54&export=download"
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
            src="https://drive.google.com/file/d/1aGhbgNf6wT3OAUZKyx-gVVxQxl_7Bv54/preview"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Reglamento;
