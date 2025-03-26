import React from "react";
import { GameObjects } from "../Hooks/useGames";
import {
  Card,
  CardBody,
  CardRoot,
  Heading,
  Icon,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import Metascore from "./metascore";
import getCroppedImage from "../Services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: GameObjects;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody display="flex">
        <HStack justifyContent={"space-between"} mt="auto" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metascore score={game.metacritic} />
        </HStack>
        <Heading size="2xl">{game.name}</Heading>
        <HStack justifyContent={"end"}>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
