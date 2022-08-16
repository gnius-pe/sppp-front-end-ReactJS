import React from "react";
import "../style-components/ContentImageLogin.css";

function ContentImageLogin({ estateContet }) {
  return (
    <div className={`contenido ${estateContet ? "" : "traslation-element"}`}>
      <h1>Aqui es para las imagenes</h1>
    </div>
  );
}

export default ContentImageLogin;
