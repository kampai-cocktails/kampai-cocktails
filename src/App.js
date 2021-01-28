import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="App">
      <ScrollToTop className="scrollToTop" />
      <Navbar className="navbar" />
      <MainPage className="mainPage" />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
