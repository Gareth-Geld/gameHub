import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"} />
      <Text>NavBar</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
