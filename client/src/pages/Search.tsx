import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Erro from "../components/Erro/Erro";

const Home: React.FC = () => {
  const usuario_logado = localStorage.getItem("usuario-logado");
  const pesquisa = localStorage.getItem("pesquisa");
  const data_inicio = localStorage.getItem("data-inicio");
  const data_arq = localStorage.getItem("data-arq");

  return (
    <>
      {usuario_logado === null ? (
        <Erro
          mensagem="Você precisa estar logado para navegar"
          pagina="/"
        ></Erro>
      ) : (
        <>
          {pesquisa === null && data_inicio === null && data_arq === null ? (
            <Erro
              mensagem="Por favor faça uma pesquisa para acessar"
              pagina="/home"
            ></Erro>
          ) : (
            <>
              <Header></Header>
              <Search></Search>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
