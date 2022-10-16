import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h5 className="currentTemp ps-3">
        {Math.round(props.celsius)}
        <span class="unit">°C</span>
      </h5>
    </div>
  );
}
