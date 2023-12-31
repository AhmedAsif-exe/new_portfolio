import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Spoiler,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./BadgeCard.module.css";
import { useState } from "react";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";

interface Props {
  name: string;
  src: { asset: { url: string } }[];
  description: string;
  link: string | null;
  badges: string[];
  github: string | null;
}
export function BadgeCard(props: Props) {
  const { name, src, description, link, badges, github } = props;

  const features = badges.map((badge) => (
    <Badge variant="white" key={badge}>
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
      >
        <Carousel
          loop
          getEmblaApi={setEmbla}
          height="100%"
          withControls={false}
        >
          {src.map((link) => (
            <Carousel.Slide key={link.asset.url}>
              <Image
                src={link.asset.url}
                alt={name}
                key={link.asset.url}
                loading="lazy"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Modal>
      <Card radius={0} p="md" className={classes.card} bg="#333434">
        <Card.Section className={classes.section} p={15}>
          <Group justify="space-evenly">
            <Text fz="xl" fw={500} c="white" className={classes["title"]}>
              {name}
            </Text>
            <button className={classes.button} onClick={open}>
              <Image
                src={src[0].asset.url}
                alt={name}
                height={100}
                w="auto"
                fit="contain"
              />
            </button>
          </Group>

          <Text fz="sm" c="white" ta="left" className={classes.description}>
            <Spoiler maxHeight={60} showLabel="Show more" hideLabel="Hide">
              {description}
            </Spoiler>
          </Text>
        </Card.Section>

        {window.innerWidth > 600 && (
          <Card.Section className={classes.section}>
            <Group gap={7} mt={2} mx="auto" px={16}>
              {features}
            </Group>
          </Card.Section>
        )}

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
