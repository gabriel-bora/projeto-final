import React from "react";
import EditStyled from "./EditStyled";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useAutocomplete,
  AutocompleteGetTagProps,
} from "@mui/base/AutocompleteUnstyled";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
  position: relative;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 96%;
  border: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 7px;
  box-sizing: content-box;
  padding: 0 10px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    margin-left: 7px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin-left: 15px;
  margin-top: -45px;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(33, 104, 0, 0.4);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(33, 104, 0, 0.7);
  }
`
);

const Edit: React.FC = () => {
  const navigate = useNavigate();

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const hoje = today.toLocaleDateString();

  const [nome, setNome] = useState<string>();
  const [id, setId] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [setor, setSetor] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [foto, setFoto] = useState<string>();

  const [idCRM, setIdCRM] = useState();
  const [idCRMDisplay, setIdCRMDisplay] = useState();
  const [versao, setVersao] = useState(1);
  const [descricao, setDescricao] = useState<string>();
  const [necessidade, setNecessidade] = useState<string>();
  const [impacto, setImpacto] = useState<string>();
  const [objetivo, setObjetivo] = useState<string>();
  const [justificativa, setJustificativa] = useState<string>();
  const [alternativa, setAlternativa] = useState<string>();
  const [data_obrigatoriedade, setData_obrigatoriedade] = useState<string>();
  const [complexidade, setComplexidade] = useState(0);
  const [sistemas_envolvidos, setSistemas_envolvidos] = useState<string[]>([]);
  const [setores_envolvidos, setSetores_envolvidos] = useState<string[]>();
  const [comportamento_offline, setComportamento_offline] = useState<string>();
  const [dependencia_outro_crm, setDependendia_outro_crm] = useState<string>();
  const [numero_crm_dependencia, setNumero_dependencia_crm] =
    useState<number>();
  const [documento_anexo, setDocumento_anexo] = useState<string>();
  const [nomedocumento, setNomedocumento] = useState<string>();

  interface FilmOptionType {
    setor: string;
  }

  const [showElement3, setShowElement3] = useState(true);
  const showOrHide3 = () => setShowElement3(true);
  const showOrHide = () => setShowElement3(false);

  const [listaSetores, setListaSetores] = useState<FilmOptionType[]>([
    { setor: "Administrativo" },
    { setor: "Comercial" },
    { setor: "Compras" },
    { setor: "Contabilidade" },
    { setor: "Financeiro" },
    { setor: "Marketing" },
    { setor: "Mercantil" },
    { setor: "Operações" },
    { setor: "RH" },
    { setor: "TI" },
  ]);

  const listaSistemas = ["CLIQQ", "PDV", "VERDECARD", "SAP", "VCS"];

  useEffect(() => {
    let usuario = localStorage.getItem("usuario-logado");
    axios
      .post("http://localhost:3001/getUser", { usuario: usuario })
      .then((response) => {
        setNome(response.data.nome);
        setId(response.data.matricula);
        setTelefone(response.data.telefone);
        setSetor(response.data.setor);
        setEmail(response.data.email);
        setFoto(response.data.foto_perfil);
      });
    let id_crm = Number(localStorage.getItem("id-crm"));
    let versao_crm = Number(localStorage.getItem("versao-crm"));
    axios
      .post("http://localhost:3001/getCRMEdit", {
        id: id_crm,
        versao_crm: versao_crm,
      })
      .then((response) => {
        setIdCRM(response.data.id);
        const n = response.data.id.toLocaleString("en-US", {
          minimumIntegerDigits: 5,
          useGrouping: false,
        });
        setIdCRMDisplay(n);
        setNecessidade(response.data.necessidade);
        setImpacto(response.data.impacto);
        setDescricao(response.data.descricao);
        setObjetivo(response.data.objetivo);
        setJustificativa(response.data.justificativa);
        setAlternativa(response.data.alternativas);
        setVersao(response.data.versao_crm + 1);
        setData_obrigatoriedade(response.data.data_obrigatoriedade);
        setComportamento_offline(response.data.comportamento_offline);
        setSetores_envolvidos(JSON.parse(response.data.setores_envolvidos));
        setSistemas_envolvidos(JSON.parse(response.data.sistemas_envolvidos));
        setDependendia_outro_crm(response.data.dependencia_outro_crm);
        setNumero_dependencia_crm(response.data.numero_crm_dependencia);
      });
  }, []);

  function criarCRM(e: any) {
    e.preventDefault();
    let listaSetoresCheck: any = [];
    valor.map((value) => {
      listaSetoresCheck.push(value.setor);
    });
    axios
      .post("http://localhost:3001/createCRM", {
        id: idCRM,
        versao_crm: versao,
        colaborador_setor: setor,
        colaborador_id: id,
        descricao: descricao,
        necessidade: necessidade,
        impacto: impacto,
        objetivo: objetivo,
        justificativa: justificativa,
        alternativas: alternativa,
        data_obrigatoriedade: data_obrigatoriedade,
        complexidade: complexidade,
        setores_envolvidos: JSON.stringify(listaSetoresCheck),
        sistemas_envolvidos: JSON.stringify(sistemas_envolvidos),
        comportamento_offline: comportamento_offline,
        dependencia_outro_crm: dependencia_outro_crm,
        numero_crm_dependencia: numero_crm_dependencia,
        documento_anexo: documento_anexo,
        nome_documento: nomedocumento,
        data_inicio: today,
      })
      .then((response) => {
        alert(response.data);
        navigate("/home");
      });
  }

  let setores: FilmOptionType[] = [listaSetores[0], listaSetores[5]];

  console.log(setores);

  const fixedOptions = [listaSetores[9]];
  const [valor, setValor] = React.useState([...fixedOptions, ...setores]);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [],
    multiple: true,
    options: listaSetores,
    value: valor,
    onChange: (event, newValue) => {
      setValor([
        ...fixedOptions,
        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
      ]);
    },
    getOptionLabel: (option) => option.setor,
  });

  function convertFile(files: FileList | null, values: string | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log(fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setDocumento_anexo(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
    if (values) {
      var filename = values.replace(/^.*\\/, "");
      setNomedocumento(filename);
    }
  }

  return (
    <EditStyled foto_perfil={foto}>
      <section>
        <div className="div-form mt-4">
          <div className="posicao-form">
            <form action="">
              <h1>Número de cadastro da CRM:{idCRMDisplay}</h1>
              <h3>Responsável:</h3>
              <div className="div-usuario">
                <div className="foto-usuario"></div>
                <p className="texto-usuario ms-3">
                  Nome: {nome}
                  <br />
                  Matrícula: {id}
                  <br />
                  Setor: {setor}
                  <br />
                  Telefone: {telefone}
                  <br />
                  E-mail: {email}
                </p>
              </div>
              <Root>
                <div {...getRootProps()} className="mt-3">
                  <Label {...getInputLabelProps()}>Setores Envolvidos:</Label>
                  <InputWrapper
                    ref={setAnchorEl}
                    className={focused ? "focused" : ""}
                  >
                    <input {...getInputProps()} />
                    {value.map((option: FilmOptionType, index: number) => (
                      <StyledTag
                        label={option.setor}
                        {...getTagProps({ index })}
                      />
                    ))}
                  </InputWrapper>
                </div>
                {groupedOptions.length > 0 ? (
                  <Listbox {...getListboxProps()}>
                    {(groupedOptions as typeof listaSetores).map(
                      (option, index) => (
                        <li {...getOptionProps({ option, index })}>
                          <span>{option.setor}</span>
                          <CheckIcon fontSize="small" />
                        </li>
                      )
                    )}
                  </Listbox>
                ) : null}
              </Root>
              <label htmlFor="necessidade" className="pt-3">
                Necessidade:
              </label>
              <textarea
                id=""
                name="necessidade"
                className="input-objetivo"
                value={necessidade}
                onChange={(e) => setNecessidade(e.target.value)}
              />
              <label htmlFor="impacto" className="pt-3">
                Impacto:
              </label>
              <textarea
                name="impacto"
                id=""
                className="input-objetivo"
                value={impacto}
                onChange={(e) => setImpacto(e.target.value)}
              />
              <label htmlFor="descricao" className="pt-3">
                Descrição:
              </label>
              <textarea
                name="descricao"
                id=""
                className="input-descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <label htmlFor="objetivo">Objetivo:</label>
              <textarea
                name="objetivo"
                id=""
                className="input-descricao"
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
              />
              <label htmlFor="justificativa">Justificativa:</label>
              <textarea
                name="justificativa"
                id=""
                className="input-descricao"
                value={justificativa}
                onChange={(e) => setJustificativa(e.target.value)}
              />
              <label htmlFor="alternativa">Alternativas:</label>
              <textarea
                name="alternativa"
                id=""
                className="input-descricao"
                value={alternativa}
                onChange={(e) => setAlternativa(e.target.value)}
              />
              <div className="div-versao-data">
                <div className="div-usuario">
                  <p>Versão:</p>
                  <p className="ps-2">v{versao}</p>
                </div>
                <div className="div-usuario">
                  <p>Data criação:</p>
                  <p className="ps-2">{hoje}</p>
                </div>
              </div>
              <label htmlFor="data-legal">
                Data Obrigatoriedade Legal &#40;caso exista&#41;:
              </label>
              <input
                type="date"
                name="data-legal"
                id=""
                className="input-data-legal"
                value={data_obrigatoriedade}
                onChange={(e) => setData_obrigatoriedade(e.target.value)}
              />
              <br />
              <h3 className="mt-3">Sistemas envolvidos na mudança:</h3>
              <div className="d-flex justify-content-between me-5">
                {listaSistemas.map((value) =>
                  sistemas_envolvidos.includes(value) ? (
                    <div>
                      <label htmlFor={value} className="label-checkbox">
                        {value}:
                      </label>
                      <input
                        type="checkbox"
                        name={value}
                        value={value}
                        id=""
                        className="checkbox ms-1"
                        onChange={(e) =>
                          setSistemas_envolvidos(
                            sistemas_envolvidos?.concat(e.target.value)
                          )
                        }
                        checked
                      />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor={value} className="label-checkbox">
                        {value}:
                      </label>
                      <input
                        type="checkbox"
                        name={value}
                        value={value}
                        id=""
                        className="checkbox ms-1"
                        onChange={(e) =>
                          setSistemas_envolvidos(
                            sistemas_envolvidos?.concat(e.target.value)
                          )
                        }
                      />
                    </div>
                  )
                )}
              </div>
              <label className="mt-3" htmlFor="comportamento-offline">
                Comportamento Offline &#40;time Mercantil&#41;:
              </label>
              <textarea
                name="comportamento-offline"
                id=""
                className="input-justificativa"
                value={comportamento_offline}
                onChange={(e) => setComportamento_offline(e.target.value)}
              />
              <h3 className="mt-3">
                Essa CRM depende de outro desenvolvimento?
              </h3>
              <div className="d-flex justify-content-start">
                {dependencia_outro_crm === "sim" ? (
                  <>
                    <label className="label-checkbox">
                      Sim:
                      <input
                        type="radio"
                        name="depende"
                        value="sim"
                        id=""
                        className="checkbox ms-1"
                        onChange={(e) =>
                          setDependendia_outro_crm(e.target.value)
                        }
                        onClick={showOrHide3}
                        checked
                      />
                    </label>
                    <label className="label-checkbox ms-2">
                      Não:
                      <input
                        type="radio"
                        name="depende"
                        value="nao"
                        id=""
                        className="checkbox ms-1"
                        onChange={(e) =>
                          setDependendia_outro_crm(e.target.value)
                        }
                        onClick={showOrHide}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <label className="label-checkbox">
                      Sim:
                      <input
                        type="radio"
                        name="depende"
                        value="sim"
                        id=""
                        className="checkbox ms-1"
                        onChange={(e) =>
                          setDependendia_outro_crm(e.target.value)
                        }
                        onClick={showOrHide3}
                      />
                    </label>
                    <label className="label-checkbox ms-2">
                      Não:
                      <input
                        type="radio"
                        name="depende"
                        value="nao"
                        id=""
                        className="checkbox ms-1"
                        onChange={(e) =>
                          setDependendia_outro_crm(e.target.value)
                        }
                        onClick={showOrHide}
                        checked
                      />
                    </label>
                  </>
                )}
              </div>
              {showElement3 ? (
                <div>
                  <label htmlFor="numero-dependencia">
                    Número CRM necessário:
                  </label>
                  <input
                    type="text"
                    name="numero-dependencia"
                    id=""
                    className="input-data-legal"
                    value={numero_crm_dependencia}
                    onChange={(e) =>
                      setNumero_dependencia_crm(Number(e.target.value))
                    }
                  />
                </div>
              ) : null}
              <label className="mt-3" htmlFor="documentos">
                Documentos:
              </label>
              <div className="input-documentos d-flex">
                {documento_anexo && (
                  <>
                    {documento_anexo.indexOf("image/") > -1 && (
                      <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                        <i className="far fa-file-image download"></i>
                        <p className="texto-usuario">{nomedocumento}</p>
                      </div>
                    )}
                    {documento_anexo.indexOf("application/pdf") > -1 && (
                      <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                        <i className="far fa-file-pdf download"></i>
                        <p className="texto-usuario">{nomedocumento}</p>
                      </div>
                    )}
                    {documento_anexo.indexOf("application/msword") > -1 && (
                      <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                        <i className="far fa-file-word download"></i>
                        <p className="texto-usuario">{nomedocumento}</p>
                      </div>
                    )}
                    {documento_anexo.indexOf(
                      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    ) > -1 && (
                      <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                        <i className="far fa-file-excel download"></i>
                        <p className="texto-usuario">{nomedocumento}</p>
                      </div>
                    )}
                    {documento_anexo.indexOf("text/plain") > -1 && (
                      <div className="ms-3 mt-4 pt-2 d-flex flex-column align-items-center arquivos text-center">
                        <i className="far fa-file-lines download"></i>
                        <p className="texto-usuario">{nomedocumento}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
              <br />
              <label htmlFor="" className="anexar">
                <i className="fa-solid fa-upload"></i>
                Anexar documentos
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => convertFile(e.target.files, e.target.value)}
                />
              </label>
              <div className="div-salvar">
                <button
                  type="submit"
                  className="botao-salvar"
                  onClick={criarCRM}
                >
                  SALVAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </EditStyled>
  );
};

export default Edit;
