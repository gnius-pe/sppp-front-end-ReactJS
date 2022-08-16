import React, { useState } from "react";
import Header from "../components/Header";
import "../style-page/Login.css";
import ContentImageLogin from "../components/ContentImageLogin";

function Login() {
  const [estateContet, setEstateContet] = useState(true);
  return (
    <div className="container-login">
      <Header setEstateContet={setEstateContet} />
      <ContentImageLogin estateContet={estateContet} />
    </div>
  );
}

export default Login;
