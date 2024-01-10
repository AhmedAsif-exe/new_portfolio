import classes from "./Skeleton.module.css";
import { Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";
const SkeletonAboutUs = () => {
  const [buttonWidth, setButtonWidth] = useState("");
  const [imageWidth, setImageWidth] = useState("");

  useEffect(() => {
    const adjustButton = () => {
      if (window.innerWidth < 1146) {
        setButtonWidth("30%");
        setImageWidth("400px");
      } else {
        setButtonWidth("70%");
        setImageWidth("90%");
      }
    };

    // Initial adjustment
    adjustButton();

    // Add event listener for the 'resize' event
    window.addEventListener("resize", adjustButton);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", adjustButton);
    };
  }, []);
  return (
    <>
      <div className={classes.description}>
        <Skeleton height={13} width="25%" radius="xl" />
        <div className={classes.content}>
          <Skeleton height={8} mt={15} radius="xl" />
          <Skeleton height={8} mt={15} radius="xl" />
          <Skeleton height={8} mt={15} width="30%" radius="xl" />

          <Skeleton height={8} mt={30} radius="xl" />
          <Skeleton height={8} mt={15} radius="xl" />
          <Skeleton height={8} mt={15} radius="xl" />
          <Skeleton height={8} mt={15} radius="xl" />

          <Skeleton height={8} mt={30} radius="xl" />
          <Skeleton height={8} mt={15} width="70%" radius="xl" />
        </div>

        <div>
          <Skeleton height={50} width={buttonWidth} radius="xl" />
        </div>
      </div>
      <div className={classes.images}>
        <Skeleton circle className={classes.img} height={imageWidth} />
        <Skeleton
          height={20}
          width="70%"
          className={classes.p}
          radius="xl"
          mt="20"
        />
      </div>
      <div className={classes.stats}>
        <Skeleton
          height={13}
          width="25%"
          radius="xl"
          className={classes.heading}
        />
        <div>
          <div className={classes.proficiencyContainer}>
            <Skeleton height={20} mt={80} radius="xl" />
          </div>
          <div className={classes.proficiencyContainer}>
            <Skeleton height={20} mt={60} radius="xl" />
          </div>
          <div className={classes.proficiencyContainer}>
            <Skeleton height={20} mt={60} radius="xl" />
          </div>
          <div className={classes.proficiencyContainer}>
            <Skeleton height={20} mt={60} radius="xl" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SkeletonAboutUs;
