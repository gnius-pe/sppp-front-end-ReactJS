import "./App.css";
import Login from "./page/publicLoginPage/Login.jsx";
import Practicante from "./page/privatePage/practicantePage/Practicante";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [inputUsuario, setInputUsuario] = useState({
    email: "",
    password: "",
    usuarioEncontrado: false,
  });

  const loginUser = () => {
    validaUsuarioAlumno(inputUsuario);
  };

  async function validaUsuarioAlumno(alumnoPorvalidar) {
    const request = await fetch(
      `https://valued-sight-irc22.rj.r.appspot.com/api/beta/alumno/sesion/${alumnoPorvalidar.email}/${alumnoPorvalidar.password}`,
      {
        method: "GET",
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

  return (
    <Router className="App">
      <Routes>
        <Route
          path="/*"
          index
          element={
            <div>
              <Login
                ingresaSistemaAlumno={loginUser}
                consultaUsuario={inputUsuario}
              />
            </div>
          }
        ></Route>
        <Route path="/practicante/*" element={<Practicante />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
