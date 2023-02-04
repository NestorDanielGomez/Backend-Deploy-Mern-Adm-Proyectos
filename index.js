import express from "express";
import dotenv from "dotenv";
import conectarDb from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
//conecto la db
conectarDb();

app.use("/api/usuarios", usuarioRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("servidor corriendo en puerto 4000");
});
