import React from "react";

export default function Temperature(props) {
  return (
    <li className="list-group-item">
      <h5 className="currentTemp">
        {Math.round(props.celsius)}
        <span class="unit">°C</span>
      </h5>
    </li>
  );
}
