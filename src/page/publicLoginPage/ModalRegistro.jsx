import React from "react";
import "./style-page/ModalRegistro.css"
function ModalRegistro({stateModalRegistro,handlerCLoseRegitro}){
    return (
        <div className={`contenedor ${stateModalRegistro?"openMostrar":""}`}>
            <div className="contenedor-inputs">
                <button className="close" onClick={handlerCLoseRegitro}> X </button>
                <h1 className="title-modal">Registrate</h1>
                <span>Es rapido y facil...</span>
                <br/>
            <div />
            <div className="cont-nombreApellido">
                <label htmlFor="">
                    <input type="" placeholder="Nombres" className="Nombres-modal"/>
                </label>
                <label htmlFor="">
                    <input type="text" placeholder="Apellidos" className="Apellidos-modal"/> 
                </label>
            </div>
            <div className="cont-correo">
                <label htmlFor="">
                    <input type="texto" placeholder="Correo Institucional" className="Correo-modal"/>
                    <br/>
                    <span>Ejemplo:alumno.apellido@unas.edu.pe</span>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    <input type="text" placeholder="Codigo" className="codigo-modal"/> 
                    <br/>
                    <span>Solo se aceptan numeros</span>
                    <br/>
                </label>
                <label htmlFor="">
                    <input type="text" placeholder="Domicilio" className="domicilio-modal"/> 
                    <br/>
                    <span>Direccion actual</span>
                </label> 
            </div>
            </div>
        </div>
    );
}
export default ModalRegistro;