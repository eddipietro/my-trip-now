import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Para hacer solicitudes HTTP
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());  // Permitir solicitudes CORS

// Ruta POST para consultar la API de Gemini
app.post('/consultar', async (req, res) => {
  const { formData } = req.body; // Datos enviados desde el frontend
  console.log('Datos recibidos:', formData);

  try {
    // Realizar la solicitud a la API de Gemini
    const response = await fetch('generativelanguage.googleapis.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`, // Usar la API Key desde variables de entorno
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        adults: formData.adults,
        minors: formData.minors,
        pets: formData.pets,
        travelStyle: formData.travelStyle,
        cities: formData.cities,
        transport: formData.transport,
        accommodationType: formData.accommodationType,
        accommodationLocation: formData.accommodationLocation,
        departureDate: formData.departureDate,
        returnDate: formData.returnDate,
        foodPreferences: formData.foodPreferences,
        excursions: formData.excursions,
        walkingPreference: formData.walkingPreference,
        travelExpectations: formData.travelExpectations,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({
        message: 'Itinerario generado con éxito',
        itinerary: data.itinerary, // Aquí puedes recibir el itinerario que la API de Gemini devuelve
      });
    } else {
      console.error('Error de Gemini:', data);
      res.status(response.status).json({
        message: 'Error al obtener el itinerario de Gemini',
        error: data.message,
      });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});