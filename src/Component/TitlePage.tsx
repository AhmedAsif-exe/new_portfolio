import classes from "./TitlePage.module.css";
import Navbar from "./TitlePage/Navbar/Navbar";
import TitleContent from "./TitlePage/TitleContent/TitleContent";
const TitlePage = () => {
  return (
    <section className={classes.body}>
      <Navbar />
      <TitleContent />
    </section>
  );
};

export default TitlePage;
