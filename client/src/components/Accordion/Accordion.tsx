/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AccordionStyled from "./AccordionStyled";
import UserAccept from "../UserAccept/UserAccept";
import * as moment from "moment";
import "moment/locale/pt-br";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Buffer } from "node:buffer";

interface DadosCRM {
  id: number;
  versao_crm: number;
  colaborador_setor: string;
  colaborador_id: string;
  descricao: string;
  necessidade: string;
  impacto: string;
  objetivo: string;
  justificativa: string;
  alternativas: string;
  data_obrigatoriedade: any;
  complexidade: number;
  impacto_ti: string;
  setores_envolvidos: string;
  sistemas_envolvidos: string;
  comportamento_offline: string;
  dependencia_outro_crm: boolean;
  numero_crm_dependencia: number;
  documento_anexo: string;
  nome_documento: string;
  data_inicio: any;
  data_arquivamento: any;
  nome: string;
  telefone: string;
  email: string;
  foto_perfil: string;
}

const Accordion: React.FC<DadosCRM> = ({
  id,
  versao_crm,
  colaborador_setor,
  colaborador_id,
  descricao,
  necessidade,
  impacto,
  objetivo,
  justificativa,
  alternativas,
  data_obrigatoriedade,
  complexidade,
  impacto_ti,
  setores_envolvidos,
  sistemas_envolvidos,
  comportamento_offline,
  dependencia_outro_crm,
  numero_crm_dependencia,
  documento_anexo,
  nome_documento,
  data_inicio,
  data_arquivamento,
  nome,
  telefone,
  email,
  foto_perfil,
}) => {
  const navigate = useNavigate();

  const [showRejeitar, setShowRejeitar] = useState(false);
  const handleCloseRejeitar = () => setShowRejeitar(false);
  const handleShowRejeitar = () => setShowRejeitar(true);

  const [showObjetivo, setShowObjetivo] = useState(false);
  const handleCloseObjetivo = () => setShowObjetivo(false);
  const handleShowObjetivo = () => setShowObjetivo(true);
  const objetivoFormatado = objetivo.substr(0, 680);

  const [showImpacto, setShowImpacto] = useState(false);
  const handleCloseImpacto = () => setShowImpacto(false);
  const handleShowImpacto = () => setShowImpacto(true);
  const impactoFormatado = impacto.substr(0, 680);

  const [showDescricao, setShowDescricao] = useState(false);
  const handleCloseDescricao = () => setShowDescricao(false);
  const handleShowDescricao = () => setShowDescricao(true);
  const descricaoFormatado = descricao.substr(0, 680);

  const [showJustificativa, setShowJustificativa] = useState(false);
  const handleCloseJustificativa = () => setShowJustificativa(false);
  const handleShowJustificativa = () => setShowJustificativa(true);
  const justificativaFormatado = justificativa.substr(0, 680);

  const [showAlternativas, setShowAlternativas] = useState(false);
  const handleCloseAlternativas = () => setShowAlternativas(false);
  const handleShowAlternativas = () => setShowAlternativas(true);
  let alternativasFormatado = "";
  if (alternativas !== null) {
    alternativasFormatado = alternativas.substr(0, 680);
  }

  const [showComportamento, setShowComportamento] = useState(false);
  const handleCloseComportamento = () => setShowComportamento(false);
  const handleShowComportamento = () => setShowComportamento(true);
  let comportamentoFormatado = "";
  if (comportamento_offline !== null) {
    comportamentoFormatado = comportamento_offline.substr(0, 280);
  }

  const [showImpactoTI, setShowImpactoTI] = useState(false);
  const handleCloseImpactoTI = () => setShowImpactoTI(false);
  const handleShowImpactoTI = () => setShowImpactoTI(true);
  let impactoTIFormatado = "";
  if (impacto_ti !== null) {
    impactoTIFormatado = impacto_ti.substr(0, 200);
  }

  const n = id.toLocaleString("en-US", {
    minimumIntegerDigits: 5,
    useGrouping: false,
  });

  const moment = require("moment");

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const hoje = moment(today).format("L");

  const data = moment(data_inicio).format("LL");
  const data2 = moment(data_inicio).format("L");

  let data_relativa = null;
  if (data2 == hoje) {
    data_relativa = "hoje";
  } else {
    data_relativa = moment(data_inicio).fromNow();
  }

  let data_obr = "";
  if (data_obrigatoriedade !== null) {
    data_obr = moment(data_obrigatoriedade).format("LL");
  }

  let data_arq = "";
  if (data_arquivamento !== null) {
    data_arq = moment(data_arquivamento).format("LL");
  }

  let listaSetores: string[] = [];
  if (setores_envolvidos !== null) {
    listaSetores = JSON.parse(setores_envolvidos);
  }

  let listaSistemas: string[] = [];
  if (sistemas_envolvidos !== null) {
    listaSistemas = JSON.parse(sistemas_envolvidos);
  }

  let listaArquivos: string[] = [];
  if (documento_anexo !== null) {
    listaArquivos = JSON.parse(documento_anexo);
  }

  let listaNomesArquivos: string[] = [];
  if (nome_documento !== null) {
    listaNomesArquivos = JSON.parse(nome_documento);
  }

  const [idUsuario, setIdUsuario] = useState<string>();
  const [setorUsuario, setSetorUsuario] = useState<string>();
  const [nomeUsuario, setNomeUsuario] = useState<string>();
  const [telefoneUsuario, setTelefoneUsuario] = useState<string>();
  const [emailUsuario, setEmailUsuario] = useState<string>();
  const [fotoUsuario, setFotoUsuario] = useState<string>();

  const [listaAceites, setListaAceites] = useState();

  const [justificativaRejeitar, setJustificativaRejeitar] = useState<string>();
  const [documento_anexoRejeitar, setDocumento_anexoRejeitar] = useState<
    string[]
  >([]);
  const [nomedocumentoRejeitar, setNomedocumentoRejeitar] = useState<string[]>(
    []
  );

  function convertFile(files: FileList | null, values: string | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setDocumento_anexoRejeitar(
          documento_anexoRejeitar?.concat(
            `data:${fileType};base64,${btoa(ev.target.result)}`
          )
        );
      };
    }
    if (values) {
      var filename = values.replace(/^.*\\/, "");
      setNomedocumentoRejeitar(nomedocumentoRejeitar?.concat(filename));
    }
  }

  function rejeitar(e: any) {
    e.preventDefault();
    if (justificativaRejeitar === undefined || justificativaRejeitar === "") {
      window.alert("Para rejeitar é necessário uma justificativa");
      return;
    } else {
      axios
        .post("http://localhost:3001/createAccept", {
          colaborador_id: idUsuario,
          colaborador_setor: setorUsuario,
          colaborador_nome: nomeUsuario,
          colaborador_telefone: telefoneUsuario,
          colaborador_email: emailUsuario,
          colaborador_foto: fotoUsuario,
          crm_id: id,
          crm_versao: versao_crm,
          aceite: "nao",
          justificativa: justificativaRejeitar,
          documento_justificativa: JSON.stringify(documento_anexoRejeitar),
          nome_documento_justificativa: JSON.stringify(nomedocumentoRejeitar),
        })
        .then((response) => {
          alert(response.data);
        });
      axios.post("http://localhost:3001/emailAccept", {
        usuario: nome,
        crm: n,
        versao: versao_crm,
        email: email,
        mensagem: "rejeitou",
      });
      window.location.reload();
    }
  }

  let listaAceites1: any[] = [];
  if (listaAceites !== undefined) {
    listaAceites1 = listaAceites;
  }

  let listaSetoresAceite: any[] = [];
  listaAceites1.map((value: any) =>
    listaSetoresAceite.push(value.colaborador_setor)
  );

  let diferenca = listaSetores.filter(function (element, index, array) {
    if (listaSetoresAceite.indexOf(element) == -1) return element;
  });

  const arquivar = () => {
    axios
      .post("http://localhost:3001/updateCRM", {
        id: id,
        versao_crm: versao_crm,
        data_arquivamento: today,
      })
      .then((response) => {
        alert(response.data);
      });
  };

  const aceitar = () => {
    axios
      .post("http://localhost:3001/createAccept", {
        colaborador_id: idUsuario,
        colaborador_setor: setorUsuario,
        colaborador_nome: nomeUsuario,
        colaborador_telefone: telefoneUsuario,
        colaborador_email: emailUsuario,
        colaborador_foto: fotoUsuario,
        crm_id: id,
        crm_versao: versao_crm,
        aceite: "sim",
      })
      .then((response) => {
        alert(response.data);
      });
    if (
      listaAceites1.every((v) => v.aceite === "sim") &&
      diferenca.length === 1 &&
      diferenca[0] === setorUsuario &&
      complexidade !== 0
    ) {
      arquivar();
    }
    axios.post("http://localhost:3001/emailAccept", {
      usuario: nomeUsuario,
      crm: n,
      versao: versao_crm,
      email: email,
      mensagem: "aceitou",
    });
    window.location.reload();
  };

  const [versaoMaxima, setVersaoMaxima] = useState<number>();

  useEffect(() => {
    let usuario = localStorage.getItem("usuario-logado");
    axios
      .post("http://localhost:3001/getUser", { usuario: usuario })
      .then((response: any) => {
        setIdUsuario(response.data.matricula);
        setSetorUsuario(response.data.setor);
        setNomeUsuario(response.data.nome);
        setTelefoneUsuario(response.data.telefone);
        setEmailUsuario(response.data.email);
        setFotoUsuario(response.data.foto_perfil);
      });
    axios
      .post("http://localhost:3001/getAccepts", {
        id: id,
        versao_crm: versao_crm,
      })
      .then((response: any) => {
        setListaAceites(response.data);
      });
    axios
      .post("http://localhost:3001/getMaxVersion", {
        id: id,
      })
      .then((response: any) => {
        setVersaoMaxima(response.data[0][0].valor);
      });
  }, []);

  let status: string = "";
  if (
    (diferenca.length === 0 && listaAceites1.some((v) => v.aceite === "nao")) ||
    versaoMaxima! > versao_crm
  ) {
    status = "rejeitada";
  } else if (diferenca.length === 0) {
    status = "arquivada";
  } else {
    status = "pendente";
  }

  function switchComplexidade(valor: number) {
    switch (valor) {
      case 1:
        return <div className="complexidade-muito-baixa">MUITO BAIXA</div>;
      case 2:
        return <div className="complexidade-baixa">BAIXA</div>;
      case 3:
        return <div className="complexidade-media">MÉDIA</div>;
      case 4:
        return <div className="complexidade-alta">ALTA</div>;
      case 5:
        return <div className="complexidade-muito-alta">MUITO ALTA</div>;
      default:
        return <div className="complexidade-zero">. . .</div>;
    }
  }

  function switchStatus(status: string) {
    switch (status) {
      case "rejeitada":
        return <i className="fa-solid fa-circle-xmark reject-status"></i>;
      case "arquivada":
        return <i className="fa-solid fa-circle-check check-status"></i>;
      case "pendente":
        return (
          <i className="fa-solid fa-circle pending-status">
            <i className="fa-solid fa-ellipsis pending-status-dots"></i>
          </i>
        );
      default:
        return null;
    }
  }

  const [complexidadeUpdate, setComplexidadeUpdate] = useState<number>();
  const [impactoTI, setImpactoTI] = useState<string>();

  function salvarDetalhesTI() {
    axios
      .post("http://localhost:3001/updateCRM_TI", {
        id: id,
        versao_crm: versao_crm,
        complexidade: complexidadeUpdate,
        impacto_ti: impactoTI,
      })
      .then((response) => {
        alert(response.data);
      });
    if (diferenca.length === 0 && complexidadeUpdate !== 0) {
      arquivar();
    }
    window.location.reload();
  }

  function editar_crm() {
    localStorage.setItem("id-crm", JSON.stringify(id));
    localStorage.setItem("versao-crm", JSON.stringify(versao_crm));
    navigate("/editcrm");
  }

  function search() {
    localStorage.setItem("pesquisa", JSON.stringify(id));
    localStorage.removeItem("data-arq");
    localStorage.removeItem("data-inicio");
    if (
      window.location.href ===
      "http://localhost:3000/projeto-final-crm/searchcrm"
    ) {
      window.location.reload();
    } else {
      navigate("/searchcrm");
    }
  }

  function excluir_arquivo(i: number, e: any) {
    e.preventDefault();
    setDocumento_anexoRejeitar((prev) =>
      prev.filter((item) => prev.indexOf(item) !== i)
    );
    setNomedocumentoRejeitar((prev) =>
      prev.filter((item) => prev.indexOf(item) !== i)
    );
  }

  return (
    <AccordionStyled foto_perfil={foto_perfil}>
      <div className="accordion my-2" id="accordionExample">
        <h2 className="accordion-header" id={"heading" + id + versao_crm}></h2>
        <h2
          className="accordion-header"
          id={"panelsStayOpen-heading" + id + versao_crm}
        >
          <button
            className="accordion-button collapsed botaoAccordion d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#panelsStayOpen-collapse" + id + versao_crm}
            aria-expanded="false"
            aria-controls={"panelsStayOpen-collapse" + id + versao_crm}
          >
            <div className="container-fluid info-crm-fechado">
              <div className="row d-flex align-items-center">
                <div className="col-1 p-1">{switchStatus(status)}</div>
                <div className="col-2">
                  <div className="texto-bold">{n}</div>
                  <div className="texto-light pt-1">
                    Atualizada {data_relativa}
                  </div>
                </div>
                <div className="col-3 d-flex">
                  <div>
                    <div className="avatar"></div>
                  </div>
                  <div className="ps-2">
                    <div className="texto-bold">
                      {nome} &#40;{colaborador_id}&#41;
                    </div>
                    <div className="texto-light pt-1 ps-1">{email}</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="texto-bold">{necessidade}</div>
                  <div className="texto-light pt-1 ps-1">
                    {colaborador_setor}
                  </div>
                </div>
                <div className="col-1">
                  <div className="texto-bold">v{versao_crm}</div>
                  <div className="texto-light pt-1">{data_inicio}</div>
                </div>
                <div className="col-2">{switchComplexidade(complexidade)}</div>
              </div>
            </div>
            <div className="container-fluid info-crm-aberto">
              <div className="row d-flex align-items-center">
                <div className="col-4 d-flex justify-content-center texto-bold">
                  CRM nº: {n}
                </div>
                <div className="col-6 d-flex justify-content-center texto-bold">
                  Necessidade: {necessidade}
                </div>
                <div className="col-2 d-flex justify-content-center">
                  {setorUsuario === colaborador_setor &&
                  data_arquivamento === null &&
                  versaoMaxima == versao_crm ? (
                    <button
                      className="botao-editar botao-editar-habilitado"
                      onClick={editar_crm}
                    >
                      EDITAR CRM
                    </button>
                  ) : (
                    <button
                      className="botao-editar botao-editar-desabilitado"
                      disabled
                    >
                      EDITAR CRM
                    </button>
                  )}
                </div>
              </div>
            </div>
          </button>
        </h2>
        <div
          id={"panelsStayOpen-collapse" + id + versao_crm}
          className="accordion-collapse collapse"
          aria-labelledby={"panelsStayOpen-heading" + id + versao_crm}
        >
          <div className="accordion-body bodyAccordion">
            <section className="container-fluid m-0 p-0">
              <div className="row p-0">
                <div className="col-4">
                  <div className="div-usuario">
                    <h6 className="pt-3">Responsável:</h6>
                    <div className="ps-3 d-flex">
                      <div className="foto-usuario mt-2"></div>
                      <div className="ps-4">
                        <p className="texto-usuario">Nome: {nome}</p>
                        <p className="texto-usuario">
                          Matrícula: {colaborador_id}
                        </p>
                        <p className="texto-usuario">
                          Setor: {colaborador_setor}
                        </p>
                        <p className="texto-usuario">Telefone: {telefone}</p>
                        <p className="texto-usuario">E-mail: {email}</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="div-usuario mt-3">
                    <h6>Setores participantes:</h6>
                    {listaSetores.map((value: string) => (
                      <>
                        {listaSetoresAceite.indexOf(value) > -1 ? (
                          <>
                            {
                              <UserAccept
                                colaborador_id={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).colaborador_id
                                }
                                colaborador_setor={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).colaborador_setor
                                }
                                colaborador_nome={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).colaborador_nome
                                }
                                colaborador_telefone={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).colaborador_telefone
                                }
                                colaborador_email={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).colaborador_email
                                }
                                colaborador_foto_perfil={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).colaborador_foto
                                }
                                aceite={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).aceite
                                }
                                justificativa={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).justificativa
                                }
                                documento_justificativa={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).documento_justificativa
                                }
                                nome_documento_justificativa={
                                  listaAceites1.find(
                                    (e) => e.colaborador_setor === value
                                  ).nome_documento_justificativa
                                }
                              ></UserAccept>
                            }
                          </>
                        ) : (
                          <>
                            {versaoMaxima! == versao_crm ? (
                              <>
                                {value == setorUsuario ? (
                                  <>
                                    <h6 className="ps-3 pt-2">{value}:</h6>
                                    <div className="ps-3 d-flex justify-content-center">
                                      <div className="pt-2 mb-2 d-flex">
                                        <button
                                          className="div-reject"
                                          onClick={aceitar}
                                        >
                                          <i className="fa-solid fa-circle-check check-setor"></i>
                                        </button>
                                        <button
                                          className="div-reject ms-4"
                                          onClick={handleShowRejeitar}
                                        >
                                          <i className="fa-solid fa-times-circle reject-setor"></i>
                                        </button>
                                        <Modal
                                          size="lg"
                                          show={showRejeitar}
                                          onHide={handleCloseRejeitar}
                                        >
                                          <Modal.Header closeButton>
                                            <Modal.Title>
                                              Justificativa rejeição setor{" "}
                                              {value}:
                                            </Modal.Title>
                                          </Modal.Header>
                                          <form>
                                            <Modal.Body>
                                              <label
                                                htmlFor="justificativa"
                                                className="pt-3"
                                              >
                                                Justificativa:
                                              </label>
                                              <textarea
                                                id=""
                                                name="justificativa"
                                                className="input-objetivo"
                                                value={justificativaRejeitar}
                                                onChange={(e) =>
                                                  setJustificativaRejeitar(
                                                    e.target.value
                                                  )
                                                }
                                                required
                                              />
                                              <label
                                                className="mt-3"
                                                htmlFor="documentos"
                                              >
                                                Documentos:
                                              </label>
                                              <div className="input-documentos d-flex">
                                                {documento_anexoRejeitar.length >
                                                0 ? (
                                                  <>
                                                    {documento_anexoRejeitar.map(
                                                      (value, index) => (
                                                        <>
                                                          {value.indexOf(
                                                            "image/"
                                                          ) > -1 ? (
                                                            <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                                                              <i className="far fa-file-image download position-relative">
                                                                <button
                                                                  onClick={(
                                                                    e
                                                                  ) =>
                                                                    excluir_arquivo(
                                                                      index,
                                                                      e
                                                                    )
                                                                  }
                                                                  className="botao-excluir-arquivo"
                                                                >
                                                                  <i className="fa-solid fa-circle-xmark excluir-arquivo"></i>
                                                                </button>
                                                              </i>
                                                              <p className="texto-usuario">
                                                                {
                                                                  nomedocumentoRejeitar[
                                                                    index
                                                                  ]
                                                                }
                                                              </p>
                                                            </div>
                                                          ) : null}
                                                          {value.indexOf(
                                                            "application/pdf"
                                                          ) > -1 ? (
                                                            <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                                                              <i className="far fa-file-pdf download position-relative">
                                                                <button
                                                                  onClick={(
                                                                    e
                                                                  ) =>
                                                                    excluir_arquivo(
                                                                      index,
                                                                      e
                                                                    )
                                                                  }
                                                                  className="botao-excluir-arquivo"
                                                                >
                                                                  <i className="fa-solid fa-circle-xmark excluir-arquivo"></i>
                                                                </button>
                                                              </i>
                                                              <p className="texto-usuario">
                                                                {
                                                                  nomedocumentoRejeitar[
                                                                    index
                                                                  ]
                                                                }
                                                              </p>
                                                            </div>
                                                          ) : null}
                                                          {value.indexOf(
                                                            "application/msword"
                                                          ) > -1 ? (
                                                            <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                                                              <i className="far fa-file-word download position-relative">
                                                                <button
                                                                  onClick={(
                                                                    e
                                                                  ) =>
                                                                    excluir_arquivo(
                                                                      index,
                                                                      e
                                                                    )
                                                                  }
                                                                  className="botao-excluir-arquivo"
                                                                >
                                                                  <i className="fa-solid fa-circle-xmark excluir-arquivo"></i>
                                                                </button>
                                                              </i>
                                                              <p className="texto-usuario">
                                                                {
                                                                  nomedocumentoRejeitar[
                                                                    index
                                                                  ]
                                                                }
                                                              </p>
                                                            </div>
                                                          ) : null}
                                                          {value.indexOf(
                                                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                          ) > -1 ? (
                                                            <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                                                              <i className="far fa-file-excel download position-relative">
                                                                <button
                                                                  onClick={(
                                                                    e
                                                                  ) =>
                                                                    excluir_arquivo(
                                                                      index,
                                                                      e
                                                                    )
                                                                  }
                                                                  className="botao-excluir-arquivo"
                                                                >
                                                                  <i className="fa-solid fa-circle-xmark excluir-arquivo"></i>
                                                                </button>
                                                              </i>
                                                              <p className="texto-usuario">
                                                                {
                                                                  nomedocumentoRejeitar[
                                                                    index
                                                                  ]
                                                                }
                                                              </p>
                                                            </div>
                                                          ) : null}
                                                          {value.indexOf(
                                                            "text/plain"
                                                          ) > -1 ? (
                                                            <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                                                              <i className="far fa-file-lines download position-relative">
                                                                <button
                                                                  onClick={(
                                                                    e
                                                                  ) =>
                                                                    excluir_arquivo(
                                                                      index,
                                                                      e
                                                                    )
                                                                  }
                                                                  className="botao-excluir-arquivo"
                                                                >
                                                                  <i className="fa-solid fa-circle-xmark excluir-arquivo"></i>
                                                                </button>
                                                              </i>
                                                              <p className="texto-usuario">
                                                                {
                                                                  nomedocumentoRejeitar[
                                                                    index
                                                                  ]
                                                                }
                                                              </p>
                                                            </div>
                                                          ) : null}
                                                        </>
                                                      )
                                                    )}
                                                  </>
                                                ) : null}
                                              </div>
                                              <br />
                                              <label
                                                htmlFor=""
                                                className="anexar ms-3"
                                              >
                                                <i className="fa-solid fa-upload"></i>
                                                Anexar documentos
                                                <input
                                                  type="file"
                                                  name=""
                                                  id=""
                                                  onChange={(e) =>
                                                    convertFile(
                                                      e.target.files,
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              </label>
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button
                                                variant="secondary"
                                                onClick={handleCloseRejeitar}
                                              >
                                                Cancelar
                                              </Button>
                                              <Button
                                                type="submit"
                                                variant="warning"
                                                onClick={rejeitar}
                                              >
                                                Salvar
                                              </Button>
                                            </Modal.Footer>
                                          </form>
                                        </Modal>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <h6 className="ps-3 pt-2">{value}:</h6>
                                    <div className="ps-3 d-flex justify-content-center">
                                      <div className="pt-2 mb-2 d-flex">
                                        <i className="fa-solid fa-circle pending-setor">
                                          <i className="fa-solid fa-ellipsis pending-setor-dots"></i>
                                        </i>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </>
                            ) : (
                              <>
                                <h6 className="ps-3 pt-2">{value}:</h6>
                                <div className="ps-3 d-flex justify-content-center">
                                  <div className="pt-2 mb-2 d-flex">
                                    <i className="fa-solid fa-times-circle reject-setor"></i>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </>
                    ))}
                  </div>
                  {listaSistemas.length > 0 ? (
                    <div className="div-usuario mt-2">
                      <h6 className="pt-3">Sistemas envolvidos:</h6>
                      <ul>
                        {listaSistemas.map((value: string) => (
                          <li className="mt-2">{value}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div>
                    <h6 className="pt-3">Documentos:</h6>
                    <div className="ms-3 documentos">
                      {listaArquivos.length > 0 ? (
                        <div className="d-flex">
                          {listaArquivos.map((value, index) => (
                            <>
                              {value.indexOf("image/") > -1 && (
                                <a
                                  href={value}
                                  download={listaNomesArquivos[index]}
                                  className="ms-3 mt-3 pt-2 d-flex flex-column align-items-center arquivos text-center"
                                >
                                  <i className="far fa-file-image download"></i>
                                  <p className="texto-usuario">
                                    {listaNomesArquivos[index]}
                                  </p>
                                </a>
                              )}
                              {value.indexOf("application/pdf") > -1 && (
                                <a
                                  href={value}
                                  download={listaNomesArquivos[index]}
                                  className="ms-3 mt-3 pt-2 d-flex flex-column align-items-center arquivos text-center"
                                >
                                  <i className="far fa-file-pdf download"></i>
                                  <p className="texto-usuario">
                                    {listaNomesArquivos[index]}
                                  </p>
                                </a>
                              )}
                              {value.indexOf("application/msword") > -1 && (
                                <a
                                  href={value}
                                  download={listaNomesArquivos[index]}
                                  className="ms-3 mt-3 pt-2 d-flex flex-column align-items-center arquivos text-center"
                                >
                                  <i className="far fa-file-word download"></i>
                                  <p className="texto-usuario">
                                    {listaNomesArquivos[index]}
                                  </p>
                                </a>
                              )}
                              {value.indexOf(
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                              ) > -1 && (
                                <a
                                  href={value}
                                  download={listaNomesArquivos[index]}
                                  className="ms-3 mt-3 pt-2 d-flex flex-column align-items-center arquivos text-center"
                                >
                                  <i className="far fa-file-excel download"></i>
                                  <p className="texto-usuario">
                                    {listaNomesArquivos[index]}
                                  </p>
                                </a>
                              )}
                              {value.indexOf("text/plain") > -1 && (
                                <a
                                  href={value}
                                  download={listaNomesArquivos[index]}
                                  className="ms-3 mt-3 pt-2 d-flex flex-column align-items-center arquivos text-center"
                                >
                                  <i className="far fa-file-lines download"></i>
                                  <p className="texto-usuario">
                                    {listaNomesArquivos[index]}
                                  </p>
                                </a>
                              )}
                            </>
                          ))}
                        </div>
                      ) : (
                        <p className="texto-usuario text-center">
                          Nenhum anexo para esta CRM
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-4">
                    <h6 className="pt-3">Impacto:</h6>
                    <div className="texto-usuario ps-3">
                      {impacto.length > 680 ? (
                        <>
                          {impactoFormatado}
                          <button
                            className="botao-arquivos ver-mais ps-1"
                            onClick={handleShowImpacto}
                          >
                            ver mais...
                          </button>
                        </>
                      ) : (
                        <>{impacto}</>
                      )}
                      <Modal
                        size="xl"
                        show={showImpacto}
                        onHide={handleCloseImpacto}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Impacto:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{impacto}</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="warning"
                            onClick={handleCloseImpacto}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <h6 className="pt-3">Descrição:</h6>
                    <div className="texto-usuario ps-3">
                      {descricao.length > 680 ? (
                        <>
                          {descricaoFormatado}
                          <button
                            className="botao-arquivos ver-mais ps-1"
                            onClick={handleShowDescricao}
                          >
                            ver mais...
                          </button>
                        </>
                      ) : (
                        <>{descricao}</>
                      )}
                      <Modal
                        size="xl"
                        show={showDescricao}
                        onHide={handleCloseDescricao}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Descrição:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{descricao}</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="warning"
                            onClick={handleCloseDescricao}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <h6 className="pt-3">Objetivo:</h6>
                    <div className="texto-usuario ps-3">
                      {objetivo.length > 680 ? (
                        <>
                          {objetivoFormatado}
                          <button
                            className="botao-arquivos ver-mais ps-1"
                            onClick={handleShowObjetivo}
                          >
                            ver mais...
                          </button>
                        </>
                      ) : (
                        <>{objetivo}</>
                      )}
                      <Modal
                        size="xl"
                        show={showObjetivo}
                        onHide={handleCloseObjetivo}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Objetivo:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{objetivo}</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="warning"
                            onClick={handleCloseObjetivo}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <h6 className="pt-3">Justificativa:</h6>
                    <div className="texto-usuario ps-3">
                      {justificativa.length > 680 ? (
                        <>
                          {justificativaFormatado}
                          <button
                            className="botao-arquivos ver-mais ps-1"
                            onClick={handleShowJustificativa}
                          >
                            ver mais...
                          </button>
                        </>
                      ) : (
                        <>{justificativa}</>
                      )}
                      <Modal
                        size="xl"
                        show={showJustificativa}
                        onHide={handleCloseJustificativa}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Justificativa:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{justificativa}</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="warning"
                            onClick={handleCloseJustificativa}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>

                    <div className="texto-usuario">
                      {alternativas ? (
                        <>
                          <h6 className="pt-3">Alternativas:</h6>
                          {alternativas.length > 680 ? (
                            <>
                              <p className="ps-3">{alternativasFormatado}</p>
                              <button
                                className="botao-arquivos ver-mais ps-1"
                                onClick={handleShowAlternativas}
                              >
                                ver mais...
                              </button>
                            </>
                          ) : (
                            <>
                              <p className="ps-3">{alternativas}</p>
                            </>
                          )}
                        </>
                      ) : null}
                      <Modal
                        size="xl"
                        show={showAlternativas}
                        onHide={handleCloseAlternativas}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Alternativas:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{alternativas}</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="warning"
                            onClick={handleCloseAlternativas}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>

                    <div className="texto-usuario ps-3 mb-4">
                      {comportamento_offline ? (
                        <>
                          <h6 className="pt-3">Comportamento Offline:</h6>
                          {comportamento_offline.length > 280 ? (
                            <>
                              {comportamentoFormatado}
                              <button
                                className="botao-arquivos ver-mais ps-1"
                                onClick={handleShowComportamento}
                              >
                                ver mais...
                              </button>
                            </>
                          ) : (
                            <>{comportamento_offline}</>
                          )}
                        </>
                      ) : null}
                      <Modal
                        size="xl"
                        show={showComportamento}
                        onHide={handleCloseComportamento}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Comportamento Offline:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{comportamento_offline}</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="warning"
                            onClick={handleCloseComportamento}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <h6 className="pt-3">Versão:</h6>
                  <div className="texto-bold d-flex justify-content-end">
                    <div className="ps-3">v{versao_crm}</div>
                    {versao_crm > 1 ? (
                      <button
                        onClick={search}
                        className="texto-bold versao ps-3"
                      >
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                    ) : null}
                  </div>
                  <h6 className="pt-3">Data Criação:</h6>
                  <div className="texto-usuario d-flex justify-content-end">
                    {data}
                  </div>
                  {data_obrigatoriedade ? (
                    <>
                      <h6 className="mt-4">Data Obrigat. Legal:</h6>
                      <div className="texto-usuario d-flex justify-content-end">
                        {data_obr}
                      </div>
                    </>
                  ) : null}
                  {numero_crm_dependencia ? (
                    <>
                      <h6 className="mt-4">Número CRM dependente:</h6>
                      <div className="texto-usuario d-flex justify-content-end">
                        {("00000" + numero_crm_dependencia).slice(-5)}
                      </div>
                    </>
                  ) : null}
                  {complexidade === 0 && setorUsuario === "TI" ? (
                    <>
                      <form>
                        <h6 className="pt-3">Complexidade:</h6>
                        <div className="d-flex justify-content-end">
                          <select
                            name="complexidade"
                            id="complexidade"
                            className="text-center"
                            onChange={(e) =>
                              setComplexidadeUpdate(Number(e.target.value))
                            }
                          >
                            <option
                              className="zero"
                              value="0"
                              disabled
                              selected
                            >
                              . . .
                            </option>
                            <option className="muito-baixa" value="1">
                              MUITO BAIXA
                            </option>
                            <option className="baixa" value="2">
                              BAIXA
                            </option>
                            <option className="media" value="3">
                              MÉDIA
                            </option>
                            <option className="alta" value="4">
                              ALTA
                            </option>
                            <option className="muito-alta" value="5">
                              MUITO ALTA
                            </option>
                          </select>
                        </div>
                        <label htmlFor="impacto_ti">Impacto da mudança:</label>
                        <textarea
                          name="impacto_ti"
                          id=""
                          className="input-impacto_ti texto-usuario"
                          value={impactoTI}
                          onChange={(e) => setImpactoTI(e.target.value)}
                        />
                        <div className="d-flex justify-content-end">
                          <button
                            className="salvar_ti ps-3 pe-3"
                            onClick={salvarDetalhesTI}
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      <h6 className="pt-3">Complexidade:</h6>
                      <div className="texto-usuario d-flex justify-content-end">
                        {switchComplexidade(complexidade)}
                      </div>
                      {impacto_ti ? (
                        <>
                          <h6 className="pt-3">Impacto da mudança:</h6>
                          {impacto_ti.length > 200 ? (
                            <div className="texto-usuario text-end">
                              {impactoTIFormatado}
                              <button
                                className="botao-arquivos ver-mais ps-1"
                                onClick={handleShowImpactoTI}
                              >
                                ver mais...
                              </button>
                              <Modal
                                size="xl"
                                show={showImpactoTI}
                                onHide={handleCloseImpactoTI}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>Impacto da mudança:</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{impacto_ti}</Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    variant="warning"
                                    onClick={handleCloseImpactoTI}
                                  >
                                    OK
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </div>
                          ) : (
                            <>
                              <p className="texto-usuario text-end">
                                {impacto_ti}
                              </p>
                            </>
                          )}
                        </>
                      ) : null}
                    </>
                  )}
                  {data_arquivamento ? (
                    <>
                      <h6 className="pt-3">Data Arquivamento:</h6>
                      <div className="texto-usuario d-flex justify-content-end">
                        {data_arq}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AccordionStyled>
  );
};

export default Accordion;
