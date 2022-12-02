import React from "react";
import "../../page/publicLoginPage/style-page/ModalLogin.css";
import iconUserDefault from "../../assets/icons/icon-user-default.svg";
import iconButonClose from "../../assets/icon-button/close-modal.svg";
import iconUserCorreo from "../../assets/icons/icon-user.svg";
import iconPassword from "../../assets/icons/icon-password.svg";
import iconTipousuario from "../../assets/icons/icon-tipousuario.svg";
import iconDespliegue from "../../assets/icons/icon-despliegue.svg";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function ModalLogin({ stateModal, handlerCLose }) {
  const [user, setUser] = useState(null);
  const [inputUsuario, setInputUsuario] = useState({
    email: "",
    password: "",
    usuarioEncontrado: false,
  });

  const ingresarSistema = () => {
    validaUsuarioAlumno(inputUsuario);
  };

  async function validaUsuarioAlumno(alumnoPorvalidar) {
    const request = await fetch(
      `https://valued-sight-irc22.rj.r.appspot.com/api/beta/alumno/sesion/${inputUsuario.email}/${inputUsuario.password}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const usuario = await request.json();
    if (usuario.email != null) {
      setUser(usuario);
      inputUsuario.usuarioEncontrado = true;
      console.log(user);
      cookies.set("id", usuario.id, { path: "/practicante" });
      cookies.set("nombre", usuario.nombre, { path: "/practicante" });
      cookies.set("apellido", usuario.apellido, { path: "/practicante" });
      cookies.set("email", usuario.email, { path: "/practicante" });
      cookies.set("codigo", usuario.codigo, { path: "/practicante" });
      cookies.set("direccionActual", usuario.direccionActual, {
        path: "/practicante",
      });
      cookies.set("numeroCelular", usuario.numeroCelular, {
        path: "/practicante",
      });
      window.location.href = "/practicante/home";
    } else {
      alert("usuario no encontrado");
    }
  }

  const ingresaCorreo = (event) => {
    console.log(event.target.value);
    inputUsuario.email = event.target.value;
  };

  const ingresaPassword = (event) => {
    inputUsuario.password = event.target.value;
  };

  return (
    <main className={`container-modal ${stateModal ? "open-modal" : ""}`}>
      <div className="modal">
        <div className="info-modal">
          <img className="img-user-default" src={iconUserDefault} alt="" />
          <h3>Iniciar Sesion</h3>
          <p>Sistema de Gestión de Prácticas Pre Profesionaleas</p>
          {/* Your code */}
          <div className="property-data-login">
            <img className="user-icon icon" src={iconUserCorreo} alt="" />
            <input
              className="login-input"
              type="text"
              name="correo"
              id="correo"
              placeholder="Correo institucional"
              onChange={ingresaCorreo}
            />
          </div>

          <div className="property-data-login">
            <img className="password-icon icon" src={iconPassword} alt="" />
            <input
              className="login-input"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              onChange={ingresaPassword}
            />
          </div>

          <div className="property-data-login">
            <img
              className="tipousuario-icon icon"
              src={iconTipousuario}
              alt=""
            />
            <input
              className="login-input style-type-user"
              type="text"
              name="type-user"
              id="type-user"
              placeholder="Tipo de Usuario"
            />
            <img className="despliegue-icon icon" src={iconDespliegue} alt="" />
          </div>

          <div className="property-data-user">
            <button
              className="btn-ingresar"
              onClick={ingresarSistema}
              href="practicante/home"
            >
              Ingresar
            </button>
          </div>
          {/* end your code :) */}
        </div>
        <button className="buton-close" onClick={handlerCLose}>
          <img className="close-icon" src={iconButonClose} alt="" />
        </button>
      </div>
    </main>
  );
}
export default ModalLogin;
