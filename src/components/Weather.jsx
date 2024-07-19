import React from "react";
import rain from "../assets/rain.png";
import sunCloud from "../assets/sunCloud.png";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return "Enter City name to fetch weather data";
  }

  const { main, weather, name } = weatherData;

  let weatherIcon;
  switch (weather[0].main) {
    case "Clouds":
      weatherIcon = rain;
      break;
    case "Rain":
      weatherIcon = rain;
      break;
    case "Clear":
      weatherIcon = sunCloud;
      break;
    default:
      weatherIcon = sunCloud;
      break;
  }

  return (
    <>
      <div className="city-details">
        <h2>{name}</h2>
        <img src={weatherIcon} width={120} height={120} />
        <div className="temp">
          <h3>{Math.round(main.temp)}</h3>
          <span>o</span>
        </div>
      </div>
      <div className="pridiction">
        <div className="pridict">
          <h4>Humidity</h4>
          <span>{main.humidity}%</span>
        </div>
        <div className="pridict">
          <h4>Rain</h4>
          <span>{weather[0].main === "Clouds" ? "100%" : "Not Sure"}</span>
        </div>
      </div>
    </>
  );
};

export default Weather;
