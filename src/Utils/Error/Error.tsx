import classes from "./Error.module.css";
import { FC } from "react";
type Props = {
  message: string;
};
const Error: FC<Props> = (props) => {
  const { message } = props;
  return (
    <div className={classes.container}>
      <h1>An error has occured.</h1>
      <h1>
        <span className="ascii">(°□°）╯︵ ╯┻━┻</span>
      </h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
