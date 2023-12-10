import classes from "./AboutUs.module.css";
import Description from "./Description/Description";
import Me from "../../Utils/Images/Me.jpg";
import Stats from "./Stats/Stats";
const AboutUs = () => {
  return (
    <section className={classes.body}>
      <Description />
      <div>
        <img src={Me} alt="My photo" />
      </div>

      <Stats />
    </section>
  );
};

export default AboutUs;
