const express = require("express");
const userSchema = require("../models/usuarios");

const router = express.Router();

// create user
router.post("/usuarios", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { usuario, contraseña } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//LOGEAR USUARIO
router.patch("/", async (req, res) => {
    const { usuario, contraseña } = req.body;
    if (!usuario || !contraseña) {
        return res.status(400).json({ msg: "Se requiere usuario y contraseña para esta petición" });
    }
    try {
        const user = await userSchema.findOne({
            usuario: usuario,
            contraseña: contraseña
        });
        if (!user) {
            return res.status(404).json({ msg: "Usuario no registrado" });
        }
        if (contraseña !== user.contraseña) {
            return res.status(401).json({ msg: "Contraseña incorrecta" });
        }
        res.status(200).json({ user: user, msg: "Inicio de sesión exitoso" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Ha ocurrido un error al procesar la solicitud" });
    }
});





module.exports = router;
