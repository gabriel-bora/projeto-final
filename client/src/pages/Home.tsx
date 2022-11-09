import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Erro from "../components/Erro/Erro";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Home: React.FC = () => {
  const usuario_logado = localStorage.getItem("usuario-logado");
  const [setor, setSetor] = useState<string>();

  useEffect(() => {
    axios
      .post("http://localhost:3001/getUser", { usuario: usuario_logado })
      .then((response) => {
        setSetor(response.data.setor);
      });
  }, []);

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
          {setor === "Sem setor" ? (
            <Erro
              mensagem="Para navegar é necessário atualizar as informações de usuário"
              pagina="/edituser"
            ></Erro>
          ) : (
            <>
              <Header></Header>
              <Dashboard></Dashboard>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
