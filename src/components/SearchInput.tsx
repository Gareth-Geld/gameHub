import { HStack, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { InputGroup } from "../components/ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <HStack width={"5/12"}>
      <InputGroup flex={"1"} startElement={<BsSearch></BsSearch>}>
        <Input
          borderRadius={10}
          placeholder="search games..."
          variant={"subtle"}
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchInput;
