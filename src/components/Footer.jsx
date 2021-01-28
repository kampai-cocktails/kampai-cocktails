import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      Made with{" "}
      <span role="img" aria-label="Red Heart">
        ❤️
      </span>{" "}
      by:{" "}
      <a
        href="https://twitter.com/HaleePagel"
        className="nameLinks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Halee
      </a>
      {", "}
      <a
        href="https://twitter.com/bentley449"
        className="nameLinks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jeff
      </a>
      {", "}
      <a
        href="https://twitter.com/softwaredevtam"
        className="nameLinks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tam
      </a>
      {", and "}
      <a
        href="https://twitter.com/KapakahiCoder"
        className="nameLinks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Garrett
      </a>
    </div>
  );
}
