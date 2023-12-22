import classes from "./ReachOut.module.css";
import { Modal } from "@mantine/core";
import Github from "../../Utils/svg/GitHub.svg";
import UpWork from "../../Utils/svg/UpWork.svg";
import { FC } from "react";
interface Props {
  opened: boolean;
  close: () => void;
}
const ReachOut: FC<Props> = (props) => {
  const { opened, close } = props;
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      size="lg"
      centered={true}
    >
      <div className={classes.modal}>
        <h2>You Can Check Out My</h2>
        <div>
          <a href="https://github.com/AhmedAsif-exe">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.upwork.com/freelancers/~015e2428196ca409b4">
            <img src={UpWork} alt="upwork" />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ReachOut;
