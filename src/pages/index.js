import React from "react";
import "../App.scss";
import {
  Adversity,
  Benefits,
  Footer,
  Gallery,
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
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
