const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  task: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
