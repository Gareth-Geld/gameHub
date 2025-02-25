import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../components/ui/skeleton";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <>
      <List.Root variant="plain">
        <ListItem padding={2}>
          <SkeletonText height={"35px"} noOfLines={1} />
        </ListItem>
      </List.Root>
    </>
  );
};

export default GenreListSkeleton;
