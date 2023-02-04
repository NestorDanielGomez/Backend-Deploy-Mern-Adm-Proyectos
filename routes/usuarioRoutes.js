import express from "express";
import { crearUsuario } from "../controllers/usuarioController.js";

const router = express.Router();
router.get("/");
router.post("/", crearUsuario);
export default router;
