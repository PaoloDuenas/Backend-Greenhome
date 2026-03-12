const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/db');
const readingRoutes = require('./routes/readingRoutes');

// Cargar las variables de entorno desde el archivo.env
// Al ejecutar desde la raíz, dotenv lo encontrará automáticamente.
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
// Corregimos el operador para asignar el puerto por defecto
const PORT = process.env.PORT || 3000;

//usamos CORS (Permitimos todo para depurar)
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.status(200).send("¡API de Greenhome activa! Versión depuración.");
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', time: new Date() });
});

// Usar las rutas de la API
// Todas las rutas definidas en readingRoutes estarán bajo el prefijo /api
app.use('/api', readingRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});