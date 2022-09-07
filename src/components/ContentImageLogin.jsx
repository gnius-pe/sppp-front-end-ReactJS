import React from "react";
import "../style-components/ContentImageLogin.css";

function ContentImageLogin({ stateContet }) {
  return (
    <div className="slider-container">
      <div
        className={`slider position ${stateContet ? "" : "tono-image"}`}
      ></div>
    </div>
  );
}

export default ContentImageLogin;
