import styled from "styled-components";
import colaborador from "../../assets/colaborador.png";

interface Props {
  foto_perfil: any;
}

const FormStyled = styled.body<Props>`
  button {
    cursor: pointer;
  }

  section {
    background-color: #f7f8fc;
    height: auto;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-form {
    background-color: #fff;
    border-radius: 5px;
    border: #c5c7cd solid 1px;
    height: 85vh;
    width: 97vw;
    margin-top: 8px;
    margin-left: -10px;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    overflow-y: auto;
  }

  h1 {
    font-weight: 900;
    font-size: 18px;
    text-align: center;
    margin-bottom: 42px;
  }

  label,
  h3 {
    font-weight: 700;
    font-size: 14px;
  }

  .label-checkbox {
    font-weight: 400;
  }

  .div-colaborador {
    margin-top: 17px;
  }

  .texto-usuario {
    font-weight: 400;
    font-size: 14px;
    margin-left: 17px;
    margin-bottom: 12px;
  }

  .posicao-form {
    width: 50vw;
    margin-top: 29px;
  }

  .foto-usuario {
    background-image: url(${(p) => p.foto_perfil});
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foto-colaborador {
    background-image: url(${colaborador});
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-usuario,
  .div-colaborador {
    display: flex;
    align-items: flex-start;
  }

  .div-versao-data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    margin-top: 10px;
    font-weight: 700;
    font-size: 14px;
  }

  input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
  textarea {
    width: 96%;
    margin-left: 2%;
    margin-top: 18px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 8px;
    margin-bottom: 17px;
    text-align: start;
    outline: none;
    padding-left: 0.7rem;
  }

  .anexar {
    position: relative;
  }

  input[type="file"] {
    opacity: 0;
    position: absolute;
    margin-left: -13vw;
  }

  input[type="file"]::file-selector-button {
    width: 13vw;
  }

  textarea {
    resize: none;
    padding-top: 0.5rem;
  }

  .input-participantes {
    height: 78px;
  }

  .div-setor {
    background-color: #d9d9d9;
    padding-left: 1vw;
    padding-right: 0.5vw;
    gap: 0.8vw;
    min-width: 4vw;
    max-width: min-content;
    border-radius: 1rem;
  }

  .botao-x {
    border: none;
    outline: none;
    background-color: transparent;
  }

  .input-descricao {
    height: 300px;
  }

  .input-objetivo,
  .input-justificativa {
    height: 200px;
  }

  .input-documentos {
    height: 180px;
    width: 96%;
    margin-left: 2%;
    margin-top: 18px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 8px;
    outline: none;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .input-documentos::-webkit-scrollbar {
    height: 0.7rem;
  }

  .input-documentos::-webkit-scrollbar-track {
    border-radius: 0.7rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }

  .input-documentos::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 0.7rem;
  }

  .input-documentos::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }

  .download {
    font-size: 6rem;
  }

  .texto-usuario {
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0;
    width: 100%;
  }

  .arquivos {
    min-width: 12vw;
  }

  .botao-excluir-arquivo {
    position: absolute;
    top: 0;
    right: 0;
  }

  .excluir-arquivo {
    position: absolute;
    top: -1.5vh;
    right: -1.5vh;
    font-size: 1.2rem;
    background-color: #fff;
    color: #ff1b1b;
    border-radius: 50%;
  }

  .div-salvar {
    display: flex;
    justify-content: center;
  }

  .botao-anexar {
    border: none;
    background-color: transparent;
    margin-bottom: 18px;
    font-size: 15px;
  }

  .fa-upload {
    font-size: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .botao-salvar {
    margin-bottom: 40px;
    background-color: #fde900;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 13px;
    border: none;
    width: 144px;
    height: 48px;
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h3 {
    margin-bottom: 12px;
  }

  .input-data-legal {
    width: 10vw !important;
  }

  .div-form::-webkit-scrollbar {
    width: 0.8rem;
  }

  .div-form::-webkit-scrollbar-track {
    border-radius: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .div-form::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 1rem;
  }

  .div-form::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }

  textarea::-webkit-scrollbar {
    width: 0.8rem;
  }

  textarea::-webkit-scrollbar-track {
    border-radius: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  textarea::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 1rem;
  }

  textarea::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }
`;

export default FormStyled;
