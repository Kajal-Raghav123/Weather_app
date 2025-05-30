import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const SearchBar = () => {
  const { setCity } = useContext(WeatherContext);
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
