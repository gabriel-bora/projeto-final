/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import ErroStyled from "./ErroStyled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

interface Props {
  mensagem: string;
  pagina: string;
}

const Erro: React.FC<Props> = ({ mensagem, pagina }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(`${pagina}`);
    }, 3500);
  });

  const usuario_logado = localStorage.getItem("usuario-logado");

  return (
    <ErroStyled>
      {usuario_logado === null ? <header></header> : <Header></Header>}
      <main>
        <section className="container-fluid">
          <div className="row mt-3">
            <div className="col d-flex justify-content-center">
              <div className="div-form">
                <section className="container-fluid d-flex flex-column justify-content-between">
                  <div className="row">
                    <div className="container-fluid d-flex justify-content-center mt-5">
                      <div className="text-center">
                        <h2>{mensagem}</h2>
                        <h4>Redirecionando para a página anterior...</h4>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ErroStyled>
  );
};

export default Erro;
