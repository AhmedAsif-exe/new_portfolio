import classes from "./Skills.module.css";
import { forwardRef } from "react";
import { otherStuff } from "../../Utils/DataFile";
import { GET_TechIcons } from "../../Utils/Query/getTechIcons";
import { Loader } from "@mantine/core";
import { useQuery } from "@apollo/client";
const Skills = forwardRef<HTMLElement>((_, ref) => {
  const { loading, error, data } = useQuery(GET_TechIcons);
  let output;
  if (loading) output = <Loader color="gray" size="lg" type="dots" />;
  if (error) output = <p>Error: {error.message}</p>;
  if (!error && !loading) {
    output = (
      <>
        <h2>My Trade</h2>
        {
          <div>
            {data.allTechIcon.map((item: any) => (
              <img
                loading="lazy"
                src={item.icon.asset.url}
                key={item._id}
                alt={item.name}
              />
            ))}
          </div>
        }
        <h2>Others</h2>
        {
          <div>
            {otherStuff.map((item, index) => (
              <p key={index}>{item}</p>
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
