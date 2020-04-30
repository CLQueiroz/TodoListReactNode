const Task = require("../models/Task");
module.exports = {
  async index(req, res) {
    const Tasks = await Task.find();
    return res.json(Tasks);
  },

  async store(req, res) {
    const { task } = req.body;
    const tasks = await Task.create({ task });

    req.io.emit("tasks", tasks);
    return res.json(tasks);
  },

  async destroy(req, res) {
    await Task.findByIdAndRemove({
      _id: req.params.id
    }).then(removeTaskDoc => {
      res.send(removeTaskDoc);
    });
  },

  async updated(req, res) {
    await Task.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body
      }
    ).then(() => {
      res.sendStatus(200);
    });
    req.io.emit(`/tasks/${_id}`, tasks);
  }
};
