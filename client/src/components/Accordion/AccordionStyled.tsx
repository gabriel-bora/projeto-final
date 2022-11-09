import styled from "styled-components";
import usuario2 from "../../assets/usuario-2.png";

interface Props {
  foto_perfil: any;
}

const AccordionStyled = styled.section<Props>`
  .foto-usuario {
    width: 50px;
    height: 50px;
    background-image: url(${(p) => p.foto_perfil});
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .check-status {
    font-size: 1.8rem;
    text-align: center;
    color: #29cc97;
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

  .reject-status {
    font-size: 1.8rem;
    text-align: center;
    color: #f12b2c;
  }

  .div-reject {
    border: none;
    outline: none;
    background-color: transparent;
  }

  .pending-setor {
    font-size: 2.5rem;
    text-align: center;
    color: #fec400;
    position: relative;
  }

  .pending-status {
    font-size: 1.8rem;
    text-align: center;
    color: #fec400;
    position: relative;
  }

  .pending-setor-dots {
    color: #dfe0eb;
  }

  .pending-status-dots {
    color: #fff;
  }

  .fa-ellipsis {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8em;
  }

  .texto-bold {
    font-weight: 600;
  }

  .texto-light {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 0.1px;
    color: #c5c7cd;
  }

  .avatar {
    background-image: url(${(p) => p.foto_perfil});
    width: 40px;
    height: 40px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar-2 {
    background-image: url(${usuario2});
    width: 40px;
    height: 40px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .complexidade-alta {
    width: 4rem;
    background-color: #f12b2c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 1rem;
  }

  .complexidade-media {
    width: 4.5rem;
    background-color: #fec400;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 1rem;
  }

  .complexidade-zero {
    width: 3rem;
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
    color: #000;
    font-size: 0.8rem;
    font-weight: 900;
    border-radius: 1rem;
  }

  .complexidade-muito-baixa {
    width: 7rem;
    background-color: #2b7af1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 1rem;
  }

  .complexidade-baixa {
    width: 4.5rem;
    background-color: #3dc764;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 1rem;
  }

  .complexidade-muito-alta {
    width: 6.8rem;
    background-color: #2c2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 1rem;
  }

  .zero {
    background-color: #c4c4c4;
    font-weight: 900;
  }

  .muito-baixa,
  select:has(.muito-baixa:checked) {
    background-color: #2b7af1;
    color: #fff;
  }

  .baixa,
  select:has(.baixa:checked) {
    background-color: #3dc764;
    color: #fff;
  }

  .media,
  select:has(.media:checked) {
    background-color: #fec400;
    color: #fff;
  }

  .alta,
  select:has(.alta:checked) {
    background-color: #f12b2c;
    color: #fff;
  }

  .muito-alta,
  select:has(.muito-alta:checked) {
    background-color: #2c2c2c;
    color: #fff;
  }

  select {
    border-radius: 1rem;
    width: 7rem;
    height: 1.4rem;
    color: #000;
    font-size: 0.8rem;
    font-weight: 700;
    outline: none;
    border: none;
    background-color: #c4c4c4;
  }

  .texto-usuario {
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
    width: 100%;
  }

  .botao-arquivos {
    border: none;
    outline: none;
    background-color: transparent;
  }

  .input-impacto_ti {
    background-color: #fff;
  }

  .input-impacto_ti::-webkit-scrollbar {
    width: 0.7rem;
  }

  .input-impacto_ti::-webkit-scrollbar-track {
    border-radius: 0.8rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .input-impacto_ti::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 1rem;
  }

  .input-impacto_ti::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }

  .salvar_ti {
    background-color: #fde900;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 0.8rem;
    border: none;
    font-weight: 900;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: auto;
  }

  .ver-mais {
    color: rgba(33, 104, 0, 1);
  }

  .info-crm-aberto {
    display: none;
  }

  .accordion-button:not(.collapsed) > .info-crm-fechado {
    display: none;
  }

  .accordion-button:not(.collapsed) > .info-crm-aberto {
    display: block;
  }

  .botao-editar {
    width: 8rem;
    height: 1.5rem;
    border-radius: 1rem;
    color: #fff;
    border: none;
    outline: none;
  }

  .botao-editar-habilitado {
    background: rgba(33, 104, 0, 1);
    cursor: pointer;
  }

  .botao-editar-desabilitado {
    background: rgba(33, 104, 0, 0.4);
    cursor: not-allowed;
  }

  .versao {
    border: none;
    outline: none;
    background-color: transparent;
    color: #0047ff;
  }

  h6 {
    font-size: 0.9rem;
    font-weight: 700;
  }

  .documentos {
    width: 95%;
    height: 10rem;
    border-radius: 0.5rem;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
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

  .accordion-button {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    background-color: transparent !important;
    color: #000 !important;
    border-bottom: 1px solid #dfe0eb !important;
  }

  .accordion-body {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    background-color: #dfe0eb !important;
    color: #000 !important;
    border-bottom: 1px solid #dfe0eb !important;
    height: 65vh;
    overflow-y: auto;
  }

  .accordion-button:not(.collapsed) {
    color: #000 !important;
    background-color: #fff !important;
    border-bottom: none !important;
  }

  .accordion-button:not(.collapsed) > .dataRecado {
    display: block;
  }

  .accordion-button:not(.collapsed) > .descricaoRecado {
    display: none;
  }

  .accordion-button:focus {
    box-shadow: none !important;
  }

  .accordion-body::-webkit-scrollbar {
    width: 0.8rem;
  }

  .accordion-body::-webkit-scrollbar-track {
    border-radius: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .accordion-body::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 1rem;
  }

  .accordion-body::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }

  .documentos::-webkit-scrollbar {
    height: 0.7rem;
  }

  .documentos::-webkit-scrollbar-track {
    border-radius: 0.7rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }

  .documentos::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 0.7rem;
  }

  .documentos::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }

  .botao-anexar {
    border: none;
    background-color: transparent;
    margin-bottom: 18px;
    font-size: 15px;
  }

  .download {
    font-size: 6rem;
  }
`;

export default AccordionStyled;
