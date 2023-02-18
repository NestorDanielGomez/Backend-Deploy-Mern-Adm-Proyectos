import express from "express";
import dotenv from "dotenv";
import conectarDb from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
//conecto la db
conectarDb();

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("servidor corriendo en puerto 4000");
});
