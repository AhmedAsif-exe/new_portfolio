import React, { useRef } from "react";
import "./App.css";
import TitlePage from "./Component/TitlePage/TitlePage";
import AboutUs from "./Component/AboutUs/AboutUs";
import Skills from "./Component/Skills/Skills";
import Works from "./Component/Works/Works";

function App() {
  const AboutUsRef = useRef<HTMLElement>(null);
  const SkillsRef = useRef<HTMLElement>(null);
  const WorksRef = useRef<HTMLElement>(null);
  console.log(AboutUsRef, SkillsRef, WorksRef);
  return (
    <div className="App">
      <TitlePage AboutUs={AboutUsRef} Skills={SkillsRef} Works={WorksRef} />
      <AboutUs ref={AboutUsRef} />
      <Skills ref={SkillsRef} />
      <Works ref={WorksRef} />
    </div>
  );
}

export default App;
