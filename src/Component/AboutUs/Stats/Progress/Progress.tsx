import { Progress } from "@mantine/core";
import { FC } from "react";
import classes from "./Progress.module.css";
interface Props {
  name: string;
  proficiency: number;
}
const Stats: FC<Props> = (props) => {
  const { name, proficiency } = props;
  return (
    <div className={classes.proficiencyContainer}>
      <p>
        <span>{name}</span>
        <span>{proficiency}%</span>
      </p>
      <Progress value={proficiency} mt="md" size="lg" radius="xl" />
    </div>
  );
};
export default Stats;
