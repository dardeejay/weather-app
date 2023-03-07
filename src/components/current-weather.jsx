import React from "react";

const useFetch = require("../hooks/useFetch");

function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (txt) {
    return (
      txt.charAt(0).toLocaleUpperCase() + txt.substr(1).toLocaleLowerCase()
    );
  });
}

export default function CurrentWeather({ location }) {
  const date = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  const { data, error, loading } = useFetch(location);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  console.log(data);
  const icon = data.weather[0].icon;

  return (
    <div className="weather-card">
      <div className="weather-details">
        <div className="header">
          <h1>{data.name}</h1>
          <h3>{formattedDate}</h3>
        </div>
        <div className="main">
          <div className="temp">
            <h1>{data.main.temp}°C</h1>
            <h3>
              {data.main.temp_max}°C/{data.main.temp_min}°C
            </h3>
            <h3>{toTitleCase(data.weather[0].description)}</h3>
          </div>
        </div>
        <div className="wind-humidity">
          <h3>Wind = {data.wind.speed}</h3>
          <h3>Humidity = {data.main.humidity}</h3>
        </div>
      </div>
      <div className="icon-container">
        <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      </div>
    </div>
  );
}
