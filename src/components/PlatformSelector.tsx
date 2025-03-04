import { Button } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "./ui/menu";

const PlatformSelector = () => {
  return (
    <>
      <MenuRoot>
        <MenuTrigger />
        <MenuContent props={"tetster"} ref={"menu"}>
          <MenuItem />
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default PlatformSelector;
