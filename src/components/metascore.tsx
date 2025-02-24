import React from "react";
import { GameObjects } from "../Hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const metascore = ({ score }: Props) => {
  let color =
    score > 75
      ? "green"
      : score > 60
      ? "yellow"
      : score > 40
      ? "orange"
      : score < 39
      ? "red"
      : "";

  return (
    <Badge width={"25px"} size="sm" borderRadius={"4px"} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default metascore;
