import { Progress, Tooltip } from "@mantine/core";
import { FC, useState, useEffect } from "react";
import classes from "./Progress.module.css";

interface Props {
  name: string;
  proficiency: number;
}

function getInitials(inputString: string): string {
  const words = inputString.split(" ");

  const initials = words
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase())
    .join("");

  return initials;
}

const Stats: FC<Props> = (props) => {
  const { name, proficiency } = props;
  const [displayShortName, setDisplayShortName] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDisplayShortName(window.innerWidth < 950 && window.innerWidth > 614);
    };

    handleResize(); // Initial call to set displayShortName based on the window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayName = displayShortName ? (
    <Tooltip label={name}>
      <span>{getInitials(name)}</span>
    </Tooltip>
  ) : (
    <span>{name}</span>
  );

  return (
    <div className={classes.proficiencyContainer}>
      <p>
        {displayName}
        <span>{proficiency}%</span>
      </p>
      <Progress value={proficiency} mt="md" size="lg" radius="xl" />
    </div>
  );
};

export default Stats;
