import React from "react";

import clearDay from "@bybas/weather-icons/design/fill/animation-ready/clear-day.svg";
import clearNight from "@bybas/weather-icons/design/fill/animation-ready/clear-night.svg";
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import partlyCloudyNight from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night.svg";
import cloudy from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import overcast from "@bybas/weather-icons/design/fill/animation-ready/overcast.svg";
import rain from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import partlyCloudyDayRain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-rain.svg";
import thunderstorms from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg";
import snow from "@bybas/weather-icons/design/fill/animation-ready/snow.svg";
import mist from "@bybas/weather-icons/design/fill/animation-ready/mist.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyCloudyDay,
    "02n": partlyCloudyNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": overcast,
    "04n": overcast,
    "09d": rain,
    "09n": rain,
    "10d": partlyCloudyDayRain,
    "10n": partlyCloudyNightRain,
    "11d": thunderstorms,
    "11n": thunderstorms,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };

  return (
    <div className="weatherIcon">
      <img
        src={codeMapping[props.code]}
        alt={props.description}
        width={props.width}
      />
    </div>
  );
}
