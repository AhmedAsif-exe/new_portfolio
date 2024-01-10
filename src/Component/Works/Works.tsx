import classes from "./Works.module.css";
import { Carousel } from "react-responsive-3d-carousel";
import { forwardRef, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKS } from "../../Utils/Query/getWork";
import { Loader } from "@mantine/core";
import Display from "./Display/Display";
import Error from "../../Utils/Error/Error";

interface workType {
  _id: string;
  name: string;
  src: { asset: { url: string } }[];
  description: string;
  link: string | null;
  badges: string[];
  github: string | null;
}
const Works = forwardRef<HTMLElement>((_, ref) => {
  const { loading, error, data } = useQuery(GET_WORKS);
  const [width, setWidth] = useState(500);
  useEffect(() => {
    const makeWidth = () => {
      if (window.innerWidth <= 520)
        setWidth(Math.max(window.innerWidth - 20, 0));
    };

    makeWidth();
    window.addEventListener("resize", makeWidth);
  }, []);
  const works = data?.allWorks.map((work: workType) => {
    return {
      key: work._id,
      name: work.name,
      link: work.link,
      github: work.github,
      src: work.src,
      description: work.description,
      badges: work.badges,
    };
  });
  console.log((width * 3) / 5);
  let output;
  if (loading) output = <Loader color="gray" size="lg" type="dots" />;
  if (error) output = <Error message={error.message} />;
  if (!error && !loading) {
    output = (
      <>
        <h2>My Works</h2>
        <Carousel
          interval={5000}
          showIndicators={false}
          showStatus={false}
          width={width.toString() + "px"}
          height={((width * 3) / 5).toString() + "px"}
        >
          {works.map((work: workType) => (
            <Display {...work} cardWidth={width} />
          ))}
        </Carousel>
      </>
    );
  }
  return (
    <section className={classes.body} id="works" ref={ref}>
      {output}
    </section>
  );
});

export default Works;
