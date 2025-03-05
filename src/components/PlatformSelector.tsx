import { Button } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import usePlatforms, { PlatformObject } from "../Hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: PlatformObject) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }

  return (
    <>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            Platforms <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem
              onClick={() => {
                onSelectedPlatform(platform);
              }}
              key={platform.id}
              data-value="new-txt"
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default PlatformSelector;
