const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/TodoList", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(e => {
    console.log("Error While attempting to connect to MongoDB");
    console.log(e);
  });

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", true);

module.exports = {
  mongoose
};
