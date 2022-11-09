import React from "react";
import Login from "../components/Login/Login";
import ErroLogin from "../components/ErroLogin/ErroLogin";

const Index: React.FC = () => {
  const usuario_logado = localStorage.getItem("usuario-logado");

  return (
    <>{usuario_logado !== null ? <ErroLogin></ErroLogin> : <Login></Login>}</>
  );
};

export default Index;
