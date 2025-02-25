import { HStack, ListItem, Image, Button } from "@chakra-ui/react";
import React from "react";
import { GenreObject } from "../Hooks/useGenres";
import getCroppedImage from "../Services/image-url";

interface Props {
  Genre: GenreObject;
  onSelectGenre: (genre: GenreObject) => void;
}

const GenreListItem = ({ Genre, onSelectGenre }: Props) => {
  return (
    <>
      <ListItem paddingY={2} key={Genre.id}>
        <HStack>
          <Image
            borderRadius={5}
            boxSize={"35px"}
            src={getCroppedImage(Genre.image_background)}
          />
          <Button
            key={Genre.id}
            onClick={() => onSelectGenre(Genre)}
            variant={"plain"}
            fontSize={"lg"}
          >
            {Genre.name}
          </Button>
        </HStack>
      </ListItem>
    </>
  );
};

export default GenreListItem;
