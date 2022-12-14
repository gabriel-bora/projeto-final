const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");
const cors = require("cors");
const bp = require("body-parser");
const nodemailer = require("nodemailer");

const sequelize = new Sequelize("projetofinal", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bp.json({ limit: "50mb" }));
app.use(bp.urlencoded({ limit: "50mb", extended: true }));

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "statuscrm.queroquero@gmail.com",
    pass: "dzuswsvhxrbycwhd",
  },
});

const Colaborador = sequelize.define(
  "Colaborador",
  {
    matricula: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    setor: {
      type: DataTypes.STRING,
      defaultValue: "Sem setor",
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    foto_perfil: {
      type: DataTypes.STRING,
      defaultValue:
        "data:image/jpeg;base64,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",
    },
  },
  {
    timestamps: false,
  }
);

const CRM = sequelize.define(
  "CRM",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    versao_crm: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: 1,
    },
    colaborador_setor: DataTypes.STRING,
    colaborador_id: DataTypes.STRING,
    descricao: DataTypes.STRING,
    necessidade: DataTypes.STRING,
    impacto: DataTypes.STRING,
    objetivo: DataTypes.STRING,
    justificativa: DataTypes.STRING,
    alternativas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_obrigatoriedade: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    complexidade: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    impacto_ti: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    setores_envolvidos: {
      type: DataTypes.STRING,
    },
    sistemas_envolvidos: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comportamento_offline: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dependencia_outro_crm: {
      type: DataTypes.STRING,
      defaultValue: "nao",
    },
    numero_crm_dependencia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    documento_anexo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nome_documento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_inicio: DataTypes.DATE,
    data_arquivamento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

const Aceite = sequelize.define(
  "Aceite",
  {
    idAceite: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    colaborador_id: DataTypes.STRING,
    colaborador_setor: DataTypes.STRING,
    colaborador_nome: DataTypes.STRING,
    colaborador_telefone: DataTypes.STRING,
    colaborador_email: DataTypes.STRING,
    colaborador_foto: DataTypes.STRING,
    crm_id: DataTypes.INTEGER,
    crm_versao: DataTypes.INTEGER,
    aceite: DataTypes.STRING,
    justificativa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    documento_justificativa: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nome_documento_justificativa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

const Notificacoe = sequelize.define(
  "Notificacoe",
  {
    idNotificacao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_remetente: DataTypes.STRING,
    matricula_destinatario: DataTypes.STRING,
    informacao: DataTypes.STRING,
    id_crm: DataTypes.NUMBER,
    versao_crm: DataTypes.NUMBER,
  },
  {
    timestamps: false,
  }
);

app.post("/login", (req, res) => {
  Colaborador.findOne({ where: { matricula: req.body.matricula } }).then(
    (data) => {
      if (data == null) {
        res.send("Usu??rio n??o encontrado!");
      } else {
        if (req.body.senha === data.senha) {
          res.send(data);
        } else {
          res.send("Senha incorreta!");
        }
      }
    }
  );
});

app.post("/createUser", (req, res) => {
  Colaborador.create({
    matricula: req.body.matricula,
    setor: req.body.setor,
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    telefone: req.body.telefone,
    email: req.body.email,
    senha: req.body.senha,
  }).then(() => {
    res.send("Cadastro criado!");
  });
});

app.post("/updateUser", (req, res) => {
  Colaborador.update(
    {
      setor: req.body.setor,
      telefone: req.body.telefone,
      email: req.body.email,
      senha: req.body.senha,
      foto_perfil: req.body.foto_perfil,
    },
    {
      where: {
        matricula: req.body.matricula,
      },
    }
  ).then(() => {
    res.send("Cadastro atualizado!");
  });
});

app.post("/getUser", (req, res) => {
  Colaborador.findOne({ where: { matricula: req.body.usuario } }).then(
    (data) => {
      res.send(data);
    }
  );
});

app.post("/createCRM", (req, res) => {
  CRM.create({
    id: req.body.id,
    versao_crm: req.body.versao_crm,
    colaborador_setor: req.body.colaborador_setor,
    colaborador_id: req.body.colaborador_id,
    descricao: req.body.descricao,
    necessidade: req.body.necessidade,
    impacto: req.body.impacto,
    objetivo: req.body.objetivo,
    justificativa: req.body.justificativa,
    alternativas: req.body.alternativas,
    data_obrigatoriedade: req.body.data_obrigatoriedade,
    complexidade: req.body.complexidade,
    setores_envolvidos: req.body.setores_envolvidos,
    sistemas_envolvidos: req.body.sistemas_envolvidos,
    comportamento_offline: req.body.comportamento_offline,
    dependencia_outro_crm: req.body.dependencia_outro_crm,
    numero_crm_dependencia: req.body.numero_crm_dependencia,
    documento_anexo: req.body.documento_anexo,
    nome_documento: req.body.nome_documento,
    data_inicio: req.body.data_inicio,
  }).then(() => {
    res.send("CRM criada!");
  });
});

app.get("/getMaxCRM", (req, res) => {
  sequelize.query("SELECT MAX(id) AS 'valor' FROM CRMs").then((data) => {
    res.send(data);
  });
});

app.post("/getMaxVersion", (req, res) => {
  sequelize
    .query(
      `SELECT MAX(versao_crm) AS 'valor' FROM CRMs WHERE id = ${req.body.id}`
    )
    .then((data) => {
      res.send(data);
    });
});

app.get("/getAllCRMs", (req, res) => {
  sequelize
    .query(
      "SELECT * FROM CRMs INNER JOIN Colaboradors ON CRMs.colaborador_id=Colaboradors.matricula;"
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/getSearchCRMs", (req, res) => {
  sequelize
    .query(
      `SELECT * FROM CRMs INNER JOIN Colaboradors ON CRMs.colaborador_id=Colaboradors.matricula WHERE id=${req.body.pesquisa};`
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/getSearchName", (req, res) => {
  sequelize
    .query(
      `SELECT * FROM CRMs INNER JOIN Colaboradors ON CRMs.colaborador_id=Colaboradors.matricula WHERE nome LIKE CONCAT('%','${req.body.pesquisa}','%');`
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/getSearchDate", (req, res) => {
  sequelize
    .query(
      `SELECT * FROM CRMs INNER JOIN Colaboradors ON CRMs.colaborador_id=Colaboradors.matricula WHERE data_inicio='${req.body.pesquisa}';`
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/getSearchDateArq", (req, res) => {
  sequelize
    .query(
      `SELECT * FROM CRMs INNER JOIN Colaboradors ON CRMs.colaborador_id=Colaboradors.matricula WHERE data_arquivamento='${req.body.pesquisa}';`
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/updateCRM", (req, res) => {
  CRM.update(
    {
      data_arquivamento: req.body.data_arquivamento,
    },
    {
      where: {
        id: req.body.id,
        versao_crm: req.body.versao_crm,
      },
    }
  ).then(() => {
    res.send(`CRM arquivada!`);
  });
});

app.post("/updateCRM_TI", (req, res) => {
  CRM.update(
    {
      complexidade: req.body.complexidade,
      impacto_ti: req.body.impacto_ti,
    },
    {
      where: {
        id: req.body.id,
        versao_crm: req.body.versao_crm,
      },
    }
  ).then(() => {
    res.send(`CRM atualizada`);
  });
});

app.post("/getCRMEdit", (req, res) => {
  CRM.findOne({
    where: { id: req.body.id, versao_crm: req.body.versao_crm },
  }).then((data) => {
    res.send(data);
  });
});

app.post("/createAccept", (req, res) => {
  Aceite.create({
    colaborador_id: req.body.colaborador_id,
    colaborador_setor: req.body.colaborador_setor,
    colaborador_nome: req.body.colaborador_nome,
    colaborador_telefone: req.body.colaborador_telefone,
    colaborador_email: req.body.colaborador_email,
    colaborador_foto: req.body.colaborador_foto,
    crm_id: req.body.crm_id,
    crm_versao: req.body.crm_versao,
    aceite: req.body.aceite,
    justificativa: req.body.justificativa,
    documento_justificativa: req.body.documento_justificativa,
    nome_documento_justificativa: req.body.nome_documento_justificativa,
  }).then(() => {
    if (req.body.aceite === "sim") {
      res.send(
        `CRM aceita pelo setor ${req.body.colaborador_setor} com sucesso!`
      );
    } else {
      res.send(`CRM rejeitada pelo setor ${req.body.colaborador_setor}.`);
    }
  });
});

app.post("/getAccepts", (req, res) => {
  Aceite.findAll({
    where: { crm_id: req.body.id, crm_versao: req.body.versao_crm },
  }).then((data) => {
    res.send(data);
  });
});

app.post("/emailCRM", (req, res) => {
  req.body.setor.map((value) =>
    sequelize
      .query(`SELECT email FROM Colaboradors WHERE setor = '${value}';`)
      .then((data) => {
        transporter
          .sendMail({
            from: "Status CRM QQ <statuscrm.queroquero@gmail.com>",
            to: data[0][0].email,
            subject: `${req.body.usuario} criou a CRM ${req.body.crm} v${req.body.versao}`,
            html: `<div style="width: 600px; height: 200px; border: 1px solid #216800">
            <div
              style="
              width: 600px; height: 80px; background-color: #216800
              "
            >
              <img
                src="https://seeklogo.com/images/Q/Quero_Quero-logo-523B9438CE-seeklogo.com.png"
                alt=""
                style="width: auto;
                height: 50px;
                margin-left: 230px;
                margin-top: 15px;"
              />
            </div>
            <div
              style="
                width: 600px;
                height: 80px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <p
                style="
                font-size: 20px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin-left: 145px;
                margin-top: 18px;
                text-align: center;
                "
              >
                ${req.body.usuario} criou a CRM ${req.body.crm} v${req.body.versao}
                <br />
                Seu setor est?? envolvido nela.
                <br />
                Verifique a CRM dentro da
                <a href="http://localhost:3000/projeto-final-crm">aplica????o</a>.
              </p>
            </div>
          </div>`,
          })
          .then((message) => {
            console.log(message);
          })
          .catch((err) => {
            console.log(err);
          });
      })
  );
});

app.post("/emailAccept", (req, res) => {
  transporter
    .sendMail({
      from: "Status CRM QQ <statuscrm.queroquero@gmail.com>",
      to: req.body.email,
      subject: `${req.body.usuario} ${req.body.mensagem} a CRM ${req.body.crm} v${req.body.versao}`,
      html: `<div style="width: 600px; height: 200px; border: 1px solid #216800">
      <div style="width: 600px; height: 80px; background-color: #216800">
        <img
          src="https://seeklogo.com/images/Q/Quero_Quero-logo-523B9438CE-seeklogo.com.png"
          alt=""
          style="
            width: auto;
            height: 50px;
            margin-left: 230px;
            margin-top: 15px;
          "
        />
      </div>
      <div style="width: 600px; height: 80px; background-color: #fff">
        <p
          style="
            font-size: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin-left: 10px;
            margin-top: 18px;
            text-align: center;
          "
        >
        ${req.body.usuario} ${req.body.mensagem} a CRM ${req.body.crm} v${req.body.versao}
          <br />
          Voc?? ?? o respons??vel por ela.
          <br />
          Verifique a CRM dentro da
          <a href="http://localhost:3000/projeto-final-crm">aplica????o</a>.
        </p>
      </div>
    </div>`,
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3001, () => {
  console.log("Rodando servidor");
});
