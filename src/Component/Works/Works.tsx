import classes from "./Works.module.css";
import { BadgeCard } from "./BadgeCard/BadgeCard";
import { Carousel } from "react-responsive-3d-carousel";
import { forwardRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKS } from "../../Utils/Query/getWork"; // Replace with the actual path
import { Loader } from "@mantine/core";

interface workType {
  key: string;
  name: string;
  src: { asset: { url: string } }[];
  description: string;
  link: string | null;
  badges: string[];
  github: string | null;
}
const Works = forwardRef<HTMLElement>((_, ref) => {
  const { loading, error, data } = useQuery(GET_WORKS);

  const works = data?.allWorks.map((work: any) => {
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
  let output;
  if (loading) output = <Loader color="gray" size="lg" type="dots" />;
  if (error) output = <p>Error: {error.message}</p>;
  if (!error && !loading) {
    output = (
      <>
        <h2>My Works</h2>
        <Carousel
          interval={5000}
          height="320px"
          showIndicators={false}
          showStatus={false}
        >
          {works.map((work: workType) => (
            <BadgeCard {...work} />
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
