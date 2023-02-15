import React from "react";
import "./loginPagePublic.css";
import PortadaLogin from "../../../../assets/img/portada06.jpg";
import iconButonClose from "../../../../assets/icon-button/close-2.svg";
import avatarUserDefault from "../../../../assets/avatar-user/avatar-white.svg";
import avatarInput from "../../../../assets/icons/icon-user.svg";
import passwordImgInput from "../../../../assets/icons/icon-password.svg";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";

function LoginPagePublic({ handleCloseModalLogin, stateModal  }) {

  const navigate = useNavigate();

  const loginInSistem = () =>{
    //usar api de login
    //navigate("/practicante/hi")
  }
  
  return (
    <div
      className={`fondo-login-page ${stateModal ? "" : "close-modal-login"}`}
    >
      <div className="modal-login-page-public">
        <div className="port-login-public">
          <img className="img-modal-login-public" src={PortadaLogin} alt="" />
        </div>
        <div className="container-inputs-public">
          <div className="head-login">
            <button
              className="buton-close-login-public"
              onClick={handleCloseModalLogin}
            >
              <img src={iconButonClose} alt="" />
            </button>
          </div>
          <form className="form-inputs-public">
            <h1 className="title-modal-login style-presentacion-static">
              INICIAR SESSION
            </h1>
            <br />
            <img className="avatar-for-login" src={avatarUserDefault} alt="" />
            <br />
            <p className="style-presentacion-static">
              Es bueno verte nuevamente !{" "}
            </p>
            <br />
            <div className="container-inputs-email-password">
              <div className="container-style-inputs">
                <div className="container-img-input">
                  {" "}
                  <img src={avatarInput} alt="" />
                </div>
                <input
                  type="email"
                  className="input-email style-input-comun"
                  placeholder="Ingrese su correo"
                />
              </div>
              <br />
              <div className="container-style-inputs">
                <div className="container-img-input">
                  {" "}
                  <img src={passwordImgInput} alt="" />
                </div>
                <input
                  type="password"
                  className="input-password style-input-comun"
                  placeholder="Ingrese su contraseña"
                />
              </div>
            </div>
            <br />
            <button className="button-login" onClick={loginInSistem}>Login</button>
            <br />
            <NavLink to="/">¿Olvido su contraseñe?</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPagePublic;
