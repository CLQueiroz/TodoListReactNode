const express = require("express");
const routes = require("./routes");
const app = express();
const { mongoose } = require("./database/mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());
app.use(routes);

server.listen(3333);
