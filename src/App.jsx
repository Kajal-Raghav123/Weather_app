import { WeatherProvider } from './context/WeatherContext';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ErrorMessage } from './components/ErrorMessage';

import './App.css';


function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <SearchBar />
        <ErrorMessage />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
}

export default App;

