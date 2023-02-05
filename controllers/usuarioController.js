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

const autenticar = async (req, res) => {
  const { email, password } = req.body;
  //ususario existe?
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }
  // compruebo si el ususario esta confirmado (true)
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no a sido confirmada");
    return res.status(403).json({ msg: error.message });
  }
  //comparar la contraseña hasheada en la db con la que ingresa el usuasrio en el formulario
  if (await usuario.comprobarPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
    });
  } else {
    const error = new Error("La contraseña es incorrecta");
    return res.status(403).json({ msg: error.message });
  }
};

export { crearUsuario, autenticar };
