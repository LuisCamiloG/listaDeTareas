const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  tarea: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("tareas", userSchema);
