import "./App.css";
import Practicante from "./page/privatePage/practicantePage/Practicante";
import PagePublic from "./infrastructure/page/public/page-public/PagePublic";

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
    <Router className="app">
      <Routes>
        <Route
          path="/*"
          index
          element={
            <div className="container-page-public">
              <PagePublic />
            </div>
          }
        ></Route>
        <Route path="/practicante/*" element={<Practicante />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
