import iconlogin from "../assets/img/portada.jpg";
import React from "react";
import "../style-components/ContentImageLogin.css";

function ContentImageLogin({ estateContet }) {
  return (
    <div className={`contenido ${estateContet ? "" : "traslation-element"}`}>

      <img className="Portada" src={iconlogin} alt="Portada UNAS" />
    </div>
  );
}

export default ContentImageLogin;
