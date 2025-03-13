import { Button } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  nameOfOrder: string;
}

const SortSelector = ({ nameOfOrder, onSelectSortOrder }: Props) => {
  const sortOrder = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === nameOfOrder
  );

  return (
    <>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            {currentSortOrder?.label || "Order by: Relevance"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {sortOrder.map((order) => (
            <MenuItem data-value={order.value} key={order.value}>
              <button onClick={() => onSelectSortOrder(order.value)}>
                {order.label}
              </button>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default SortSelector;
