const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { RiTruckLine } = require("react-icons/ri");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestionevaluation",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/ProfileGet", (req, res) => {
  const sqlSelect = "SELECT * FROM etudiant";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});
// Authentification etudiant

app.post("/etudiant", (req, res) => {
  const identifiant = req.body.identifiant;
  const password = req.body.password;
});
app.get("/etudiant", (req, res) => {
  db.query(
    "select Identifiant,password,Filiere from etudiant;",
    (err, result) => {
      res.send(result);
    }
  );
});

//  Global
app.post("/", (req, res) => {
  const module = req.body.module;
  const responsable = req.body.responsable;
  const Description = req.body.Description;
  const sqlInsert =
    "Insert into consultationcopie(module,responsable,Description) values(?,?,?)";

  db.query(sqlInsert, [module, responsable, Description], (err, result) => {
    res.send("hello world");
  });
});
// Professeur
app.post("/professeur", (req, res) => {
  const identifiant = req.body.identifiant;
  const password = req.body.password;
});
app.get("/professeur", (req, res) => {
  db.query("select Identifiant,password,Module from enseignant;", (err, result) => {
    res.send(result);
  });
});

// Convocation

app.get("/Convocation2", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);
  db.query(
    "select Nom,Prenom,APOGE,LieuExamen from convocation where APOGE = ?",
    [test],
    (err, result) => {
      res.send(result);
      console.log(result);
    }
  );
});

// The convocation table

app.post("/Convocation2", (req, res) => {
  const test = req.body.test;
  console.log("lol");
});

app.get("/Convocation3", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);

  db.query(
    "select Nom,Prenom,Identifiant,Filiere from etudiant where Identifiant = ?",
    [test],
    (err, result) => {
      let the_filiere = result[0].Filiere;
      console.log(the_filiere);
      db.query(
        "select Module,Salle,Date,Heure,Duree,Filiere from examens where Filiere = ? ",
        the_filiere,
        (err, result) => {
          console.log("here ?");
          console.log(result);
          res.send(result);
          console.log("after");
        }
      );
    }
  );
});

app.post("/Convocation2", (req, res) => {
  // const test = req.body.test;
  console.log("lol");
});

// Résultats finaux

app.get("/Resultatfinaux", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);
  db.query(
    "select Module,Note,Resultat,APOGE from resultatsfinaux where APOGE = ?;",
    [test],
    (err, result) => {
      res.send(result);
      //    console.log(result);
    }
  );
});

// The Students Navbar
app.get("/NavbarEtudiant", (req, res) => {
    let test = req.query["answer"];
    console.log("Testing");
    console.log(test);
    db.query(
      "select Message,Apoge from notificationetudiant where Apoge = ?",
      [test],
      (err, result) => {
        let the_filiere = result[0].Filiere;
        console.log(the_filiere);
        console.log("here ?");
        console.log(result);
        res.send(result);
        console.log("after");
      }
    );
  });

// The Teachers Navbar
app.get("/NavbarEnseignant", (req, res) => {
    let test = req.query["answer"];
    console.log("Testing");
    console.log(test);
    db.query(
      "select Email,Message from notificationenseignant where Email = ?",
      [test],
      (err, result) => {
        let the_filiere = result[0].Filiere;
        console.log(the_filiere);
        console.log("here ?");
        console.log(result);
        res.send(result);
        console.log("after");
      }
    );
  });

// Profil :
app.get("/Profil", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);
  db.query(
    "select Identifiant,Filiere from etudiant where Identifiant=? ;",
    [test],
    (err, result) => {
      console.log(result);
      console.log("The filiere is " + result[0].Filiere);
      db.query(
        "select Module,Filiere from examens where Filiere = ?;",
        result[0].Filiere,
        (err, result) => {
          res.send(result);
          console.log(result);
        }
      );
    }
  );
});
// For the email
app.get("/Profil2", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);
  db.query(
    "select EmailInstitutionnel,Prenom,Nom,Identifiant from etudiant where Identifiant = ?",
    [test],
    (err, result) => {
      let the_filiere = result[0].Filiere;
      console.log(the_filiere);
      console.log("here ?");
      console.log(result);
      res.send(result);
      console.log("after");
    }
  );
});


app.post("/Profil", (req, res) => {
  console.log("lol");
});
app.post("/Profil2", (req, res) => {
  console.log("lol");
});

app.post("/Convocation2", (req, res) => {
  // const test = req.body.test;
  console.log("lol");
});

// Surveillance :
app.post("/Surveillance", (req, res) => {
  // const test = req.body.test;
  console.log("lol");
});
app.get("/Surveillance", (req, res) => {
  let test = req.query["answer"];
  console.log("Testing");
  console.log(test);
  db.query(
    "select Email,Date,Heure,Module,Responsable,Salle from surveillance where Email = ?;",
    [test],
    (err, result) => {
      console.log("???");
      res.send(result);
      console.log(result);
    }
  );
});
// Demande de copies 
app.post("/DemandeCopies", (req, res) => {
    // const test = req.body.test;
    console.log("lol");
  });
  app.get("/DemandeCopies", (req, res) => {
    let test = req.query["answer"];
    console.log("Testing");
    console.log(test);
    db.query(
      "select Module,Apoge,EmailEtudiant,Module,Message from demandesconsultationcopie where Module = ?;",
      [test],
      (err, result) => {
        console.log("???");
        res.send(result);
        console.log(result);
      }
    );
  });
// Prevenir Examen
app.get("/PrevenirExamen", (req, res) => {
  res.send("Testing Attention");
});
app.post("/PrevenirExamen", (req, res) => {
  const Module = req.body.Module;
  const Mode = req.body.Mode;
  const Presentiel = req.body.Presentiel;
  const SalleTP = req.body.SalleTP;
  const sqlInsert =
    "Insert into prevenirexamen(Module,Mode,Presentiel,SalleTP) values(?,?,?,?)";
  db.query(sqlInsert, [Module, Mode, Presentiel, SalleTP], (err, result) => {
    res.send("hello world");
  });
});

// Description du jour
app.get("/DescriptionDuJour", (req, res) => {
  res.send("Testing Attention");
});
app.post("/DescriptionDuJour", (req, res) => {
  const NbrEtudiants = req.body.NbrEtudiants;
  const NbrCopies = req.body.NbrCopies;
  const Anomalies = req.body.Anomalies;
  const sqlInsert =
    "Insert into descriptiondujour(NbrEtudiants,NbrCopies,Anomalies) values(?,?,?)";
  db.query(sqlInsert, [NbrEtudiants, NbrCopies, Anomalies], (err, result) => {
    res.send("hello world");
  });
});
app.post("/PvEvaluation", (req, res) => {
  const Module = req.body.Module;
  const SalleEvaluation = req.body.SalleEvaluation;
  const JourEvaluation = req.body.JourEvaluation;
  const sqlInsert =
    "Insert into pvevaluation(Module,SalleEvaluation,JourEvaluation) values(?,?,?)";
  db.query(
    sqlInsert,
    [Module, SalleEvaluation, JourEvaluation],
    (err, result) => {
      res.send("hello world");
    }
  );
});
app.listen(3001, () => {
  console.log("running on port 3001");
});
