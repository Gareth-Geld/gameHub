import React from "react";
import useGenres, { GenreObject } from "../Hooks/useGenres";
import useData from "../Hooks/UseData";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImage from "../Services/image-url";
import GameCardContainer from "./GameCardContainer";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItem from "./GenreListItem";

interface Props {
  onSelectGenre: (genre: GenreObject) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return null;

  if (isLoading)
    return skeletons.map((skeleton) => (
      <GameCardContainer key={skeleton}>
        <GenreListSkeleton />
      </GameCardContainer>
    ));
  return (
    <>
      <List.Root variant="plain">
        {data.map((data) => (
          <>
            <GameCardContainer key={data.id}>
              <GenreListItem onSelectGenre={onSelectGenre} Genre={data} />
            </GameCardContainer>
          </>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
