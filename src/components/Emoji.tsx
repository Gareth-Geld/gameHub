import React from "react";
import bullsEye from "../images/bulls-eye.webp";
import thumbsUp from "../images/thumbs-up.webp";
import meh from "../images/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "thumbsUp", boxSize: "20px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={3} />;
};

export default Emoji;
