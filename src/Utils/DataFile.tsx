import mangaQuest from "./Images/manga-quest.png";
import mangaQuest2 from "./Images/manga-quest2.png";
import mangaQuest3 from "./Images/manga-quest3.png";
import mangaQuest4 from "./Images/manga-quest4.png";

import YelpCamp from "./Images/YelpCamp.png";
import YelpCamp2 from "./Images/YelpCamp2.png";
import YelpCamp3 from "./Images/YelpCamp3.png";

import Portfolio1 from "./Images/Portfolio1.png";
import Portfolio2 from "./Images/Portfolio2.png";
import Portfolio3 from "./Images/Portfolio3.png";
import Portfolio4 from "./Images/Portfolio4.png";
import { v4 as uuidv4 } from "uuid";

import Css from "./svg/Css.svg";
import Html from "./svg/Html.svg";
import JavaScript from "./svg/JavaScript.svg";
import React from "./svg/React.svg";
import Node from "./svg/Node.svg";
import TypeScript from "./svg/TypeScript.svg";
import Cpp from "./svg/Cpp.svg";
import Python from "./svg/Python.svg";
import Next from "./svg/Next.svg";
const techIcons = [
  { name: "CSS", icon: Css },
  { name: "HTML", icon: Html },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: React },
  { name: "Node.js", icon: Node },
  { name: "TypeScript", icon: TypeScript },
  { name: "C++", icon: Cpp },
  { name: "Python", icon: Python },
  { name: "Next", icon: Next },
];

const otherStuff = [
  "Animations with CSS",
  "JavaScript ES2015, ES2016, ES2017",
  "Bootstrap",
  "Express.js",
  "MongoDB",
  "Restful APIs with Node and MongoDB",
  "Firebase",
  "Git",
  "Redux",
  "Sanity (Headless CMS)",
  "GraphQL",
  "Apollo Server",
  "Apollo Client",
];
const Skills = [
  { name: "Technical Proficiency", proficiency: 87 },
  { name: "Effective Communication", proficiency: 100 },
  { name: "Time Management", proficiency: 85 },
  { name: "Problem Solving", proficiency: 100 },
];

const works = [
  {
    key: uuidv4(),
    name: "Manga Quest",
    src: [mangaQuest, mangaQuest2, mangaQuest3, mangaQuest4],
    description:
      "I've created an e-commerce website that replicates a manga store, where I can showcase my passion for Japanese literature. The website was developed using React, Node/Express, and Firebase as the tech stack.",
    github: "https://github.com/AhmedAsif-exe/manga-store",

    link: "https://manga-quest.web.app/",
    badges: [
      { label: "React" },
      { label: "Node" },
      { label: "Express" },
      { label: "Firebase" },
      { label: "CSS" },
      { label: "JS" },
    ],
  },
  {
    key: uuidv4(),
    name: "Yelp Camp",
    src: [YelpCamp, YelpCamp2, YelpCamp3],
    description:
      "I have developed a review application that enables users to both read and write reviews for well-known campsites worldwide. Node.js/Express for the back-end and MongoDB as the database. EJS templates were used to serve the websites on the Front-End. While it hasn't been deployed yet, you can assess the code quality by visiting the GitHub repository.",
    github: "https://github.com/AhmedAsif-exe/YelpCamp",
    link: null,
    badges: [
      { label: "Css" },
      { label: "Node" },
      { label: "Express" },
      { label: "MongoDB" },
      { label: "EJS" },
      { label: "BootStrap" },
      { label: "JS" },
    ],
  },
  {
    key: uuidv4(),
    name: "The OG Portfolio",
    src: [Portfolio1, Portfolio2, Portfolio3, Portfolio4],
    description:
      "In my initial foray into portfolio development, I harnessed TypeScript and the React framework, with Mantine UI enhancing the frontend. This project aimed to showcase my skills using a sleek and responsive design. TypeScript bolstered code quality, while Mantine UI's pre-built components ensured a polished appearance. This first attempt represents my commitment to modern web development, integrating key technologies for a refined and user-friendly portfolio.",

    github: "https://github.com/AhmedAsif-exe/my-portfolio",
    link: "https://my-portfolio-4a520.web.app/",
    badges: [
      { label: "React" },
      { label: "Type-Script" },
      { label: "Mantine-UI" },
      { label: "JS" },
      { label: "CSS" },
    ],
  },
];

export { Skills, otherStuff, techIcons, works };
