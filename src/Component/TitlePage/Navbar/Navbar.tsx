import classes from "./Navbar.module.css";
import Hamburger from "../../../Utils/svg/Hamburger.svg";
const Navbar = () => {
  return (
    <nav className={classes.header}>
      <h2>DG.</h2>
      <img
        src={Hamburger}
        className={classes["bm-burger-button"]}
        alt="Hamburger Icon"
      />
    </nav>
  );
};
export default Navbar;
