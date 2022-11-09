import React from "react";
import Header from "../components/Header/Header";
import Edit from "../components/Edit/Edit";
import Erro from "../components/Erro/Erro";

const EditCRM: React.FC = () => {
  const usuario_logado = localStorage.getItem("usuario-logado");
  const versao_crm = localStorage.getItem("versao-crm");
  const id_crm = localStorage.getItem("id-crm");

  return (
    <>
      {usuario_logado === null ? (
        <Erro
          mensagem="Você precisa estar logado para navegar"
          pagina="/"
        ></Erro>
      ) : (
        <>
          {id_crm === null && versao_crm === null ? (
            <Erro
              mensagem="Primeiro selecione uma CRM, para depois editá-la"
              pagina="/home"
            ></Erro>
          ) : (
            <>
              <Header></Header>
              <Edit></Edit>
            </>
          )}
        </>
      )}
    </>
  );
};

export default EditCRM;
