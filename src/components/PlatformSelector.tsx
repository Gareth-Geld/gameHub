import { Button, MenuItemCommand } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import usePlatforms, { PlatformObject } from "../Hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: PlatformObject) => void;
  selectedPlatform: PlatformObject | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }

  return (
    <>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            {selectedPlatform?.name || "platforms"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem key={platform.id} data-value="new-txt">
              <button
                onClick={() => {
                  onSelectedPlatform(platform);
                }}
              >
                {platform.name}{" "}
              </button>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default PlatformSelector;
