import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_PORT.EMAIL_USER,
      pass: process.env.EMAIL_PORT.EMAIL_PASS,
    },
  });

  //info del email
  const info = await transport.sendMail({
    from: `"ADM - Tareas y Proyectos" <cuentas@ADMtareas.com>`,
    to: email,
    subject: "ADM tareas - Cumprueba tu cuenta",
    text: "Comprueba tu cuenta en adm tareas",
    html: `<p>Hola: ${nombre} comprueba tu cuenta en ADM tareas</p>
    <p>Tu cuenta esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
    <a href="${process.env.FRONTEND_URL2}/confirmar/${token}">Comprobar cuenta</a>
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_PORT.EMAIL_USER,
      pass: process.env.EMAIL_PORT.EMAIL_PASS,
    },
  });

  //info del email
  const info = await transport.sendMail({
    from: `"ADM - Tareas y Proyectos" <cuentas@ADMtareas.com>`,
    to: email,
    subject: "ADM tareas - Reestablece tu contraseña",
    text: "Reestablece tu contraseña",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
    <p>Sigue al siguiente enlace:</p>
    <a href="${process.env.FRONTEND_URL2}/olvide-password/${token}">Reestablecer Contraseña</a>
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    `,
  });
};
