import classes from "./Navbar.module.css";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { useDisclosure } from "@mantine/hooks";
import ReachOut from "../../Reachout/ReachOut";
import { FC } from "react";
interface Props {
  array: React.RefObject<HTMLElement>[];
}
const Navbar: FC<Props> = ({ array }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const clickHandler = (position: number) => {
    console.log(position);
    array[position].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={classes.header} id="outer-container">
      <h2>Ahmed Asif.</h2>
      <ReachOut opened={opened} close={close} />
      <Menu right outerContainerId={"outer-container"}>
        <a className="menu-item" onClick={() => clickHandler(0)}>
          About Me
        </a>
        <a className="menu-item" onClick={() => clickHandler(1)}>
          Skills
        </a>
        <a className="menu-item" onClick={() => clickHandler(2)}>
          Works
        </a>
        <a className="menu-item" onClick={open}>
          Reach Out
        </a>
      </Menu>
    </nav>
  );
};
export default Navbar;
