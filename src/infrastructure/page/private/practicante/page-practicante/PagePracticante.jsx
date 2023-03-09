import React from "react";
import BodyPrivatePracticante from "../body-alumno/BodyPrivatepracticante";
import HeadBoardPrivate from "../headboard-alumno/HeadBoardPrivate";
import "./PagePracticante.css"

function PagePracticante() {
  return (
    <div className="page-practicante-private">
      <HeadBoardPrivate/>
      <BodyPrivatePracticante />
    </div>
  );
}

export default PagePracticante;
