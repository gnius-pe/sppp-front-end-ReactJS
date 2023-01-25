import React from "react";
import "./bodyPage.css";
function BodyPage() {
  return (
    <div className="body-page-public">
      <article className="article-welcome-information">
        <h1 className="title-article">Practicas Pre-profesionales</h1>
        <p className="text-information-ppp">
          Es una actividad curricular obligatoria e individual que debes
          realizar en una organizacion en areas afines a tu carrera profesional,
          esta se realiza a partir del OCTAVO cilo academico o haber aprobado un
          minimo de 154 creditos. Las practicas desarrolladas antes del OCTAVO
          ciclo serán consideradas como prácticas extra curriculares, las cuales
          no serán validas como requisito para obtener el bachiller.
        </p>
      </article>
      <div className="container-lineas-ppp">
        <aside className="linea-ppp-style">
          <h2 className="title-line-especiality-style">Software</h2>
          <p>linea de ...</p>
        </aside>
        <aside className="linea-ppp-style">
          <h2 className="title-line-especiality-style">redes</h2>
          <p>linea de ...</p>
        </aside>
        <aside className="linea-ppp-style">
          <h2 className="title-line-especiality-style">Sistemas de informacion</h2>
          <p>linea de ...</p>
        </aside>
      </div>
    </div>
  );
}

export default BodyPage;
