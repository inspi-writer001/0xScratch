import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/mobile.css";
import "./styles/generic.css";

import Welcome from "./pages/Welcome";
import Navbarr from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr />
      </Router>
    </div>
  );
}

export default App;
