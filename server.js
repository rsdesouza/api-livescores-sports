const express = require("express");
const cors = require("cors");

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const mongoose = require("mongoose");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao banco de dados!");
  })
  .catch(err => {
    console.log("Não foi possível conectar ao banco de dados!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo à aplicação da Sports A&T." });
});

require("./app/routes/events.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}.`);
});