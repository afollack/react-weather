import React from "react";
import UpdateDate from "./UpdateDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row todaysWeather d-flex align-items-center justify-content-around p-3 m-auto">
        <div className="currentWeather col-6 card border-0 p-2 shadow">
          <div className="card-body">
            <h5 className="card-title city">{props.data.city}</h5>
            <UpdateDate date={props.data.date} />
            <p className="card-text description">{props.data.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <Temperature celsius={props.data.temperature} />
            <li className="list-group-item d-flex">
              <i
                className="bi bi-droplet conditionIcon"
                alt="humidity icon"
              ></i>
              <p id="humidity">{props.data.humidity}%</p>
            </li>
            <li className="list-group-item d-flex">
              <i className="bi bi-wind conditionIcon" alt="wind speed icon"></i>
              <p id="wind">{Math.round(props.data.wind)}KM/h</p>
            </li>
          </ul>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <WeatherIcon code={props.data.icon} width={150} />
        </div>
      </div>
    </div>
  );
}
