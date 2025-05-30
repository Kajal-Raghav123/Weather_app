import { createContext, useState, useEffect } from 'react';
import { fetchWeatherByCity } from '../utils/api';
import { getCityFromStorage, saveCityToStorage } from '../utils/localStorage';

export const WeatherContext = createContext();

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
      setError('City not found or network issue.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    getWeather();
    const interval = setInterval(getWeather, 30000); // poll every 30s
    return () => clearInterval(interval);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
