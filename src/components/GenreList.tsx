import React from "react";
import useGenres, { GenreObject } from "../Hooks/useGenres";
import useData from "../Hooks/UseData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImage from "../Services/image-url";
import GameCardContainer from "./GameCardContainer";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useData<GenreObject>("/genres");

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return null;

  if (isLoading)
    return skeletons.map((skeleton) => (
      <GameCardContainer>
        <GenreListSkeleton key={skeleton} />
      </GameCardContainer>
    ));
  return (
    <>
      <List.Root variant="plain">
        {data.map((data) => (
          <>
            <ListItem paddingY={2} key={data.id}>
              <HStack>
                <Image
                  borderRadius={5}
                  boxSize={"35px"}
                  src={getCroppedImage(data.image_background)}
                />
                <Text fontSize={"lg"}>{data.name}</Text>
              </HStack>
            </ListItem>
          </>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
