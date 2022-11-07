import styled from "styled-components";

interface Props {
  colaborador_foto_perfil: string;
}

const AccordionStyled = styled.section<Props>`
  .foto-colaborador {
    width: 50px;
    height: 50px;
    background-image: url(${(p) => p.colaborador_foto_perfil});
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .check-setor {
    font-size: 2.5rem;
    text-align: center;
    color: #29cc97;
  }

  .reject-setor {
    font-size: 2.5rem;
    text-align: center;
    color: #f12b2c;
  }

  .div-reject {
    border: none;
    outline: none;
    background-color: transparent;
  }

  h6 {
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export default AccordionStyled;
