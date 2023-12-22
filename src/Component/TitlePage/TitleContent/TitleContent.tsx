import classes from "./TitleContent.module.css";
import { useDisclosure } from "@mantine/hooks";
import ReachOut from "../../Reachout/ReachOut";

const TitleContent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className={classes.content}>
      <ReachOut opened={opened} close={close} />
      <h1>Welcome To My Digital Odyssey</h1>
      <p>Where I Find Digital Solutions For A Connected World</p>
      <button onClick={open}>Reach Out</button>
    </div>
  );
};

export default TitleContent;
