import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <WeatherIcon code={props.data.weather[0].icon} width={65} />
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <p className="card-text">
          <span className="forecastMax">{maxTemperature()} </span>
          <span className="forecastMin"> {minTemperature()}</span>
        </p>
      </div>
    </div>
  );
}
