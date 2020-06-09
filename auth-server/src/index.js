require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");
const authController = require("./controllers/auth");
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5000',
      'localhost:5000',
    ], // habilitar pedidos desde el front
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/register", authController.register);
app.post("/api/login", authController.login);
app.post("/api/logout", authController.logout);
app.get("/api/check", authController.checkLogin);
app.post("/api/refresh_token", authController.refreshToken);

app.listen(4000, () =>
  console.log(`Server listening on port ${4000}!`)
);