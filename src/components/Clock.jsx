import React, { useState } from "react";
import "../styles/Clock.css";

export default function () {
  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hour-hand"></div>
        <div className="min-hand"></div>
        <div className="sec-hand"></div>
      </div>
    </div>
  );
}
