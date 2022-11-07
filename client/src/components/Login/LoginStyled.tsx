import styled from "styled-components";
import fundo from "../../assets/fundo-index.jpg";

const FooterStyled = styled.div`
  .fundo {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(${fundo});
    background-position: center center;
    background-size: cover;
  }

  .main {
    width: 21rem;
    height: 30rem;
    overflow: hidden;
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 5px 20px 50px #000;
  }

  #chk {
    display: none;
  }

  .signup {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .titulo-login {
    margin: 0;
  }

  label {
    color: #000000;
    font-size: 1.6rem;
    justify-content: center;
    display: flex;
    margin: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  .logo-quero-quero {
    width: 180px;
    height: auto;
  }

  .login {
    height: 30rem;
    border-radius: 60% / 10%;
    background: #216800;
    transform: translateY(-6rem);
    transition: 0.8s ease-in-out;
  }

  .login label {
    color: #ffffff;
    margin-top: 1.5rem;
    transform: scale(0.6);
    font-weight: 900;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #chk:checked ~ .login {
    transform: translateY(-25rem);
  }

  #chk:checked ~ .login label {
    transform: scale(1);
  }

  #chk:checked ~ .signup label {
    transform: scale(0.6) translateY(-4rem);
  }

  #chk:checked ~ .signup img {
    transform: scale(0.7) translateY(-3rem);
  }

  img {
    transition: 0.5s ease-in-out;
  }

  input:focus {
    outline: none;
  }

  .login__row {
    height: 2rem;
    padding-top: 1rem;
  }

  .login__input {
    border: none;
    border-bottom: 1px solid #bababd;
    border-right: 1px solid #bababd;
    display: inline-block;
    width: 10rem;
    height: 100%;
    padding-left: 0.2rem;
    font-size: 0.8rem;
    background: transparent;
    color: #bababd;
    font-weight: 400;
  }

  .login__input::placeholder {
    color: #bababd;
  }

  .input-group-text {
    border: none !important;
    background-color: transparent !important;
  }

  .basic-addon1 {
    border-bottom: 1px solid #bababd !important;
    color: #bababd !important;
  }

  .login__submit {
    --button_radius: 0.75em;
    --button_color: #fde900;
    --button_outline_color: #bababd;
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-radius: var(--button_radius);
    background: var(--button_outline_color);
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.5em 1em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  .login__submit:hover .button_top {
    transform: translateY(-0.33em);
  }

  .login__submit:active .button_top {
    transform: translateY(0);
  }

  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default FooterStyled;
