/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Accordion from "../Accordion/Accordion";
import SearchStyled from "./SearchStyled";
import { useEffect, useState } from "react";
import axios from "axios";

const Search: React.FC = () => {
  const [listCRMs, setListCRMs] = useState();

  useEffect(() => {
    let pesquisa = localStorage.getItem("pesquisa");
    if (localStorage.getItem("pesquisa") !== null) {
      if (!isNaN(Number(pesquisa))) {
        axios
          .post("http://localhost:3001/getSearchCRMs", { pesquisa: pesquisa })
          .then((response) => {
            setListCRMs(response.data[0]);
          });
      } else {
        axios
          .post("http://localhost:3001/getSearchName", { pesquisa: pesquisa })
          .then((response) => {
            setListCRMs(response.data[0]);
          });
      }
    } else {
      let data_inicio = localStorage.getItem("data-inicio");
      if (localStorage.getItem("data-inicio") === null) {
        let data_arq = localStorage.getItem("data-arq");
        axios
          .post("http://localhost:3001/getSearchDateArq", {
            pesquisa: data_arq,
          })
          .then((response) => {
            setListCRMs(response.data[0]);
          });
      } else {
        axios
          .post("http://localhost:3001/getSearchDate", {
            pesquisa: data_inicio,
          })
          .then((response) => {
            setListCRMs(response.data[0]);
          });
      }
    }
  }, []);

  let lista: any[] = [];
  if (listCRMs == null) {
    lista = [];
  } else {
    lista = listCRMs;
  }

  return (
    <SearchStyled>
      <main>
        <section className="container-fluid">
          <div className="row mt-3">
            <div className="col d-flex justify-content-center">
              <div className="div-form">
                <section className="container-fluid d-flex flex-column justify-content-between">
                  <div className="row">
                    <div className="container-fluid">
                      <div className="row mt-4 ms-3 me-5 pe-1 div-titulo-tabela">
                        <div className="col-1 titulo-tabela">Status</div>
                        <div className="col-2 ps-4 titulo-tabela">Nº CRM</div>
                        <div className="col-3 ps-4 titulo-tabela">
                          Responsável
                        </div>
                        <div className="col-3 ps-3 titulo-tabela">
                          Necessidade
                        </div>
                        <div className="col-1 titulo-tabela">Versão</div>
                        <div className="col-2 titulo-tabela">Complexidade</div>
                      </div>
                      <div className="row mt-2 mx-0">
                        <div className="col">
                          <section className="container-fluid px-0 tabela">
                            {lista.map((value) => (
                              <Accordion
                                id={value.id}
                                versao_crm={value.versao_crm}
                                colaborador_setor={value.colaborador_setor}
                                colaborador_id={value.colaborador_id}
                                descricao={value.descricao}
                                necessidade={value.necessidade}
                                impacto={value.impacto}
                                objetivo={value.objetivo}
                                justificativa={value.justificativa}
                                alternativas={value.alternativas}
                                data_obrigatoriedade={
                                  value.data_obrigatoriedade
                                }
                                complexidade={value.complexidade}
                                impacto_ti={value.impacto_ti}
                                setores_envolvidos={value.setores_envolvidos}
                                sistemas_envolvidos={value.sistemas_envolvidos}
                                comportamento_offline={
                                  value.comportamento_offline
                                }
                                dependencia_outro_crm={
                                  value.dependencia_outro_crm
                                }
                                numero_crm_dependencia={
                                  value.numero_crm_dependencia
                                }
                                documento_anexo={value.documento_anexo}
                                nome_documento={value.nome_documento}
                                data_inicio={value.data_inicio}
                                data_arquivamento={value.data_arquivamento}
                                nome={value.nome}
                                telefone={value.telefone}
                                email={value.email}
                                foto_perfil={value.foto_perfil}
                              />
                            ))}
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 ms-3 me-3 pb-4">
                    <div className="col-10"></div>
                    <div className="col-2 titulo-tabela d-flex justify-content-between align-items-center">
                      <div className="paginas ms-2 ps-5">1-2 de 2</div>
                      <div className="d-flex gap-2">
                        <i className="fa-solid fa-angle-left"></i>
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SearchStyled>
  );
};

export default Search;
