import React from "react";
import Header from "../components/Header/Header";
import User from "../components/User/User";
import Erro from "../components/Erro/Erro";

const EditUser: React.FC = () => {
  const usuario_logado = localStorage.getItem("usuario-logado");

  return (
    <>
      {usuario_logado === null ? (
        <>
          <Erro
            mensagem="Você precisa estar logado para navegar"
            pagina="/"
          ></Erro>
        </>
      ) : (
        <>
          <Header></Header>
          <User></User>
        </>
      )}
    </>
  );
};

export default EditUser;
