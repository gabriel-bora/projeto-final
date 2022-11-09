import * as React from "react";
import ErroLoginStyled from "./ErroLoginStyled";
import logo from "../../assets/logo-quero-quero.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErroLogin: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3500);
  });

  return (
    <ErroLoginStyled>
      <div className="fundo" id="background">
        <div className="main">
          <div className="signup d-flex justify-content-center">
            <div id="formLogin">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={logo} alt="" className="logo-quero-quero mt-5" />
              </div>
              <div className="text-center mt-5 pt-2">
                <h5 className="pt-5">Você já está logado</h5>
                <p>Para acessar com outra conta, faça logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErroLoginStyled>
  );
};

export default ErroLogin;
