import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";

const crearUsuario = async (req, res) => {
  // evito correos duplicados
  const { email } = req.body;
  const existeUsusario = await Usuario.findOne({ email });

  if (existeUsusario) {
    const error = new Error(`El email: "${email}" ya esta registrado`);
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioHaciaDB = await usuario.save();

    res.json({ data: usuarioHaciaDB });
  } catch (error) {}
};

export { crearUsuario };
