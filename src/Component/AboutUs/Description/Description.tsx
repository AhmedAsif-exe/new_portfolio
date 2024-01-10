import { FC } from "react";
import classes from "./Description.module.css";
import "react-loading-skeleton/dist/skeleton.css";
interface Props {
  description: string[];
  clickHandler: () => void;
}
const Description: FC<Props> = (props) => {
  const { description, clickHandler } = props;
  return (
    <div className={classes.description}>
      <h2>About Me</h2>

      <div className={classes.content}>
        {description?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div>
        <button onClick={clickHandler}>My Works</button>
      </div>
    </div>
  );
};

export default Description;
