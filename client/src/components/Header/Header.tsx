import React from "react";
import HeaderStyled from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";

const Header: React.FC = () => {
  const navigate = useNavigate();

  function adicionar_crm() {
    navigate("/addcrm");
  }

  function editar_usuario() {
    navigate("/edituser");
  }

  function home() {
    navigate("/home");
  }

  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  const [showElement3, setShowElement3] = useState(false);
  const showOrHide3 = () => setShowElement3(!showElement3);

  const [showA, setShowA] = useState(false);
  const [showTextoA, setShowTextoA] = useState<string>();
  const toastA = (mensagem: string) => {
    setShowTextoA(mensagem);
    setShowA(true);
  };

  function logout() {
    localStorage.removeItem("usuario-logado");
    setShowA(false);
    navigate("/");
  }

  const [nome, setNome] = useState<string>();
  const [foto, setFoto] = useState<string>();

  const [pesquisa, setPesquisa] = useState<string>("");

  useEffect(() => {
    let usuario = localStorage.getItem("usuario-logado");
    axios
      .post("http://localhost:3001/getUser", { usuario: usuario })
      .then((response) => {
        setNome(response.data.nome);
        setFoto(response.data.foto_perfil);
      });
  }, []);

  function search() {
    if (pesquisa === "") {
      navigate("/home");
    } else {
      localStorage.setItem("pesquisa", pesquisa);
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
  }

  const [dataInicio, setDataInicio] = useState<string>("");

  function searchDate() {
    if (dataInicio === "") {
      navigate("/home");
    } else {
      localStorage.setItem("data-inicio", dataInicio);
      localStorage.removeItem("pesquisa");
      localStorage.removeItem("data-arq");
      if (
        window.location.href ===
        "http://localhost:3000/projeto-final-crm/searchcrm"
      ) {
        window.location.reload();
      } else {
        navigate("/searchcrm");
      }
    }
  }

  const [dataArq, setDataArq] = useState<string>("");

  function searchDateArq() {
    if (dataArq === "") {
      navigate("/home");
    } else {
      localStorage.setItem("data-arq", dataArq);
      localStorage.removeItem("pesquisa");
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
  }

  return (
    <>
      <HeaderStyled foto_perfil={foto}>
        <header>
          <div className="div-add-crm d-flex justify-content-center">
            <button className="add-crm" onClick={adicionar_crm}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <span className="adicionar-crm ms-3">Adicionar CRM</span>
          </div>
          <div className="div-direita">
            <div className="div-pesquisa d-flex">
              {showElement ? (
                <form>
                  <input
                    className="pesquisa me-2"
                    type="text"
                    placeholder="Pesquise por número da CRM ou nome do usuário responsável"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                  />
                  <button onClick={search} className="botao-pesquisa"></button>
                </form>
              ) : null}
              <button className="botao" onClick={showOrHide}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <button className="botao" onClick={showOrHide3}>
              <i className="fa-solid fa-filter"></i>
            </button>
            {showElement3 ? (
              <div className="div-filtro">
                <div className="filtro-data">
                  <div>
                    <nav className="nav_tabs">
                      <ul>
                        <li>
                          <input
                            type="radio"
                            id="tab1"
                            className="rd_tab"
                            name="tabs"
                            checked
                          />
                          <label
                            htmlFor="tab1"
                            className="tab_label texto-usuario"
                          >
                            Data Início:
                          </label>
                          <div className="tab-content">
                            <form>
                              <input
                                className="input-filtro"
                                type="date"
                                value={dataInicio}
                                onChange={(e) => setDataInicio(e.target.value)}
                              />
                              <button
                                onClick={searchDate}
                                className="botao-pesquisa"
                              ></button>
                            </form>
                          </div>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="tabs"
                            className="rd_tab"
                            id="tab2"
                          />
                          <label
                            htmlFor="tab2"
                            className="tab_label texto-usuario"
                          >
                            Data Arq.:
                          </label>
                          <div className="tab-content">
                            <form>
                              <input
                                className="input-filtro"
                                type="date"
                                value={dataArq}
                                onChange={(e) => setDataArq(e.target.value)}
                              />
                              <button
                                onClick={searchDateArq}
                                className="botao-pesquisa"
                              ></button>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            ) : null}
            <p className="barra">|</p>
            <div className="div-nome-usuario">
              <p className="nome-usuario">{nome}</p>
              <div className="dropdown">
                <button
                  className="usuario dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="avatar"></div>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={home}>
                      Dashboard CRMs
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={editar_usuario}>
                      Editar usuário
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        toastA("Tem certeza que quer sair da aplicação?")
                      }
                    >
                      Sair
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </HeaderStyled>
      <ToastContainer className="p-3" position="top-end">
        <Toast show={showA} bg="warning">
          <Toast.Body className="d-flex flex-column justify-content-around align-items-center">
            {showTextoA}
            <div className="mt-4 d-flex gap-5">
              <Button variant="secondary" onClick={() => logout()}>
                Sim
              </Button>
              <Button variant="danger" onClick={() => setShowA(false)}>
                Não
              </Button>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Header;
