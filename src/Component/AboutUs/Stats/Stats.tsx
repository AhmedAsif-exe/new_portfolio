import classes from "./Stats.module.css";
import Progress from "./Progress/Progress";
import { FC } from "react";
interface Props {
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
}
const Stats: FC<Props> = (props) => {
  const { skills } = props;

  return (
    <div className={classes.body}>
      <h2>My Skills</h2>
      <div>
        {skills.map((skill) => (
          <Progress {...skill} key={skill.name} />
        ))}
      </div>
    </div>
  );
};
export default Stats;
