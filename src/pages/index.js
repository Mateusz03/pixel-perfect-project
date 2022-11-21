import React from "react";
import "../App.scss";
import {
  Adversity,
  Benefits,
  Header,
  News,
  Offer,
} from "../components/imports.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Offer />
      <Benefits />
      <Adversity />
      <News />
    </div>
  );
}

export default App;
