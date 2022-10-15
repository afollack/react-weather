import { React, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(false);
  const apiKey = "c77c1ca17d20c46264d7b3958f6293e6";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function getCity(e) {
    setCity(e.target.value);
  }
  function getWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function searchCity(e) {
    e.preventDefault();
    axios.get(apiUrl).then(getWeather);
  }
  if (weather) {
    return (
      <div className="WeatherSearch">
        <div className="row pt-3 pe-3 mb-1">
          <form
            onSubmit={searchCity}
            className="searchBar d-flex justify-content-end"
          >
            <input
              type="search"
              autoComplete="off"
              autoFocus="on"
              placeholder="Enter a city"
              className="p-1 locationSearch"
              onChange={getCity}
            />
            <button type="submit" value="search" className="searchButton">
              <i className="bi bi-search-heart"></i>
            </button>
          </form>
        </div>
        <div className="d-flex justify-content-end pe-3">
          <button value="locate" className="searchButton" id="locate-me">
            Use current location
          </button>
        </div>
        <Weather data={weather} />
      </div>
    );
  } else {
    const apiKey = "c77c1ca17d20c46264d7b3958f6293e6";
    let city = "New York";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
    return "Loading";
  }
}
