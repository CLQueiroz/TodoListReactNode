const express = require("express");
const routes = express.Router();

const TaskController = require("./controllers/TaskController");

routes.get("/task", TaskController.index);
routes.post("/tasks", TaskController.store);
routes.delete("/tasks/:id/", TaskController.destroy);
routes.patch("/tasks/:id/", TaskController.updated);

module.exports = routes;
