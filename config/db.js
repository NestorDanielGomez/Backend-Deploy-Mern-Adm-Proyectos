import mongoose from "mongoose";

const conectarDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`mongodb conectado en ${url}`);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
};

export default conectarDb;
