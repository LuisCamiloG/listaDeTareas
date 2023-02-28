const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    usuario: String,
    contraseña: String,
    nombre: String,
    celular: Number
})

module.exports = mongoose.model("usuarios", userSchema);
