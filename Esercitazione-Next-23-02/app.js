const express = require("express");

const bodyParser = require("body-parser");


const app = express();
const PORT = 4000;


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});




  app.post("/showData", (req, res) => {
    const { nome } = req.body;
    const { cognome } = req.body;
    const { animale } = req.body;
  
    if (nome && cognome && animale) {
      return res
        .status(200)
        .send(
          `<h1>Ciao ${nome} ${cognome}, il tuo animale preferito è il: ${animale}`
        );
    }
    res.status(400).send("per favore inserisci tutti i dati richiesti");
  });
  
  app.listen(PORT, () => {
    console.log("Server attivo");
  });