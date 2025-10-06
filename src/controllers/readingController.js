const Reading = require("../models/Reading");

// Función para guardar una nueva lectura de sensor
exports.saveReading = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud (el JSON que enviará el ESP32)
    const { potId, plantType, soilMoisture, ambientTemperature } = req.body;

    // Crear una nueva instancia del modelo Reading
    const newReading = new Reading({
      potId,
      plantType,
      soilMoisture,
      ambientTemperature,
    });

    // Guardar la nueva lectura en la base de datos
    await newReading.save();

    // Enviar una respuesta de éxito
    res
      .status(201)
      .json({ message: "Lectura guardada exitosamente", data: newReading });
  } catch (error) {
    // Enviar una respuesta de error si algo sale mal
    res
      .status(500)
      .json({ message: "Error al guardar la lectura", error: error.message });
  }
};

// Función para obtener todas las lecturas de una maceta específica
exports.getReadingsByPot = async (req, res) => {
  try {
    const { potId } = req.params;
    const readings = await Reading.find({ potId: potId }).sort({
      createdAt: -1,
    }); // Ordenar por más reciente

    if (!readings.length) {
      return res
        .status(404)
        .json({ message: "No se encontraron lecturas para esta maceta." });
    }

    res.status(200).json({ data: readings });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las lecturas", error: error.message });
  }
};
