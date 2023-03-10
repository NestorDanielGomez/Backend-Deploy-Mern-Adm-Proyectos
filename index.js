import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDb from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
//conecto la db
conectarDb();

//configurar cors
const whiteList = [process.env.FRONTEND_URL1, process.env.FRONTEND_URL2];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      //accedo a consultar la api
      callback(null, true);
    } else {
      callback(new Error("Error de corsito"));
    }
  },
};
app.use(cors(corsOptions));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("servidor corriendo en puerto 4000");
});
