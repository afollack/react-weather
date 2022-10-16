import { React, useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import "./Weather.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(false);
  const apiKey = "c77c1ca17d20c46264d7b3958f6293e6";
  const units = "metric";
  const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${units}`;

  function getCity(e) {
    setCity(e.target.value);
  }
  function getWeather(response) {
    setWeather({
      coordinates: response.data.coord,
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
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeather);
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  if (weather) {
    return (
      <div className="Weather">
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
          <button
            value="locate"
            className="searchButton"
            onClick={getCurrentPosition}
          >
            Use current location
          </button>
        </div>
        <WeatherData data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    axios.get(apiUrl).then(getWeather);
    return "Loading";
  }
}
