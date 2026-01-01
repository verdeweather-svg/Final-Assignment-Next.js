"use client"; 

// src/app/weather-feature/page.jsx
import React, { useState, useEffect } from "react";
import "../globals.css";

export default function WeatherFeature() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [background, setBackground] = useState("");

  const OWM_KEY = "384a59416bd93f65f56b264e654789a1";
  const UNSPLASH_KEY = "BTdO_7Fr3RFJ39HUd_qGU1IHUh_nf9ZjhPy7hYc9Xdc";

  // Clothing suggestion
  const getClothingSuggestion = (temp) => {
    if (temp < 15) return "🧥 It's cold — wear warm clothes or a jacket.";
    if (temp < 25) return "👕 Mild weather — light sweater or long sleeves.";
    return "☀️ It's hot — wear light cotton clothes and stay hydrated.";
  };

  // Heat Index calculation
  const getHeatIndex = (temp, humidity) => {
    const t = temp;
    const rh = humidity;
    const hi =
      -8.784695 +
      1.61139411 * t +
      2.338549 * rh -
      0.14611605 * t * rh -
      0.012308094 * t * t -
      0.016424828 * rh * rh +
      0.002211732 * t * t * rh +
      0.00072546 * t * rh * rh -
      0.000003582 * t * t * rh * rh;
    return hi.toFixed(1);
  };

  // Mock pollen index
  const getPollenIndex = () => {
    const levels = ['Low 🌿', 'Moderate 🌿🌿', 'High 🌿🌿🌿'];
    return levels[Math.floor(Math.random() * levels.length)];
  };

  // Simple prediction / suggestion
  const getPrediction = (condition) => {
    if (condition.includes('Rain')) return '🌧 It may rain — carry an umbrella!';
    if (condition.includes('Clear'))
      return '☀️ Clear skies — great for outdoor activities!';
    if (condition.includes('Cloud')) return '☁️ Cloudy — mild weather expected.';
    return '🌤 Weather is normal.';
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    setWeather(null);
    setForecast([]);

    try {
      // Current weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OWM_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);

      const heatIndex = getHeatIndex(data.main.temp, data.main.humidity);
      const pollen = getPollenIndex();
      const prediction = getPrediction(data.weather[0].main);

      setWeather({
        city: data.name,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
        suggestion: getClothingSuggestion(data.main.temp),
        heatIndex,
        pollen,
        prediction,
        uv: Math.floor(Math.random() * 11), // Mock UV 0-10
      });

      // Background
      const bg = await fetch(
        `https://api.unsplash.com/photos/random?query=${data.weather[0].main}&client_id=${UNSPLASH_KEY}`
      );
      const bgData = await bg.json();
      setBackground(bgData[0]?.urls?.full || '');

      // Forecast (5 days)
      const forecastRes = await fetch(
         `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${OWM_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();

      const daily = {};
      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!daily[date]) daily[date] = [];
        daily[date].push(item.main.temp);
      });

      const fiveDays = Object.keys(daily)
        .slice(0, 5)
        .map((date) => ({
          date,
          avgTemp: (
            daily[date].reduce((a, b) => a + b, 0) / daily[date].length
          ).toFixed(1),
        }));

      setForecast(fiveDays);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        const r = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OWM_KEY}&units=metric`
        );
        const d = await r.json();
        if (d.name) fetchWeather(d.name);
      });
    }
  }, []);

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: background
          ? `url(${background})`
          : "url('/images/weather.jpg')"
      }}
    >
      <div className="overlay"></div>
      <div className="weather-content">
        <h1>Live Weather Dashboard</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={() => fetchWeather(city)}>Search</button>
        </div>

        {loading && <p className="loading">Loading weather data...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <div className="city-name">{weather.city}</div>
            <div className="weather-main">
             
              <p>{weather.condition}</p>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <h3>🌡 Temperature</h3>
                <p>{weather.temp} °C (Feels like {weather.feels_like}°C)</p>
              </div>
              <div className="info-card">
                <h3>💧 Humidity</h3>
                <p>{weather.humidity}%</p>
              </div>
              <div className="info-card">
                <h3>🌬 Wind</h3>
                <p>{weather.wind} m/s</p>
              </div>
              <div className="info-card">
                <h3>☀️ UV Index</h3>
                <p>{weather.uv}</p>
              </div>
              <div className="info-card">
                <h3>🔥 Heat Index</h3>
                <p>{weather.heatIndex} °C</p>
              </div>
              <div className="info-card">
                <h3>🌿 Pollen Index</h3>
                <p>{weather.pollen}</p>
              </div>
            </div>

            <p className="suggestion">{weather.suggestion}</p>
            <p className="prediction">{weather.prediction}</p>
          </div>
        )}

        {forecast.length > 0 && (
          <div className="forecast">
            <h2>🗓 5-Day Forecast</h2>
            <div className="forecast-grid">
              {forecast.map((day) => (
                <div key={day.date} className="forecast-card">
                  <h4>{day.date}</h4>
                  <p>{day.avgTemp} °C</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
