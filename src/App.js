import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <MainPage className="mainPage" />
    </div>
  );
}

export default App;
