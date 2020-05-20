import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
