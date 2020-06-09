const express = require("express");

const app = express();

app.use("/auth", express.static("public/auth"));

// no es necesario que el back haga esto, es solo para probar localmente
// y poder simular los /experimento-*
app.use("/experimento-a", express.static("public/experimento-a"));
app.use("/experimento-b", express.static("public/experimento-b"));

app.use("/", (req, res) => { res.redirect('/auth') });

app.listen(5000, () =>
  console.log(`Server listening on port ${5000}!`)
);