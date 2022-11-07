import React, { useState } from "react";
import UserAcceptStyled from "./UserAcceptStyled";
import "moment/locale/pt-br";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface DadosUserAccept {
  colaborador_setor: string;
  colaborador_id: string;
  colaborador_nome: string;
  colaborador_telefone: string;
  colaborador_email: string;
  colaborador_foto_perfil: string;
  aceite: string;
  justificativa: string;
  documento_justificativa: string;
  nome_documento_justificativa: string;
}

const Accordion: React.FC<DadosUserAccept> = ({
  colaborador_setor,
  colaborador_id,
  colaborador_nome,
  colaborador_telefone,
  colaborador_email,
  colaborador_foto_perfil,
  aceite,
  justificativa,
  documento_justificativa,
  nome_documento_justificativa,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <UserAcceptStyled colaborador_foto_perfil={colaborador_foto_perfil}>
      <h6 className="ps-3 pt-1">{colaborador_setor}:</h6>
      <div className="ps-3 d-flex">
        <div className="foto-colaborador mt-2"></div>
        <div className="ps-4">
          <p className="texto-usuario">Nome: {colaborador_nome}</p>
          <p className="texto-usuario">Matrícula: {colaborador_id}</p>

          <p className="texto-usuario">Telefone: {colaborador_telefone}</p>
          <p className="texto-usuario">E-mail: {colaborador_email}</p>
        </div>
        <div className="pt-2">
          {aceite === "sim" ? (
            <i className="fa-solid fa-circle-check check-setor"></i>
          ) : (
            <>
              <button className="div-reject" onClick={handleShow}>
                <i className="fa-solid fa-times-circle reject-setor"></i>
              </button>
              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Justificativa rejeição setor {colaborador_setor}:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h6 className="pt-3">Justificativa:</h6>
                  <div className="texto-usuario ps-3">{justificativa}</div>
                  <h6 className="pt-3">Anexos:</h6>
                  <div className="ms-3 input-documentos">
                    <div className="d-flex">
                      {documento_justificativa && (
                        <>
                          {documento_justificativa.indexOf("image/") > -1 && (
                            <a
                              href={documento_justificativa}
                              download={nome_documento_justificativa}
                              className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center"
                            >
                              <i className="far fa-file-image download"></i>
                              <p className="texto-usuario">
                                {nome_documento_justificativa}
                              </p>
                            </a>
                          )}
                          {documento_justificativa.indexOf("application/pdf") >
                            -1 && (
                            <a
                              href={documento_justificativa}
                              download={nome_documento_justificativa}
                              className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center"
                            >
                              <i className="far fa-file-pdf download"></i>
                              <p className="texto-usuario">
                                {nome_documento_justificativa}
                              </p>
                            </a>
                          )}
                          {documento_justificativa.indexOf(
                            "application/msword"
                          ) > -1 && (
                            <a
                              href={documento_justificativa}
                              download={nome_documento_justificativa}
                              className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center"
                            >
                              <i className="far fa-file-word download"></i>
                              <p className="texto-usuario">
                                {nome_documento_justificativa}
                              </p>
                            </a>
                          )}
                          {documento_justificativa.indexOf(
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ) > -1 && (
                            <a
                              href={documento_justificativa}
                              download={nome_documento_justificativa}
                              className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center"
                            >
                              <i className="far fa-file-excel download"></i>
                              <p className="texto-usuario">
                                {nome_documento_justificativa}
                              </p>
                            </a>
                          )}
                          {documento_justificativa.indexOf("text/plain") >
                            -1 && (
                            <a
                              href={documento_justificativa}
                              download={nome_documento_justificativa}
                              className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center"
                            >
                              <i className="far fa-file-lines download"></i>
                              <p className="texto-usuario">
                                {nome_documento_justificativa}
                              </p>
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="warning" onClick={handleClose}>
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </div>
      </div>
    </UserAcceptStyled>
  );
};

export default Accordion;
