import React from "react";

export default function Footer() {
  return (
    <div className="footer pt-2 d-flex justify-content-end">
      <a
        href="https://github.com/afollack/weather-app-js-shecodes"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-github ps-1"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/andreafollack/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-linkedin p-1"></i>
      </a>
    </div>
  );
}
