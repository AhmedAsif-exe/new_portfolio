import classes from "./Skills.module.css";
import { otherStuff, techIcons } from "../../Utils/DataFile";
const Skills = () => {
  return (
    <section className={classes["skills"]}>
      <h2>My Trade</h2>
      {
        <div>
          {techIcons.map((item, index) => (
            <img loading="lazy" src={item.icon} key={index} alt={item.name} />
          ))}
        </div>
      }
      <h2>Others</h2>
      {
        <div>
          {otherStuff.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      }
    </section>
  );
};
export default Skills;
