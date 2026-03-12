const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Conectar a MongoDB usando la URI del archivo.env
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conexión a MongoDB establecida exitosamente.");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    // No salimos del proceso para permitir que el servidor responda health checks
  }
};

module.exports = connectDB;
