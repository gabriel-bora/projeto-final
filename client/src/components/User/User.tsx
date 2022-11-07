/* eslint-disable eqeqeq */
import React from "react";
import UserStyled from "./UserStyled";
import { useState, useEffect } from "react";
import axios from "axios";

const User: React.FC = () => {
  const [nome, setNome] = useState<string>();
  const [id, setId] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [setor, setSetor] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [foto, setFoto] = useState<string>();
  const [fotoNova, setFotoNova] = useState<string>();

  useEffect(() => {
    let usuario = localStorage.getItem("usuario-logado");
    axios
      .post("http://localhost:3001/getUser", { usuario: usuario })
      .then((response) => {
        setNome(response.data.nome);
        setId(response.data.matricula);
        setTelefone(response.data.telefone);
        setSetor(response.data.setor);
        setEmail(response.data.email);
        setSenha(response.data.senha);
        setFoto(response.data.foto_perfil);
      });
  }, []);

  function atualizar_usuario(e: any) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/updateUser", {
        matricula: id,
        setor: setor,
        telefone: telefone,
        email: email,
        senha: senha,
        foto_perfil: fotoNova,
      })
      .then((response) => {
        alert(response.data);
        window.location.reload();
      });
  }

  const [listaSetores, setListaSetores] = useState<string[]>([
    "Sem setor",
    "Administrativo",
    "Comercial",
    "Compras",
    "Contabilidade",
    "Financeiro",
    "Marketing",
    "Mercantil",
    "Operações",
    "RH",
    "TI",
  ]);

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setFotoNova(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }

  return (
    <UserStyled foto_perfil={foto}>
      <section>
        <div className="div-form mt-4 d-flex justify-content-center align-items-center">
          <form className="d-flex flex-column align-items-center">
            <div className="avatar"></div>
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => convertFile(e.target.files)}
            />
            <div className="mt-3 d-flex flex-column align-items-start campos">
              <div className="d-flex align-items-end">
                <h6>Nome:</h6>
                <input
                  type="text"
                  className="ps-1 ms-2"
                  value={nome}
                  disabled
                />
              </div>
              <div className="d-flex mt-2 align-items-end">
                <h6>Matrícula:</h6>
                <input type="text" className="ps-1 ms-2" value={id} disabled />
              </div>
              <div className="d-flex mt-2 align-items-end">
                <h6>Telefone:</h6>
                <input
                  type="text"
                  className="ps-1 ms-2"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <div className="d-flex mt-2 align-items-end">
                <h6>Setor:</h6>
                <select
                  className="ps-1 ms-2"
                  name="setor"
                  id="setor"
                  onChange={(e) => setSetor(e.target.value)}
                >
                  {listaSetores.map((value) =>
                    value == setor ? (
                      <>
                        {setor === "Sem setor" ? (
                          <option value="Selecione" selected disabled>
                            Selecione
                          </option>
                        ) : (
                          <option value={value} selected>
                            {value}
                          </option>
                        )}
                      </>
                    ) : (
                      <>
                        {value === "Sem setor" ? null : (
                          <option value={value}>{value}</option>
                        )}
                      </>
                    )
                  )}
                </select>
              </div>
              <div className="d-flex mt-2 align-items-end">
                <h6>E-mail:</h6>
                <input
                  type="email"
                  className="ps-1 ms-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex mt-2 align-items-end">
                <h6>Senha:</h6>
                <input
                  type="password"
                  className="ps-1 ms-2"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
            <button className="mt-4 botao-salvar" onClick={atualizar_usuario}>
              SALVAR
            </button>
          </form>
        </div>
      </section>
    </UserStyled>
  );
};

export default User;
