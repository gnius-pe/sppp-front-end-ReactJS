import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "../../page/publicLoginPage/style-page/Login.css";
import ContentImageLogin from "../../components/ContentImageLogin";
import ModalLogin from "./ModalLogin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ModalRegistro from "./ModalRegistro";

function Login() {
  const [estateContet, setEstateContet] = useState(true);
  const [stateModal, setstateModal] = useState(false);
  const [stateModalRegistro, setStateModalRegistro] = useState(false);

  const ingresarUsuario = () => {
    if (stateModal == true) {
      setstateModal(false);
    } else {
      setstateModal(true);
    }
  };

  const closeModalLogin = () => {
    if (stateModal == true) {
      setstateModal(false);
    } else {
      setstateModal(true);
    }
  };

  const closeModalRegistro = () => {
    if (stateModalRegistro == true) {
      setStateModalRegistro(false);
    } else {
      setStateModalRegistro(true);
    }
  };

  const openRegistro = () => {
    if (stateModalRegistro == true) {
      setStateModalRegistro(false);
    } else {
      setStateModalRegistro(true);
    }
  };

  return (
    <div className="container-login">
      <Navbar openModal={ingresarUsuario} openModalRegistro={openRegistro} />
      <ModalLogin stateModal={stateModal} handlerCLose={closeModalLogin} />
      <ModalRegistro
        stateModalRegistro={stateModalRegistro}
        handlerCLoseRegitro={closeModalRegistro}
      ></ModalRegistro>
      <Routes>
        <Route
          path="/"
          element={<ContentImageLogin stateContet={estateContet} />}
        />
        <Route path="/reglamento-ppp" element={<div>reglamento </div>} />
        <Route path="/organigrama-ppp" element={<div>organigrama</div>} />
        <Route
          path="/formato-solicitud"
          element={<div>Formato de solicitud</div>}
        />
        <Route
          path="/formato-aceptacion"
          element={<div>formato de aceptacion</div>}
        />
        <Route path="/formato-f1" element={<div>formato F1</div>} />
        <Route
          path="/tecnologia-informacion"
          element={<div>Tecnologia de la informacion</div>}
        />
        <Route
          path="/sistema-informacion"
          element={<div>Sistema de informacion</div>}
        />
        <Route
          path="/ingenieria-software"
          element={<div>Ingenieria de software</div>}
        />
        <Route
          path="/estructura-informe-final"
          element={<div>Estructura del informe</div>}
        />
      </Routes>
    </div>
  );
}

export default Login;
