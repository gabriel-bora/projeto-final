import styled from "styled-components";

const SearchStyled = styled.section`
  main {
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
    overflow-x: hidden;
    overflow-y: auto;
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

  .titulo-tabela {
    font-weight: 700;
    font-size: 0.9rem;
    color: #9fa2b4;
  }

  .paginas {
    font-size: 1rem;
    color: #dfe0eb;
    font-weight: 400;
  }

  .fa-angle-left,
  .fa-angle-right {
    color: #dfe0eb;
    font-size: 1.4rem;
  }
`;

export default SearchStyled;
