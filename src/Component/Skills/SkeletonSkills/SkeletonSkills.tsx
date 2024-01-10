import classes from "./SkeletonSkills.module.css";
import { Skeleton } from "@mantine/core";

const SkeletonSkills = () => {
  const techIcons = Array.from({ length: 9 });
  return (
    <>
      <Skeleton height={"62px"} width={"20%"} m="20px" radius="xl" />
      <div className={classes["tech-skeleton"]}>
        {techIcons.map((_, index) => {
          return (
            <Skeleton key={index} height={"80px"} width={"80px"} m={"10px"} />
          );
        })}
      </div>
      <Skeleton height={"62px"} width={"20%"} m="20px" radius="xl" />
      <div className={classes.others}>
        <div>
          <Skeleton height={"10px"} width={"100px"} />
          <Skeleton height={"10px"} width={"200px"} />
          <Skeleton height={"10px"} width={"250px"} />
        </div>
        <div>
          <Skeleton height={"10px"} width={"50px"} />
          <Skeleton height={"10px"} width={"150px"} />
          <Skeleton height={"10px"} width={"250px"} />
          <Skeleton height={"10px"} width={"100px"} />
        </div>
        <div>
          <Skeleton height={"10px"} width={"75px"} />
          <Skeleton height={"10px"} width={"300px"} />
          <Skeleton height={"10px"} width={"25px"} />
          <Skeleton height={"10px"} width={"150px"} />
        </div>
      </div>
    </>
  );
};
export default SkeletonSkills;
