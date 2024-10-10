// src/Components/Trip/Trip.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Trip.css";

const Trip = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, itinerary } = location.state || {};

  if (!formData || !itinerary) {
    return (
      <div className="trip-container">
        <h2>No se recibió información del viaje.</h2>
        <button onClick={() => navigate("/")}>Volver al formulario</button>
      </div>
    );
  }

  return (
    <div className="trip-container">
      <h2>¡Aquí está tu plan de viaje!</h2>

      <div className="trip-summary">
        <div className="trip-detail">
          <h3>Datos Personales</h3>
          <p><strong>Nombre:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>

        <div className="trip-detail">
          <h3>Información del Viaje</h3>
          <p><strong>Adultos que viajan:</strong> {formData.adults}</p>
          <p><strong>Menores que viajan:</strong> {formData.minors}</p>
          <p><strong>Mascotas que viajan:</strong> {formData.pets}</p>
          <p><strong>Estilo de viaje:</strong> {formData.travelStyle}</p>
          <p><strong>Ciudades a visitar:</strong> {formData.cities}</p>
          <p><strong>Días de viaje:</strong> {formData.travelDays}</p>
          <p><strong>Transporte:</strong> {formData.transport}</p>
        </div>

        <div className="trip-detail">
          <h3>Detalles del Alojamiento</h3>
          <p><strong>Tipo de Alojamiento:</strong> {formData.accommodationType}</p>
          <p><strong>Ubicación del Alojamiento:</strong> {formData.accommodationLocation}</p>
        </div>

        <div className="trip-detail">
          <h3>Fechas del Viaje</h3>
          <p><strong>Fecha de Salida:</strong> {formData.departureDate}</p>
          <p><strong>Fecha de Regreso:</strong> {formData.returnDate}</p>
        </div>

        <div className="trip-detail">
          <h3>Preferencias Adicionales</h3>
          <p><strong>Comidas:</strong> {formData.foodPreferences}</p>
          <p><strong>Excursiones:</strong> {formData.excursions}</p>
          <p><strong>Preferencias de Caminata:</strong> {formData.walkingPreference}</p>
          <p><strong>Expectativa del viaje:</strong> {formData.travelExpectations}</p>
        </div>
      </div>

      <div className="itinerary-section">
        <h3>Itinerario Sugerido:</h3>
        <p>{itinerary}</p>
      </div>

      <div className="trip-footer">
        <p>¡Gracias por compartir tus preferencias! Esperamos que disfrutes tu viaje.</p>
        <button className="btn-back" onClick={() => navigate("/")}>Volver al formulario</button>
      </div>
    </div>
  );
};

export default Trip;