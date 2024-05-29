import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from './weatherService';
import Suche from './Components/Suche';
import Logo from './Components/Logo';
import Sunny from './assets/sunny.jpg';
import Cloudy from './assets/cloudy.jpg';
import Rainy from './assets/rainy.jpg';
import Snow from './assets/snow.jpg';
import Thunderstorm from './assets/thunderstorm.jpg';
import Default from './assets/default.jpg';
import Foggy from './assets/foggy.jpg';
import './App.css';

function App() {
  const [location, setLocation] = useState('Braunschweig');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [weatherImage, setWeatherImage] =useState(null);
  const weatherCodeDescriptions = {
    "0": "Unknown",
    "1000": "Clear, Sunny",
    "1100": "Mostly Clear",
    "1101": "Partly Cloudy",
    "1102": "Mostly Cloudy",
    "1001": "Cloudy",
    "2000": "Fog",
    "2100": "Light Fog",
    "4000": "Drizzle",
    "4001": "Rain",
    "4200": "Light Rain",
    "4201": "Heavy Rain",
    "5000": "Snow",
    "5001": "Flurries",
    "5100": "Light Snow",
    "5101": "Heavy Snow",
    "6000": "Freezing Drizzle",
    "6001": "Freezing Rain",
    "6200": "Light Freezing Rain",
    "6201": "Heavy Freezing Rain",
    "7000": "Ice Pellets",
    "7101": "Heavy Ice Pellets",
    "7102": "Light Ice Pellets",
    "8000": "Thunderstorm"
  }
  



  const getWeatherImage = (weatherCode) => {
    const weatherImages = {
      "0": Default,
      "1000": Sunny,
      "1100": Sunny,
      "1101": Cloudy,
      "1102": Cloudy,
      "1001": Cloudy,
      "2000": Foggy,
      "2100": Foggy,
      "4000": Rainy,
      "4001": Rainy,
      "4200": Rainy,
      "4201": Rainy,
      "5000": Snow,
      "5001": Snow,
      "5100": Snow,
      "5101": Snow,
      "6000": Rainy,
      "6001": Rainy,
      "6200": Rainy,
      "6201": Rainy,
      "7000": Snow,
      "7101": Snow,
      "7102": Snow,
      "8000": Thunderstorm
    };
    return weatherImages[weatherCode] || Default;
  };


  const getWeatherDescription = (weatherCode) => {
    return weatherCodeDescriptions[weatherCode] || 'Unknown';
  };

  

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);

        
        const image = getWeatherImage(data.data.timelines[0].intervals[0].values.weatherCode);
        setWeatherImage(image);

      } catch (error) {
        setError(error.message);
      }
    };

    getWeatherData();
  }, [location]);

  return (

    <>
    <div className="App" style={{ backgroundImage: `url(${weatherImage})`}}>
      <Logo />
      <Suche setLocation={setLocation} />
      {error && <p>Error: {error}</p>}
      {weatherData ? (
        <div>
          <h2>Weather in {location}</h2>
          <p>Temperature: {weatherData.data.timelines[0].intervals[0].values.temperature} °C</p>
          <p>Humidity: {weatherData.data.timelines[0].intervals[0].values.humidity} %</p>
          <p>Weather: {getWeatherDescription(weatherData.data.timelines[0].intervals[0].values.weatherCode)}</p>
          {/* {weatherImage && (
            <img src={weatherImage} alt="Weather Image" />)} */}
        </div>

      ) : (
        <p>Loading...</p>
      )}



<header>
        <p class="logo">Weather Watch</p>
        <div class="city-container">
            <div>
                <h1>Sydney</h1>
                <p>Tuesday, 28 Mai 2024</p>
            </div>
        </div>
        <div class="search-container">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </header>

    <main>
        <section class="temp-container">
            <div>
                <h2>33°</h2>
                <p><i class="fa-regular fa-sun"></i> Sunny</p>
            </div>
        </section>

        <section class="details-container">
            <div>
                <h3>Wind</h3>
                <strong>16</strong>
                <small>km/h</small>
            </div>
            <div>
                <h3>Precipitation</h3>
                <strong>%0</strong>
            </div>
            <div>
                <h3>Humidity</h3>
                <strong>%41</strong>
            </div>
        </section>

        <section class="hours-container">
            <div>
                <h3>11:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>13:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>15:00</h3>
                <i class="fa-solid fa-cloud"></i>
                <p>29°</p>
            </div>
            <div>
                <h3>17:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>31°</p>
            </div>
            <div>
                <h3>19:00</h3>
                <i class="fa-solid fa-cloud"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>21:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>36°</p>
            </div>
            <div>
                <h3>23:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>01:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>03:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>05:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>07:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
            <div>
                <h3>09:00</h3>
                <i class="fa-solid fa-cloud-sun"></i>
                <p>33°</p>
            </div>
        </section>
    </main>

    <footer>
        <small>&copy;2024 AFJJS. All rights reserved. This site is provided "as is" without any warranties, express or implied. We are not liable for any losses or damages arising from the use of this site.</small>
    </footer>



    </div>
    </>
  );
}

export default App;