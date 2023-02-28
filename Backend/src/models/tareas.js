const mongoose = require("mongoose");
const usuarios = require("./usuarios");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  tarea: String,
  descripcion: String,
  estado: Boolean,
  idUsuario: { type: Schema.ObjectId, ref: usuarios }
})

module.exports = mongoose.model("tareas", taskSchema);