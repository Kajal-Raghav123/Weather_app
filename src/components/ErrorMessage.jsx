import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const ErrorMessage = () => {
  const { error } = useContext(WeatherContext);

  return error ? <p style={{ color: 'red' }}>{error}</p> : null;
};
