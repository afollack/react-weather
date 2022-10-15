import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <WeatherSearch />
      </div>
      <div className="footer">
        <small>
          WEATHER APP{" "}
          <span role="img" aria-label="two hearts emoji">
            💕
          </span>{" "}
          Coded by Andrea Follack
        </small>
        <br />
        <a
          href="https://github.com/afollack/weather-app-js-shecodes"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/andreafollack/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
