import { useState, useEffect } from "react";
import { fetchWeatherData } from "./weatherService";
import Suche from "./Components/Suche";
import Logo from "./Components/Logo";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Braunschweig");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const weatherCodeDescriptions = {
    0: "Unknown",
    1000: "Clear, Sunny",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    1001: "Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5001: "Flurries",
    5100: "Light Snow",
    5101: "Heavy Snow",
    6000: "Freezing Drizzle",
    6001: "Freezing Rain",
    6200: "Light Freezing Rain",
    6201: "Heavy Freezing Rain",
    7000: "Ice Pellets",
    7101: "Heavy Ice Pellets",
    7102: "Light Ice Pellets",
    8000: "Thunderstorm",
  };
  const getWeatherDescription = (weatherCode) => {
    return weatherCodeDescriptions[weatherCode] || "Unknown";
  };

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
            Weather:{" "}
            {getWeatherDescription(
              weatherData.data.timelines[0].intervals[0].values.weatherCode
            )}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
