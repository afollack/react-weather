import { React, useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(false);
  const apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function getCity(e) {
    setCity(e.target.value);
  }
  function getWeather(response) {
    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
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
    let units = "metric";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
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
    const apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let city = "New York";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
    return "Loading";
  }
}
