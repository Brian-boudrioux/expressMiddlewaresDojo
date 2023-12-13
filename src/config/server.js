const express = require("express");
const server = express();
const usersRouter = require("../routes/users.route");
const errorHandler = require("../middlewares/errorHandler");

server.use(express.json());

// config routes here
server.get("/", (req, res) => {
  res.json("Welcome to pets api");
});

// albums routes
server.use(usersRouter);

server.use(errorHandler);

module.exports = server;
