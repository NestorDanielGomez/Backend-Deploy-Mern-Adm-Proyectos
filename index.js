import express from "express";
import dotenv from "dotenv";
import conectarDb from "./config/db.js";

const app = express();
dotenv.config();
conectarDb();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("servidor corriendo en puerto 4000");
});
