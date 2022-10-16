import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "c77c1ca17d20c46264d7b3958f6293e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }
  if (loaded) {
    return (
      <div className="Forecast row d-flex m-2 justify-content-center">
        {forecast.map((dailyForecast, index) => {
          if (index >= 1 && index < 6) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
  }
}
