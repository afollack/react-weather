import React from "react";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-end pt-2 pb-1">
      <a
        href="https://github.com/afollack/react-weather"
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
        <i className="bi bi-linkedin p-1"></i>
      </a>
    </div>
  );
}
