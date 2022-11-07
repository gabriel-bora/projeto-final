import React from "react";
import HeaderStyled from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Header: React.FC = () => {
  const navigate = useNavigate();

  function adicionar_crm() {
    navigate("/addcrm");
  }

  function editar_usuario() {
    navigate("/edituser");
  }

  function logout() {
    navigate("/");
  }

  function home() {
    navigate("/home");
  }

  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  const [showElement2, setShowElement2] = useState(true);
  const showOrHide2 = () => setShowElement2(!showElement2);

  const [nome, setNome] = useState<string>();
  const [foto, setFoto] = useState<string>();

  useEffect(() => {
    let usuario = localStorage.getItem("usuario-logado");
    axios
      .post("http://localhost:3001/getUser", { usuario: usuario })
      .then((response) => {
        setNome(response.data.nome);
        setFoto(response.data.foto_perfil);
      });
  }, []);

  return (
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
              <input
                className="pesquisa me-2"
                type="text"
                placeholder="Pesquise por número de cadastro ou nome do usuário responsável"
              />
            ) : null}
            <button className="botao" onClick={showOrHide}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <button className="botao">
            <i className="fa-solid fa-filter"></i>
          </button>
          <button
            className="botao dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={showOrHide2}
          >
            <i className="fa-solid fa-bell">
              {showElement2 ? <i className="fa-solid fa-circle"></i> : null}
            </i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <p className="dropdown-item">Notificação 1</p>
            </li>
            <li>
              <p className="dropdown-item">Notificação 2</p>
            </li>
            <li>
              <p className="dropdown-item">Notificação 3</p>
            </li>
          </ul>
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
                  <button className="dropdown-item" onClick={logout}>
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
