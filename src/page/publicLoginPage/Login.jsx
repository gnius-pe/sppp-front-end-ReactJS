import React, { useState } from "react";
import Header from "../../components/Navbar";
import "../../page/publicLoginPage/style-page/Login.css";
import ContentImageLogin from "../../components/ContentImageLogin";
import ModalLogin from "./ModalLogin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ModalRegistro from "./ModalRegistro";

function Login() {
  const [estateContet, setEstateContet] = useState(true);
  const [stateModal, setstateModal] = useState(false);
  const [stateModalRegistro, setStateModalRegistro] = useState (true);

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
    console.log(stateModalRegistro)
  };



  return (
    <div className="container-login">
      <Header setEstateContet={setEstateContet} openModal={ingresarUsuario} openModalRegistro={openRegistro}/>
      <ContentImageLogin stateContet={estateContet} />
      <ModalLogin stateModal={stateModal} handlerCLose={closeModalLogin} />
      <ModalRegistro stateModalRegistro={stateModalRegistro} handlerCLoseRegitro={closeModalRegistro}/>
    </div>
  );
}

export default Login;
