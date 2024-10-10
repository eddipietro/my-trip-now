// src/Components/Questions/Questions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questions.css";

const Questions = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    adults: 1,
    minors: 0,
    pets: 0,
    travelStyle: "",
    cities: "",
    travelDays: 0,
    transport: "",
    accommodationType: "",
    accommodationLocation: "",
    departureDate: "",
    returnDate: "",
    foodPreferences: "",
    excursions: "",
    walkingPreference: "",
    travelExpectations: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica del formulario
    if (!formData.name || !formData.email) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      // Cambia la URL a la API de Gemini
      const response = await fetch("generativelanguage.googleapis.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }), // Enviar los datos del formulario
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa, navega a la página Trip.js con el itinerario
        navigate("/trip", { state: { formData, itinerary: data.itinerary } });
      } else {
        setError("Error al obtener el itinerario: " + data.message);
      }
    } catch (error) {
      setError("Error en la solicitud: " + error.message);
    }
  };

  return (
    <>
      <div className="titulo">
        <h2>¿Planeamos el Trip?</h2>
        <p className="explicacion">
          Te vamos a hacer un cuestionario donde nos especificarás tus deseos,
          como por ejemplo dónde es el lugar de destino, cuánto tiempo, o si viajas en compañía.
        </p>
        <h3>Formulario de Preguntas</h3>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        {/* Formulario tal cual como lo tenías */}
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>¿Cuántos adultos viajan?</label>
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>¿Cuántos menores viajan?</label>
          <input
            type="number"
            name="minors"
            value={formData.minors}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>¿Cuántas mascotas viajan?</label>
          <input
            type="number"
            name="pets"
            value={formData.pets}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Estilo de viaje:</label>
          <select
            name="travelStyle"
            value={formData.travelStyle}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="economico">Económico</option>
            <option value="promedio">Promedio</option>
            <option value="especial">Especial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ciudades a visitar:</label>
          <input
            type="text"
            name="cities"
            value={formData.cities}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Transporte:</label>
          <select
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="auto">Auto</option>
            <option value="avion">Avión</option>
            <option value="bus">Bus</option>
            <option value="tren">Tren</option>
            <option value="barco">Barco</option>
          </select>
        </div>

        <div className="form-group">
          <label>Alojamiento:</label>
          <select
            name="accommodationType"
            value={formData.accommodationType}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="hostel">Hostel</option>
            <option value="hotel">Hotel</option>
            <option value="camping">Camping</option>
            <option value="departamento">Departamento</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ubicación del alojamiento:</label>
          <select
            name="accommodationLocation"
            value={formData.accommodationLocation}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="centro">Centro</option>
            <option value="cerca">Cerca</option>
            <option value="alejado">Alejado</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fecha de salida:</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Fecha de regreso:</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Preferencias de comidas:</label>
          <select
            name="foodPreferences"
            value={formData.foodPreferences}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="economico">Económicas</option>
            <option value="restaurantes">Restaurantes</option>
          </select>
        </div>

        <div className="form-group">
          <label>¿Excursiones?</label>
          <select
            name="excursions"
            value={formData.excursions}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>¿Dispuestos a caminar?</label>
          <select
            name="walkingPreference"
            value={formData.walkingPreference}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="poco">Poco</option>
            <option value="necesario">Solo lo necesario</option>
            <option value="movilidadReducida">Movilidad reducida</option>
            <option value="mucho">Mucho</option>
            <option value="experto">Experto</option>
          </select>
        </div>

        <div className="form-group">
          <label>Expectativa del viaje:</label>
          <textarea
            name="travelExpectations"
            value={formData.travelExpectations}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Questions;
