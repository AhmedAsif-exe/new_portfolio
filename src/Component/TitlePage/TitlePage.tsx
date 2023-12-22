import classes from "./TitlePage.module.css";
import Navbar from "./Navbar/Navbar";
import TitleContent from "./TitleContent/TitleContent";
import { FC } from "react";
interface Props {
  AboutUs: React.RefObject<HTMLElement>;
  Works: React.RefObject<HTMLElement>;
  Skills: React.RefObject<HTMLElement>;
}
const TitlePage: FC<Props> = ({ AboutUs, Works, Skills }) => {
  const array = [AboutUs, Skills, Works];

  return (
    <section className={classes.body}>
      <Navbar array={array} />
      <TitleContent />
    </section>
  );
};

export default TitlePage;
