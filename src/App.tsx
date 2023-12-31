import React, { useRef } from "react";
import "./App.css";
import TitlePage from "./Component/TitlePage/TitlePage";
import AboutUs from "./Component/AboutUs/AboutUs";
import Skills from "./Component/Skills/Skills";
import Works from "./Component/Works/Works";
import Footer from "./Component/Footer/Footer";

function App() {
  const AboutUsRef = useRef<HTMLElement>(null);
  const SkillsRef = useRef<HTMLElement>(null);
  const WorksRef = useRef<HTMLElement>(null);
  return (
    <div className="App">
      <TitlePage AboutUs={AboutUsRef} Skills={SkillsRef} Works={WorksRef} />
      <AboutUs ref={AboutUsRef} />
      <Skills ref={SkillsRef} />
      <Works ref={WorksRef} />
      <Footer />
    </div>
  );
}

export default App;
