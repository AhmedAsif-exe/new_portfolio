import "react-lazy-load-image-component/src/effects/blur.css";
import classes from "./AboutUs.module.css";
import Description from "./Description/Description";
import Stats from "./Stats/Stats";
import { useQuery } from "@apollo/client";
import { forwardRef } from "react";
import { GET_Info } from "../../Utils/Query/getInfo";
import SkeletonAboutUs from "./SkeletonAboutUs/SkeletonAboutUs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-loading-skeleton/dist/skeleton.css";
import Error from "../../Utils/Error/Error";
interface AboutMeItem {
  _id: string;
  personalInfo: {
    description: string[];
  };
  image: {
    asset: {
      url: string;
    };
  };
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
}
interface Props {
  Works: React.RefObject<HTMLElement>;
}
const AboutUs = forwardRef<HTMLElement, Props>(({ Works }, ref) => {
  const { loading, error, data } = useQuery(GET_Info);
  const clickHandler = () => {
    Works.current?.scrollIntoView({ behavior: "smooth" });
  };

  const extractData = (data: AboutMeItem) => {
    return {
      key: data?._id,
      description: data?.personalInfo.description,
      image: data?.image.asset.url,
      skills: data?.skills,
    };
  };
  const info = extractData(data?.allAboutme[0]);
  let output;
  if (loading) output = <SkeletonAboutUs />;
  if (error) output = <Error message={error.message} />;
  if (!error && !loading) {
    output = (
      <>
        <Description
          description={info?.description}
          clickHandler={clickHandler}
        />

        <div>
          <LazyLoadImage
            src={info?.image}
            effect="blur"
            width={"100%"}
            className={classes.lazyImage}
          />
          <p>M.Ahmed Asif</p>
        </div>
        <Stats skills={info?.skills} />
      </>
    );
  }
  return (
    <section className={classes.body} ref={ref}>
      {output}
    </section>
  );
});

export default AboutUs;
