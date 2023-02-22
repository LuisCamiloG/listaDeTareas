const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    usuario: String,
    contraseña: String,
})

module.exports = mongoose.model("usuarios", userSchema);
