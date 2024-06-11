import classes from "./Skills.module.css";
import { forwardRef } from "react";
import { otherStuff } from "../../Utils/DataFile";
import { GET_TechIcons } from "../../Utils/Query/getTechIcons";
import { useQuery } from "@apollo/client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SkeletonSkills from "./SkeletonSkills/SkeletonSkills";
import Error from "../../Utils/Error/Error";
interface TechIconItem {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
}
const Skills = forwardRef<HTMLElement>((_, ref) => {
  const { loading, error, data } = useQuery(GET_TechIcons);
  let output;
  if (loading) output = <SkeletonSkills />;
  if (error) output = <Error message={error.message} />;
  if (!error && !loading) {
    output = (
      <>
        <h2>My Trade</h2>
        {
          <div>
            {data.allTechIcon.map((item: TechIconItem) => (
              <LazyLoadImage
                alt={item.name}
                key={item._id}
                src={item.image.asset.url}
                effect="blur"
                height={100}
                width={100}
              />
            ))}
          </div>
        }
        <h2>Others</h2>
        {
          <div>
            {otherStuff.map((item, index) => (
              <p key={index} className={classes.items}>
                {item}
              </p>
            ))}
          </div>
        }
      </>
    );
  }
  return (
    <section className={classes["skills"]} id="Skills" ref={ref}>
      {output}
    </section>
  );
});
export default Skills;
