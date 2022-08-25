import React, { useState } from "react";
import Header from "../components/Header";
import "../style-page/Login.css";
import ContentImageLogin from "../components/ContentImageLogin";
import ModalLogin from "./ModalLogin";

function Login() {
  const [estateContet, setEstateContet] = useState(true);
  const [stateModal, setstateModal] = useState(false);

  const ingresarUsuario = () => {
    if (stateModal == true) {
      console.log("entro");
      setstateModal(false);
    } else {
      setstateModal(true);
    }
  };

  const closeModalLogin = () => {
    if (stateModal == true) {
      console.log("entro");
      setstateModal(false);
    } else {
      setstateModal(true);
    }
  };

  return (
    <div className="container-login">
      <Header setEstateContet={setEstateContet} openModal={ingresarUsuario} />
      <ContentImageLogin estateContet={estateContet} />
      <ModalLogin stateModal={stateModal} handlerCLose={closeModalLogin} />
    </div>
  );
}

export default Login;
