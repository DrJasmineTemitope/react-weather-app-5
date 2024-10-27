import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchEngine />
        <footer>
          This project is built by{" "}
          <a
            href="https://gilded-caramel-cc06eb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Temitope Lawal {""}
          </a>
          and Open Source on Github
        </footer>
      </div>
    </div>
  );
}
