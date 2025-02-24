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
} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: GameObjects;
}

const GameCard = ({ game }: Props) => {
  //   game.parent_platforms.map(({platform})=> (
  //   if(platform.name === "playstation") {
  //      let iconIcon = "Playstation"
  //   }
  //   ))
  return (
    <CardRoot borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading size="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
