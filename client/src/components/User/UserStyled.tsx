import styled from "styled-components";

interface Props {
  foto_perfil: any;
}

const UserStyled = styled.div<Props>`
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
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

  .avatar {
    background-image: url(${(p) => p.foto_perfil});
    width: 10vw;
    height: 10vw;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .campos {
    width: 30vw;
  }

  h6 {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
    width: 80px;
  }

  input::placeholder {
    font-size: 0.9rem;
  }

  input,
  select {
    height: 1.5rem;
    width: 300px;
  }

  input[type="file"] {
    opacity: 1;
    position: static;
    margin-left: 0;
    height: 1.6rem;
    width: auto;
    font-family: "Mulish", sans-serif;
    font-size: 0.8rem;
  }

  input[type="file"]::file-selector-button {
    background-color: #fde900;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 7px;
    border: none;
    font-weight: 900;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: auto;
  }

  .botao-salvar {
    background-color: #fde900;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 7px;
    border: none;
    width: 100px;
    height: 35px;
    font-weight: 900;
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default UserStyled;
