const express = require("express")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const libri = [
    {
      titolo: "Il Signore degli Anelli",
      autore: "J.R.R. Tolkien"
    },
    {
      titolo: "Cent'anni di solitudine",
      autore: "Gabriel García Márquez"
    }
  ];
  app.get("/", (req, res) => {
    res.send(
    `<h1>Benvenuto, aggiungi un libro!</h1>
    <a href="/add-book">clicca qui</a><br />`
    );
  });
app.get("/add-book", (req, res) => {
      res.send(`
        <form action="/books" method="POST">
          <input type="text" placeholder="Titolo del libro " name="titolo" />
          <input type="text" placeholder="Autore " name="autore" />
          <input type="submit" />
        </form>
      `);
    });

    app.post("/books", (req, res) => {

        const nuovoLibro = req.body;
        libri.push(nuovoLibro);
       
        res.redirect("/book");
      });
    

      app.get("/book", (req, res) => {
        res.json(libri);
      });


app.listen(3001)