import classes from "./Skills.module.css";
import { forwardRef } from "react";
import { otherStuff, techIcons } from "../../Utils/DataFile";
const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={classes["skills"]} id="Skills" ref={ref}>
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
});
export default Skills;
