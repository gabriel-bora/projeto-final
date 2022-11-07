import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      font-family: "Mulish", sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;   
  }

  body::-webkit-scrollbar {
    width: 0.8rem;
  }

  body::-webkit-scrollbar-track {
    border-radius: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  body::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 1rem;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }

  textarea {
    height: 200px;
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
    resize: none;
    padding-top: 0.5rem;
  }

  .texto-usuario {
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0;
    width: 100%;
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

  .download {
    font-size: 6rem;
  }

  .arquivos {
    width: 12vw;
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

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #216800;
  }
`;

export default GlobalStyle;
