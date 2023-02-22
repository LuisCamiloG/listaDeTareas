const express = require("express");
const taskSchema = require("../models/tareas");

const router = express.Router();

// create user
router.post("/tareas", (req, res) => {
  const user = taskSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/tareas", (req, res) => {
  taskSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/tareas/:id", (req, res) => {
  const { id } = req.params;
  taskSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/tareas/:id", (req, res) => {
  const { id } = req.params;
  const { tarea, descripcion } = req.body;
  taskSchema
    .updateOne({ _id: id }, { $set: { tarea, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/tareas/:id", (req, res) => {
  const { id } = req.params;
  taskSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;
