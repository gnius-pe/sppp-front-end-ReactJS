import React from "react";
import "./bodyPage.css";
import imgSoftware from "../../../../assets/img/lineas-investigacion/ingenieria-software-img.jpg";
import imgRedes from "../../../../assets/img/lineas-investigacion/redes-telecomunicaiones.jpg";
import imgSisInformacion from "../../../../assets/img/lineas-investigacion/sistemas-informacion-img.jpg";

import { NavLink } from "react-router-dom";

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
          <div className="container-img-sofware">
            <img className="img-line-ppp" src={imgSoftware} alt="" />
          </div>
          <div className="container-especiality-software">
            <h2 className="title-line-especiality-style text-spceciality-public">
              Ingeniería de Software
            </h2>
            <p className="description-especiality-style text-spceciality-public">
              Objetivo: Promover, realizar y difundir principalmente
              investigación aplicada en ingeniería de software y computación en
              respuesta a necesidades teóricas y prácticas de los distintos
              sectores productivos dentro del ámbito de influencia de la
              Universidad Nacional Agraria de la Selva.
            </p>

            <p className="alternative-descrption-especiality text-spceciality-public">
              Objetivo: Promover, realizar y difundir principalmente
              investigación aplicada en ingeniería de software y computación
            </p>
            <NavLink to="/">
              <p className="nav-link-line-especiality text-spceciality-public">
                Saber mas{" "}
              </p>
            </NavLink>
          </div>
        </aside>
        <aside className="linea-ppp-style">
          <div className="container-img-sofware">
            <img className="img-line-ppp" src={imgRedes} alt="" />
          </div>
          <div className="container-especiality-software">
            <h2 className="title-line-especiality-style text-spceciality-public">
              Redes, Seguridad y Gestion TI
            </h2>
            <p className="description-especiality-style text-spceciality-public">
              Objetivo: Explorar, generar, innovar y gestionar plataformas de TI
              para el soporte y sostenibilidad de los sistemas información.
            </p>

            <p className="alternative-descrption-especiality text-spceciality-public">
              Objetivo: Explorar, generar, innovar y gestionar plataformas de TI
              .
            </p>
            <NavLink to="/">
              <p className="nav-link-line-especiality text-spceciality-public">
                Saber mas{" "}
              </p>
            </NavLink>
          </div>
        </aside>
        <aside className="linea-ppp-style">
          <div className="container-img-sofware">
            <img className="img-line-ppp" src={imgSisInformacion} alt="" />
          </div>
          <div className="container-especiality-software">
            <h2 className="title-line-especiality-style text-spceciality-public">
              Sistemas de informacion
            </h2>
            <p className="description-especiality-style text-spceciality-public">
              Objetivo: Explorar, generar, innovar y gestionar soluciones de SI
              para el soporte y sostenibilidad de los sistemas productivos,
              institucionales y organizacionales.
            </p>

            <p className="alternative-descrption-especiality text-spceciality-public">
              Objetivo: Explorar, generar, innovar y gestionar soluciones de SI
              
            </p>
            <NavLink to="/">
              <p className="nav-link-line-especiality text-spceciality-public">
                Saber mas{" "}
              </p>
            </NavLink>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BodyPage;
