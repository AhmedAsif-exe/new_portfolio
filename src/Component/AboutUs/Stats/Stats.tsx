import classes from "./Stats.module.css";
import Progress from "./Progress/Progress";
const Skills = [
  { name: "Technical Proficiency", proficiency: 87 },
  { name: "Effective Communication", proficiency: 100 },
  { name: "Time Management", proficiency: 85 },
  { name: "Problem Solving", proficiency: 100 },
];
const Stats = () => {
  return (
    <div className={classes.body}>
      <h2>My Skills</h2>
      {Skills.map((skill) => (
        <Progress {...skill} />
      ))}
    </div>
  );
};
export default Stats;
