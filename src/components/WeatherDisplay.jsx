import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const WeatherDisplay = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  const { name, main, wind, weather } = weatherData;

  return (
    <div>
      <h2>{name}</h2>
      <p>{weather[0].main} - {weather[0].description}</p>
      <p>Temp: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind: {wind.speed} m/s</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};
