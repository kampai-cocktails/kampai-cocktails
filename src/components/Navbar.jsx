import React from "react";
import Clock from "./Clock.jsx";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1>Kampai Cocktails</h1>
      <Clock />
      <h2>It's 5 o'clock somewhere...</h2>
    </div>
  );
}
