import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput></SearchInput>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
