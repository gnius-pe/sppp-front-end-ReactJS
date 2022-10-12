import React from "react";
import NavbarPracticante from "./componentPracticante/NavbarPracticante";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePracticante from "./componentPracticante/HomePracticante";

function PresentacionUser() {
  return (
    <div>
      <NavbarPracticante />
      <Routes>
        <Route path="/home" element={<HomePracticante />}></Route>
        <Route path="/reglamento-ppp" element={<div>reglamento </div>}></Route>
        <Route path="/organigrama-ppp" element={<div>organigrama</div>}></Route>
        <Route
          path="/formato-solicitud"
          element={<div>Formato de solicitud</div>}
        ></Route>
        <Route
          path="/formato-aceptacion"
          element={<div>formato de aceptacion</div>}
        ></Route>
        <Route path="/formato-f1" element={<div>formato F1</div>}></Route>
        <Route
          path="/tecnologia-informacion"
          element={<div>Tecnologia de la informacion</div>}
        ></Route>
        <Route
          path="/sistema-informacion"
          element={<div>Sistema de informacion</div>}
        ></Route>
        <Route
          path="/ingenieria-software"
          element={<div>Ingenieria de software</div>}
        ></Route>
        <Route path="/mi-practica" element={<div>Mi practica</div>}></Route>
        <Route path="/mi-avance" element={<div>Mi avance</div>}></Route>
        <Route
          path="/estructura-informe-final"
          element={<div>Estructura del informe</div>}
        ></Route>
      </Routes>
    </div>
  );
}

export default PresentacionUser;
