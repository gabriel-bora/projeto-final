import * as React from "react";
import LoginStyled from "./LoginStyled";
import logo from "../../assets/logo-quero-quero.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [matricula, setMatricula] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [id_cadastro, setId_cadastro] = useState<string>("");
  const [senha_cadastro, setSenha_cadastro] = useState<string>("");

  function entrar(e: any) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        matricula: matricula,
        senha: senha,
      })
      .then((response) => {
        if (response.data === "logado") {
          localStorage.setItem("usuario-logado", matricula);
          navigate("/home");
        } else {
          alert(response.data);
          setMatricula("");
          setSenha("");
        }
      });
  }

  function criar(e: any) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", {
        matricula: id_cadastro,
        Setor_codigo: 0,
        nome: nome + " " + sobrenome,
        telefone: "",
        email: "",
        senha: senha_cadastro,
      })
      .then((response) => {
        alert(response.data);
        setNome("");
        setSobrenome("");
        setId_cadastro("");
        setSenha_cadastro("");
        let checkLoginRegistro = document.querySelector(
          "#chk"
        ) as HTMLInputElement;
        checkLoginRegistro.checked = false;
      });
  }

  return (
    <LoginStyled>
      <div className="fundo" id="background">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup d-flex justify-content-center">
            <form id="formLogin">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={logo} alt="" className="logo-quero-quero mt-5" />
                <label
                  className="titulo-login mt-3 mb-5"
                  htmlFor="chk"
                  aria-hidden="true"
                >
                  Login CRM
                </label>
              </div>
              <div className="login__row input-group pt-0 d-flex justify-content-center">
                <span
                  className="input-group-text shadow basic-addon1"
                  id="spanLoginUser"
                >
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="login__input shadow"
                  placeholder="Matrícula"
                  id="inputLoginUser"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>
              <div className="login__row input-group pt-0 mt-3 d-flex justify-content-center">
                <span
                  className="input-group-text shadow basic-addon1"
                  id="spanLoginPass"
                >
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="login__input shadow"
                  placeholder="Senha"
                  id="inputLoginPass"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="login__submit mt-4" onClick={entrar}>
                  <span className="button_top">ENTRAR</span>
                </button>
              </div>
            </form>
          </div>

          <div className="login d-flex justify-content-center" id="cadastro">
            <form id="formCadastro">
              <div className="d-flex justify-content-center">
                <label htmlFor="chk" aria-hidden="true">
                  Criar conta
                </label>
              </div>
              <div className="login__row input-group pt-0 d-flex justify-content-center">
                <span
                  className="input-group-text shadow basic-addon1"
                  id="spanCadastroNome"
                >
                  <i className="fa-regular fa-user"></i>
                </span>
                <input
                  type="text"
                  className="login__input shadow"
                  placeholder="Nome"
                  id="inputCadastroNome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="login__row input-group pt-0 d-flex justify-content-center">
                <span
                  className="input-group-text shadow basic-addon1"
                  id="spanCadastroSobrenome"
                >
                  <i className="fa-regular fa-user"></i>
                </span>
                <input
                  type="text"
                  className="login__input shadow"
                  placeholder="Sobrenome"
                  id="inputCadastroSobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </div>
              <div className="login__row input-group pt-0 mt-3 d-flex justify-content-center">
                <span
                  className="input-group-text shadow basic-addon1"
                  id="spanCadastroUser"
                >
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="login__input shadow"
                  placeholder="Matrícula"
                  id="inputCadastroUser"
                  value={id_cadastro}
                  onChange={(e) => setId_cadastro(e.target.value)}
                />
              </div>
              <div className="login__row input-group pt-0 mt-3 d-flex justify-content-center">
                <span
                  className="input-group-text shadow basic-addon1"
                  id="spanCadastroPass"
                >
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="login__input shadow"
                  placeholder="Senha"
                  id="inputCadastroPass"
                  value={senha_cadastro}
                  onChange={(e) => setSenha_cadastro(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="login__submit mt-5" onClick={criar}>
                  <span className="button_top">CADASTRAR</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
