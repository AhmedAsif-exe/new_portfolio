import classes from "./Description.module.css";
const Description = () => {
  return (
    <div className={classes.description}>
      <h2>About Me</h2>
      <div className={classes.content}>
        <p>
          Hey there! I'm Ahmed :D. I'm a Web developer with a passion for
          crafting responsive and user-friendly websites.
        </p>
        <p>
          Detail-oriented and problem-solving enthusiast, I navigate the digital
          realm armed with code and creativity. A tech addict and collaborative
          team player.
        </p>
        <p>
          Welcome to my portfolio, where I turn ideas into interactive
          experiences
        </p>
      </div>
      <div>
        <button>My Works</button>
      </div>
    </div>
  );
};

export default Description;
