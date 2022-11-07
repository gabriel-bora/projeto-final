import styled from "styled-components";

interface Props {
  foto_perfil: any;
}

const HeaderStyled = styled.header<Props>`
  header {
    height: 60px;
    width: 100vw;
    background-color: #216800;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  .add-crm {
    background-color: #c5c7cd;
    width: 23px;
    height: 23px;
    border-radius: 3px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-add-crm:hover .adicionar-crm {
    display: block;
  }

  .div-add-crm {
    margin-left: 35px;
  }

  .pesquisa {
    width: 400px;
    height: 27px;
    background: #d9d9d9;
    border-radius: 10px;
    border: none;
    outline: none;
    text-indent: 0.7rem;
  }

  .pesquisa::placeholder {
    font-size: 0.7rem;
    font-weight: 400;
    color: #8a8a8a;
  }

  .fa-plus {
    color: #216800;
    font-size: 1.2rem;
  }

  .botao {
    background-color: #216800;
    border: none;
  }

  .fa-magnifying-glass,
  .fa-filter,
  .fa-bell {
    color: #c5c7cd;
    font-size: 1rem;
  }

  .barra {
    color: #c5c7cd;
    font-size: 1.5rem;
    margin-top: 3px;
  }

  .nome-usuario {
    color: #252733;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0 !important;
  }

  .div-nome-usuario {
    display: flex;
    align-items: center;
  }

  .div-direita {
    display: flex;
    margin-right: 35px;
    gap: 15px;
    align-items: center;
  }

  .avatar {
    background-image: url(${(p) => p.foto_perfil});
    width: 35px;
    height: 35px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .usuario {
    background-color: #216800;
    border: #c5c7cd solid 2px;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-left: 8px;
  }

  .adicionar-crm {
    color: #c5c7cd;
    font-weight: 800;
    font-size: 0.9rem;
    display: none;
  }

  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-item {
    font-size: 0.8rem;
  }

  .fa-bell {
    position: relative;
  }

  .fa-circle {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.4em;
    color: #1b39ff;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;

export default HeaderStyled;
