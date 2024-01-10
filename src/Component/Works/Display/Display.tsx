import { Card, Modal, Button } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BadgeCard } from "../BadgeCard/BadgeCard";
import { useColor } from "color-thief-react";
import "react-lazy-load-image-component/src/effects/blur.css";
import classes from "./Display.module.css";
interface Props {
  name: string;
  src: { asset: { url: string } }[];
  description: string;
  link: string | null;
  badges: string[];
  github: string | null;
  cardWidth: number;
}
function adjustBrightness(rgbString: string) {
  const rgbValues = rgbString.slice(4, -1).split(",").map(Number);

  const darkness =
    (rgbValues[0] * 299 + rgbValues[1] * 587 + rgbValues[2] * 114) / 1000;

  const adjustmentAmount = darkness > 128 ? -20 : 20;

  const adjustedRGBValues = rgbValues.map((value) =>
    Math.max(0, Math.min(255, value + adjustmentAmount))
  );

  const adjustedRGBString = `rgb(${adjustedRGBValues.join(", ")})`;

  return adjustedRGBString;
}

const Display: FC<Props> = (props) => {
  const { name, src, cardWidth } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const { data, loading } = useColor(src[0].asset.url, "rgbString", {
    crossOrigin: "Anonymous",
    quality: 3,
  });
  const buttonHeight =
    cardWidth < 500 ? (cardWidth * 3) / 5 - cardWidth / 2 : 50;
  const { hovered, ref } = useHover<HTMLButtonElement>();
  const CardShow = (
    <Modal
      onClose={close}
      opened={opened}
      centered
      withCloseButton={false}
      size="xl"
      padding={0}
    >
      <BadgeCard {...props} data={data} />
    </Modal>
  );
  return (
    <Card radius={"xs"} bg={loading ? "#333434" : data} style={{}} p={0}>
      <LazyLoadImage
        src={src[0].asset.url}
        width={cardWidth.toString() + "px"}
        height={(cardWidth / 2).toString() + "px"}
        effect="blur"
        className={classes["lazy-image"]}
      />
      {CardShow}
      <Button
        fullWidth
        variant={hovered ? "filled" : "transparent"}
        color={hovered ? adjustBrightness(data || "rbg(51,52,52)") : "white"}
        onClick={open}
        ref={ref}
        style={{
          transition: "background 300ms ease-out",
          fontSize: "1em",
          height: `${buttonHeight.toString()}px`,
        }}
      >
        {name}
      </Button>
    </Card>
  );
};
export default Display;
