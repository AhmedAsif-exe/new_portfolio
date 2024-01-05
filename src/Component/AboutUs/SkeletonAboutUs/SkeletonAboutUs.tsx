import classes from "./Skeleton.module.css";
import { Skeleton } from "@mantine/core";
const SkeletonAboutUs = () => {
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
          <Skeleton height={50} width="30%" radius="xl" />
        </div>
      </div>
      <div className={classes.images}>
        <Skeleton circle height="60%" className={classes.img} />
        <Skeleton height={20} width="30%" className={classes.p} radius="xl" />
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
