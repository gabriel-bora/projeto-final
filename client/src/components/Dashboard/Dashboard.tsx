/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Accordion from "../Accordion/Accordion";
import DashboardStyled from "./DashboardStyled";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [listCRMs, setListCRMs] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/getAllCRMs").then((response) => {
      setListCRMs(response.data[0]);
    });
    localStorage.removeItem("pesquisa");
    localStorage.removeItem("data-arq");
    localStorage.removeItem("data-inicio");
    localStorage.removeItem("versao-crm");
    localStorage.removeItem("id-crm");
  }, []);

  let listaCRM: any[] = [];
  if (listCRMs == null) {
    listaCRM = [];
  } else {
    listaCRM = listCRMs;
  }

  let lista = listaCRM.sort((a, b) => a.id - b.id);

  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(lista.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currenItens = lista.slice(startIndex, endIndex);

  return (
    <DashboardStyled>
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
                            {currenItens.map((value) => (
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
                      <div className="paginas ms-2 ps-5">
                        {startIndex + 1}-
                        {endIndex < lista.length ? endIndex : lista.length} de{" "}
                        {lista.length}
                      </div>
                      <div className="d-flex gap-2">
                        {currentPage === 0 ? (
                          <button className="pages" disabled>
                            <i className="fa-solid fa-angle-left desabilitado"></i>
                          </button>
                        ) : (
                          <button
                            className="pages"
                            onClick={() => setCurrentPage(currentPage - 1)}
                          >
                            <i className="fa-solid fa-angle-left habilitado"></i>
                          </button>
                        )}
                        {currentPage === pages - 1 ? (
                          <button className="pages" disabled>
                            <i className="fa-solid fa-angle-right desabilitado"></i>
                          </button>
                        ) : (
                          <button
                            className="pages"
                            onClick={() => setCurrentPage(currentPage + 1)}
                          >
                            <i className="fa-solid fa-angle-right habilitado"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DashboardStyled>
  );
};

export default Dashboard;
