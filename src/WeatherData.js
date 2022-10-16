import React from "react";
import UpdateDate from "./UpdateDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="todaysWeather row d-flex justify-content-around align-items-center m-auto p-2">
        <div className="currentWeather col-6 card border-0 p-1 shadow">
          <div className="card-body">
            <h5 className="city card-title">{props.data.city}</h5>
            <UpdateDate date={props.data.date} />
            <p className="description card-text">{props.data.description}</p>
          </div>
          <Temperature celsius={props.data.temperature} />
          <div className="conditions d-flex justify-content-evenly">
            <p className="card-text">
              <i
                className="conditionIcon bi bi-droplet"
                alt="humidity icon"
              ></i>
              {props.data.humidity}%
            </p>
            <p>
              <i className="conditionIcon bi bi-wind" alt="wind speed icon"></i>
              {Math.round(props.data.wind)}KM/h
            </p>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <WeatherIcon code={props.data.icon} width={150} />
        </div>
      </div>
    </div>
  );
}
