import iconlogin01 from "../assets/img/portada01.jpg";
import React from "react";
import "../style-components/ContentImageLogin.css";
import iconatras from "../assets/icon-button/flecha-atras.svg"
import iconadelante from "../assets/icon-button/fecha-adelante.svg"

function ContentImageLogin({ estateContet }) {
  return (

    
    <div className={`contenido ${estateContet ? "" : "traslation-element"}`}>

      <div className="slider-container">
        <div className="slider position"></div>
      </div>
      
    
      
    </div>
  );
}

export default ContentImageLogin;
