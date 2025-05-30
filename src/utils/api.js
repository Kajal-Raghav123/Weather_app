import axios from 'axios';

const API_KEY = '35f375244d9ea99512ae2a223b30b387';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('City not found');
    } else {
      throw new Error('Network or server error');
    }
  }
};
