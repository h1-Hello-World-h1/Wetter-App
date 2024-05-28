import { useState, useEffect } from "react";
import { fetchWeatherData } from "./weatherService";
import Suche from "./Components/Suche";
import Logo from "./Components/Logo";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Braunschweig");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getWeatherData();
  }, [location]);

  return (
    <div className="App">
      <Logo />
      <Suche setLocation={setLocation} />
      {error && <p>Error: {error}</p>}
      {weatherData ? (
        <div>
          <h2>Weather in {location}</h2>
          <p>
            Temperature:{" "}
            {weatherData.data.timelines[0].intervals[0].values.temperature} °C
          </p>
          <p>
            Humidity:{" "}
            {weatherData.data.timelines[0].intervals[0].values.humidity} %
          </p>
          <p>
            Precipitation:{" "}
            {weatherData.data.timelines[0].intervals[0].values.precipitation}{" "}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
