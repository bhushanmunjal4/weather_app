import "./App.css";
import Weather from "./components/Weather";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = "YOUR_API_KEY";
    const url = `REPLACE_WITH_YOUR_WEATHER_API`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log(weatherData);
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    fetchWeatherData("Pune");
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <Search onSearch={fetchWeatherData} />
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
