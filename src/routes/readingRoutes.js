const express = require("express");
const router = express.Router();
const readingController = require("../controllers/readingController");

// Definir la ruta para guardar una nueva lectura (POST)
// El ESP32 enviará los datos a esta URL
router.post("/readings", readingController.saveReading);

// Definir una ruta para obtener las lecturas de una maceta (GET)
// Útil para que la aplicación web consulte los datos
router.get("/readings/:potId", readingController.getReadingsByPot);

module.exports = router;
