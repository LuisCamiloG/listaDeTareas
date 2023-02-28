const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const taskSchema = require("../models/tareas");

const router = express.Router();

// create user
router.post("/tareas", verifyToken, (req, res) => {
  const user = taskSchema(req.body);
  user.idUsuario = req.headers._id
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/tareas", verifyToken, (req, res) => {
  const { _id } = req.headers
  taskSchema
    .find({ idUsuario: `${_id}` })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/tareas/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  taskSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/tareas/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const { tarea, descripcion } = req.body;
  taskSchema
    .updateOne({ _id: id }, { $set: { tarea, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.put("/tareasEstado/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  taskSchema
    .updateOne({ _id: id }, { $set: { estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/tareas/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  taskSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;
