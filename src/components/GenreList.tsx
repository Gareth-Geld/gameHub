import React from "react";
import useGenres, { GenreObject } from "../Hooks/useGenres";
import useData from "../Hooks/UseData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImage from "../Services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useData<GenreObject>("/genres");
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
