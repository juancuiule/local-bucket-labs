const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      /http:\/\/192.168.0.5:\d{4}/,
      /http:\/\/localhost:\d{4}/,
      /localhost/
    ],
    credentials: true,
  })
);

app.use("/common", express.static("public/common"));

app.listen(5000, () => console.log(`Server listening on port ${5000}!`));
