import React from "react";
import "./App.css";
import TitlePage from "./Component/TitlePage/TitlePage";
import AboutUs from "./Component/AboutUs/AboutUs";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <div className="App">
      <TitlePage />
      <AboutUs />
      <Skills />
    </div>
  );
}

export default App;
