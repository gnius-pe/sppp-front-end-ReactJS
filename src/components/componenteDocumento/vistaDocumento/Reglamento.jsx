import React from "react";
import "../styleVistaDocumento/Reglamento.css";
function Reglamento() {
  return (
    <div className="contenedor-reglamento">
      <div>
        <h1>Reg</h1>
        <p>/public</p>
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
