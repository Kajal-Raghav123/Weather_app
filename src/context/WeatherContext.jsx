import { createContext, useState, useEffect } from 'react';
import { fetchWeatherByCity } from '../utils/api';

export const WeatherContext = createContext();

// LocalStorage helper functions
const getCityFromStorage = () => {
  try {
    const city = localStorage.getItem('city');
    return city ? city : null;
  } catch {
    return null;
  }
};

const saveCityToStorage = (city) => {
  try {
    localStorage.setItem('city', city);
  } catch {
    // Fail silently if localStorage is not available
  }
};

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(getCityFromStorage() || 'London');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
      setError('');
      saveCityToStorage(city);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('City not found or network issue.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    getWeather();
    const interval = setInterval(getWeather, 30000); // refresh every 30 seconds
    return () => clearInterval(interval);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
