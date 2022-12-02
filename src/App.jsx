import "./App.css";
import Login from "./page/publicLoginPage/Login.jsx";
import Practicante from "./page/privatePage/practicantePage/Practicante";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
} from "react-router-dom";


function App() {


  return (
    <Router className="App">
      <Routes>
        <Route
          path="/*"
          index
          element={
            <div>
              <Login
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
