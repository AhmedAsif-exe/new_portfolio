import classes from "./AboutUs.module.css";
import Description from "./Description/Description";
import Me from "../../Utils/Images/Me.jpg";
import Stats from "./Stats/Stats";

import { forwardRef } from "react";
const AboutUs = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={classes.body} ref={ref}>
      <Description />
      <div>
        <img src={Me} alt="My photo" />
        <p>M.Ahmed Asif</p>
      </div>
      <Stats />
    </section>
  );
});

export default AboutUs;
