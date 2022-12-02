import React from "react";
import "./style-page/ModalRegistro.css";
import closeModalRegistro from "../../assets/icon-button/close-2.svg";
import { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function ModalRegistro({ stateModalRegistro, handlerCLoseRegitro }) {

  const [nuevoAlumno, setNuevoAlumno] = useState({
       "nombre": "",
       "apellido": "",
       "email": "",
       "codigo": "",
       "direccionActual": "",
       "numeroCelular": "",
       "pasword": ""
     });

  const handleNuevoAlumno = () => {
    registraAlumno(nuevoAlumno);
  };

  async function registraAlumno(alumno){
    const rawResponse = await fetch('https://valued-sight-irc22.rj.r.appspot.com/api/beta/guardar/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alumno)
    });
    const content = await rawResponse.json();
    if(content){
      console.log("pasa")
      cookies.set("id", content.id, { path: "/practicante" });
      cookies.set("nombre", nuevoAlumno.nombre, { path: "/practicante" });
      cookies.set("apellido", nuevoAlumno.apellido, { path: "/practicante" });
      cookies.set("email", nuevoAlumno.email, { path: "/practicante" });
      cookies.set("codigo", nuevoAlumno.codigo, { path: "/practicante" });
      cookies.set("direccionActual", nuevoAlumno.direccionActual, {
        path: "/practicante",
      });
      cookies.set("numeroCelular", nuevoAlumno.numeroCelular, {
        path: "/practicante",
      });
      window.location.href = "/practicante/home";
    }else{
      console.log("no pasa")
    }
  };

  const ingresaNombre = (event) =>{
    nuevoAlumno.nombre = event.target.value;
  };

  const ingresaApellido  = (event) => {
    nuevoAlumno.apellido = event.target.value;
  };

  const ingresaCorreo = (event) => {
    nuevoAlumno.email = event.target.value;
  };

  const ingresaCodigo = (event) => {
    nuevoAlumno.codigo = event.target.value;
  };

  const ingresaDomicilio = (event) => {
    nuevoAlumno.direccionActual = event.target.value;
  };

  const ingresaNumeroCelular = (event) => {
      
      if(event.target.value.length < 10){
        nuevoAlumno.numeroCelular = event.target.value.slice(0,10);
        console.log(event.target.value)
      }else{
        alert("Numero maximo 9 digitos")
      }
  };

  const ingresaPassword = (event) => {
    nuevoAlumno.pasword = event.target.value;    
  };

  return (
    <div className={`contenedor ${stateModalRegistro ? "openMostrar" : ""}`}>
      <div className="contenedor-inputs">
        <div className="contenedor-boton-close">
          <button className="close-modal" onClick={handlerCLoseRegitro}>
            <img className="btn-img-close" src={closeModalRegistro} alt="" />
          </button>
        </div>
        <div className="titulo-modal">
          <h1 className="h1-titutlo">Registrate</h1>
          <p className="p-sub-informacion">Es rapido y sencillo</p>
        </div>
        <form className="form-inputs" action="">
          <p className="estilo-generico-elemento">
            <input
              className="input-nombre estilo-input-general"
              type="text"
              placeholder="Nombre"
              onChange={ingresaNombre}
            />
            <input
              className="input-apellido estilo-input-general"
              type="text"
              placeholder="Apellidos"
              onChange={ingresaApellido}
            ></input>
          </p>
          <div className="estilo-correo">
            <p className="margin-correo estilo-generico-elemento">
              <input
                className="input-correo estilo-input-general"
                type="text"
                placeholder="Correo Institucional"
                onChange={ingresaCorreo}
              />
            </p>
            <p className="ejemplo-correo">
              Ejemplo: alumno.apellido@unas.edu.pe
            </p>
          </div>
          <p className="estilo-generico-elemento estilo-duo">
            <input
              type="text"
              className="input-codigo estilo-input-general"
              placeholder="Codigo : 0020210302"
              onChange={ingresaCodigo}
            />

            <input
              type="text"
              className="input-direccion estilo-input-general"
              placeholder="Domicilio Actual"
              onChange={ingresaDomicilio}
            />
          </p>
          <p className="estilo-generico-elemento">
            <input
              type="text"
              className="input-numero estilo-input-general"
              placeholder="Numero Celular : 987543321"
              onChange={ingresaNumeroCelular}
              
            />
            <input
              type="password"
              className="input-password estilo-input-general"
              placeholder="Contraseña : solo 8 caracteres"
              onChange={ingresaPassword}
            />
          </p>
        </form>
        <div className="pie-modal">
          <button className="boton-registrar" onClick={handleNuevoAlumno}>REGISTRAR</button>
        </div>
      </div>
    </div>
  );
}
export default ModalRegistro;
