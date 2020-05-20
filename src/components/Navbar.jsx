import React from 'react';
import Weather from "./Weather.jsx"
import Clock from "./Clock.jsx"
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <div className='Navbar'>
      <Clock />
      <h1>Kampai Cocktails</h1>
      <Weather />
    </div>
  )
}