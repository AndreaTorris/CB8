const express = require("express");


const app = express();
const PORT = 3123;

app.use(express.json());


let cellulari = [
    {
      id: 1,
      modello: "Samsung Galaxy S23 Ultra",
      prezzo: 1249.00,
    },
    {
      id: 2,
      modello: "Apple iPhone 15 Pro Max",
      prezzo: 1349.00,
    },
    {
      id: 3,
      modello: "Google Pixel 7 Pro",
      prezzo: 999.00,
    },
    {
      id: 4,
      modello: "Xiaomi 13 Pro",
      prezzo: 899.00,
    },
    {
      id: 5,
      modello: "OnePlus 11 Pro",
      prezzo: 919.00,
    },
  ];



  app.get("/phones", (req, res, next) => {
    res.json(cellulari);
  });


  app.post("/phones", (req, res, next) => {
    const body = req.body;
  
    if (body.id && body.modello && body.prezzo) {
        cellulari.push(body);
      res.status(201).send("Nuovo Smartphone Aggiunto");
    } else {
      res.status(400).send(`La struttura dell'oggetto non è valida`);
    }
  });

  app.delete("/phones/:id", (req, res, next) => {
    const id = Number(req.params.id);
  
    cellulari = cellulari.filter((cellulare) => cellulare.id !== id);
    res.send("Smartphone Eliminato");
  });

  app.put("/phones/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const body = req.body;
    const index = cellulari.findIndex((cellulare) => cellulare.id === id);
  
    if (index === -1) {
      res.status(400).send("Non ho trovato l'oggetto da modificare");
    } else {
        cellulari[index] = body;
      res.send("Smartphone Updated");
    }
  });
  app.listen(PORT);