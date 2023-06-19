import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Record from "./pages/Record";
import Alarm from "./pages/Alarm";
import Stopwatch from "./pages/Stopwatch";
import "./App.css";

const App = () => {
  return (
    <div>

      <header>
        <h1>Study App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Record">Record</a></li>
            <li><a href="/Alarm">Alarm</a></li>
            <li><a href="/Stopwatch">Stopwatch</a></li>
          </ul>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Record" element={<Record />} />
          <Route path="/Alarm" element={<Alarm />} />
          <Route path="/Stopwatch" element={<Stopwatch />} />
        </Routes>
      </BrowserRouter>

      <footer className="footer">
        <div className="footer-content">
          <div className="left-content">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Record">Record</a></li>
                <li><a href="/Alarm">Alarm</a></li>
                <li><a href="/Stopwatch">Stopwatch</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;


