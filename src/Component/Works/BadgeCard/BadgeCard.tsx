import { Card, Text, Group, Badge, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./BadgeCard.module.css";
import { useState } from "react";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface Props {
  name: string;
  src: { asset: { url: string } }[];
  description: string;
  link: string | null;
  badges: string[];
  github: string | null;
  data: string | undefined;
}
export function BadgeCard(props: Props) {
  const { name, src, description, link, badges, github, data } = props;

  const features = badges.map((badge) => (
    <Badge color={data || "black"} key={badge} variant="white">
      {badge}
    </Badge>
  ));
  const [opened, { open, close }] = useDisclosure(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, 200);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size="xl"
        padding={0}
        id="modal"
      >
        <Carousel
          loop
          getEmblaApi={setEmbla}
          height="100%"
          withControls={false}
        >
          {src.map((link) => (
            <Carousel.Slide key={link.asset.url}>
              <LazyLoadImage
                src={link.asset.url}
                alt={name}
                key={link.asset.url}
                effect="blur"
                height={"100%"}
                width={"100%"}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Modal>
      <Card
        radius={0}
        p="md"
        className={classes.card}
        style={{
          background: data
            ? `linear-gradient(0deg, ${data} 0%, rgb(0,0,0) 100%)`
            : "#333434",
        }}
      >
        <Card.Section className={classes.section} p={15}>
          <Group justify="space-evenly">
            <Text fz="xl" fw={500} c="white" className={classes["title"]}>
              {name}
            </Text>
            <button className={classes.button} onClick={open}>
              <LazyLoadImage
                src={src[0].asset.url}
                alt={name}
                height={100}
                width="auto"
                effect="blur"
              />
            </button>
          </Group>

          <Text fz="sm" c="white" ta="left" className={classes.description}>
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group gap={7} mt={2} mx="auto" px={16}>
            {features}
          </Group>
        </Card.Section>

        <Group mt="xs">
          {link && (
            <a href={link} style={{ all: "unset" }}>
              <Button radius="md" bg="white" c="dark">
                See Live
              </Button>
            </a>
          )}
          {github && (
            <a href={github} style={{ all: "unset" }}>
              <Button radius="md" bg="white" c="dark">
                See Repository
              </Button>
            </a>
          )}
        </Group>
      </Card>
    </>
  );
}
