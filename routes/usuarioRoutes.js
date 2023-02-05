import express from "express";
import {
  crearUsuario,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/", crearUsuario);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);

export default router;
