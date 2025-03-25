import apiClient from "../Services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import { GameObjects } from "../Hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useData from "../Hooks/UseData";
import GenreListItemContainer from "./GenreListItemContainer";
import { GenreObject } from "../Hooks/useGenres";
import PlatformSelector from "./PlatformSelector";
import { PlatformObject } from "../Hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
        columnGap={6}
        rowGap={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((data) => (
          <GenreListItemContainer key={data.name + data.id}>
            <GameCard game={data} />
          </GenreListItemContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
