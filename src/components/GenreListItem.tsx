import { HStack, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { GenreObject } from "../Hooks/useGenres";
import getCroppedImage from "../Services/image-url";

interface Props {
  Genre: GenreObject;
  onSelectGenre: (genre: GenreObject) => void;
  selectedGenre: GenreObject | null;
}

const GenreListItem = ({ selectedGenre, Genre, onSelectGenre }: Props) => {
  return (
    <>
      <ListItem paddingY={2} key={Genre.id}>
        <HStack>
          <Image
            borderRadius={5}
            boxSize={"35px"}
            objectFit={"cover"}
            src={getCroppedImage(Genre.image_background)}
          />
          <Button
            whiteSpace="normal"
            key={Genre.id}
            onClick={() => onSelectGenre(Genre)}
            variant={"plain"}
            fontSize={"lg"}
            fontWeight={Genre.id === selectedGenre?.id ? "bold" : "normal"}
          >
            {Genre.name}
          </Button>
        </HStack>
      </ListItem>
    </>
  );
};

export default GenreListItem;
