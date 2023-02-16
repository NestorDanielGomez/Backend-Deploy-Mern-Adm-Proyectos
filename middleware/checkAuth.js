import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTA0NjgzYWI2Mjg3ZmJiYWI4NTBhYiIsImlhdCI6MTY3NTY0MjY1OCwiZXhwIjoxNjc4MjM0NjU4fQ.I6akTnCiJriVsYJlxS4dmt_Pkk2wBWD4kUVksM4TfWo
      //elimino Bearer y me quedo solo con el token
      token = req.headers.authorization.split(" ")[1];

      const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

      req.usuario = await Usuario.findById(tokenDecoded.id).select(
        "-password -confirmado -token -createdAt -updatedAt -__v"
      );
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Hubo un eror comprobando el token" });
    }
  }

  if (!token) {
    const error = new Error("Token no valido");
    return res.status(401).json({ msg: error.message });
  }
  next();
};

export default checkAuth;
