import React, { useState } from "react";
import Header from "../../components/Navbar";
import "../../page/publicLoginPage/style-page/Login.css";
import ContentImageLogin from "../../components/ContentImageLogin";
import ModalLogin from "./ModalLogin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Login() {
  const [estateContet, setEstateContet] = useState(true);
  const [stateModal, setstateModal] = useState(false);

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

  return (
    <div className="container-login">
      <Header setEstateContet={setEstateContet} openModal={ingresarUsuario} />
      <ContentImageLogin stateContet={estateContet} />
      <ModalLogin stateModal={stateModal} handlerCLose={closeModalLogin} />
    </div>
  );
}

export default Login;
