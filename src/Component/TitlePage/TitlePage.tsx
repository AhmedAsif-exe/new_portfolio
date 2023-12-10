import classes from "./TitlePage.module.css";
import Navbar from "./Navbar/Navbar";
import TitleContent from "./TitleContent/TitleContent";
const TitlePage = () => {
  return (
    <section className={classes.body}>
      <Navbar />
      <TitleContent />
    </section>
  );
};

export default TitlePage;
