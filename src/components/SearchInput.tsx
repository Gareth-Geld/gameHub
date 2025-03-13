import { HStack, Input, Stack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { InputGroup } from "../components/ui/input-group";
import { BsSearch } from "react-icons/bs";

interface Props {
  OnSearch: (searchText: string) => void;
}

const SearchInput = ({ OnSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          OnSearch(ref.current.value);
        }
      }}
    >
      <HStack width={"4/12"} marginLeft={130}>
        <InputGroup flex={"1"} startElement={<BsSearch></BsSearch>}>
          <Input
            ref={ref}
            borderRadius={10}
            placeholder="search games..."
            variant={"subtle"}
          />
        </InputGroup>
      </HStack>
    </form>
  );
};

export default SearchInput;
