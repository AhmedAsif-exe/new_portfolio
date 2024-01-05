import 'react-lazy-load-image-component/src/effects/blur.css';
import classes from "./AboutUs.module.css";
import Description from "./Description/Description";
import Stats from "./Stats/Stats";
import { useQuery } from "@apollo/client";
import { forwardRef } from "react";
import { GET_Info } from "../../Utils/Query/getInfo";
import SkeletonAboutUs from "./SkeletonAboutUs/SkeletonAboutUs";
import { LazyLoadImage } from 'react-lazy-load-image-component';



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
interface Props{
  Works: React.RefObject<HTMLElement>;
}
const AboutUs = forwardRef<HTMLElement, Props>(({Works}, ref) => {
  const { loading, error, data } = useQuery(GET_Info);
const clickHandler = ()=>{
  Works.current?.scrollIntoView({ behavior: "smooth" });
}
  const info = data?.allAboutme.map((i: AboutMeItem) => {
    return {
      key: i._id,
      description: i.personalInfo.description,
      image: i.image.asset.url,
      skills: i.skills,
    };
  });
  console.log(data?.allAboutme[0].image.asset.url)
  let output;
  if (loading) output = <SkeletonAboutUs />;
  if (error) output = <p>Error: {error.message}</p>;
  if (!loading && !error) {
     output = (
       <>
         <Description description={info[0].description} clickHandler={clickHandler}/>
         <div>
           <LazyLoadImage src={info[0].image} effect="blur" height={"80%"} width={"80%"} className={classes.lazyImage}/>
           <p>M.Ahmed Asif</p>
         </div>
         <Stats skills={info[0].skills} />
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
