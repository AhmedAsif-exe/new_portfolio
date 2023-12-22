import classes from "./Stats.module.css";
import Progress from "./Progress/Progress";
import { Skills } from "../../../Utils/DataFile";
const Stats = () => {
  return (
    <div className={classes.body}>
      <h2>My Skills</h2>
      {Skills.map((skill) => (
        <Progress {...skill} key={skill.name} />
      ))}
    </div>
  );
};
export default Stats;
