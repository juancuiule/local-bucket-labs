const express = require("express");
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: [
      /http:\/\/localhost:\d{4}/,
      /localhost/
    ], // habilitar pedidos desde el front
    credentials: true,
  }),
);

app.use("/common", express.static("public/common"));

app.listen(5000, () =>
  console.log(`Server listening on port ${5000}!`)
);