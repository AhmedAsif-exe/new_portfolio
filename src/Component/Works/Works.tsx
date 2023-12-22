import classes from "./Works.module.css";
import { works } from "../../Utils/DataFile";
import { BadgeCard } from "./BadgeCard/BadgeCard";
import { Carousel } from "react-responsive-3d-carousel";
import { forwardRef } from "react";
const Works = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className={classes.body} id="works" ref={ref}>
      <h2>My Works</h2>
      <Carousel
        interval={5000}
        height="320px"
        showIndicators={false}
        showStatus={false}
      >
        {works.map((work) => (
          <BadgeCard {...work} />
        ))}
      </Carousel>
    </section>
  );
});

export default Works;
