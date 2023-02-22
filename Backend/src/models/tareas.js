const mongoose = require("mongoose");
const usuarios = require("./usuarios");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  tarea: String,
  descripcion: String,
  usuario: { type: Schema.ObjectId, ref: usuarios }
})

module.exports = mongoose.model("tareas", taskSchema);