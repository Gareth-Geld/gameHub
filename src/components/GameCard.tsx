import React from "react";
import { GameObjects } from "../Hooks/useGames";
import { Card, CardBody, CardRoot, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: GameObjects;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading size="2xl">{game.name}</Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
