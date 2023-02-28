const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/tareas");
const routerUser = require("./routes/usuarios");
require("dotenv").config();
const cors = require("cors")
const app = express();
const port = process.env.PORT || 8000;

//Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use("/api", router);
app.use("/api", routerUser);
app.get("", (req, res) => {
  res.send("Esta en mi api REST");
});

// Conexion MongoDb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor corriendo en el puerto", port));
