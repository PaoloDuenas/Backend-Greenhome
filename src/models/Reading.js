const mongoose = require("mongoose");
const { Schema } = mongoose;

// Definir el esquema para las lecturas de los sensores
const readingSchema = new Schema(
  {
    potId: {
      type: String,
      required: true,
      trim: true,
    },
    plantType: {
      type: String,
      required: true,
      trim: true,
    },
    soilMoisture: {
      type: Number,
      required: true,
    },
    ambientTemperature: {
      type: Number,
      required: true,
    },
  },
  {
    // Añadir automáticamente los campos createdAt y updatedAt
    timestamps: true,
  }
);

// Crear y exportar el modelo basado en el esquema
const Reading = mongoose.model("Reading", readingSchema);

module.exports = Reading;
