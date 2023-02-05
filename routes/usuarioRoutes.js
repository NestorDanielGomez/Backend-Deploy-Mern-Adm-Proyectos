import express from "express";
import { crearUsuario, autenticar } from "../controllers/usuarioController.js";

const router = express.Router();
router.get("/");
router.post("/", crearUsuario);
router.post("/login", autenticar);
export default router;
