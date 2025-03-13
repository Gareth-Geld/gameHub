import { Button } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            {"Order by: Relevance"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default SortSelector;
