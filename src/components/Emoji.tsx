import React from "react";
import bullsEye from "../images/bulls-eye.webp";
import thumbsUp from "../images/thumbs-up.webp";
import meh from "../images/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "thumbsUp" },
    5: { src: bullsEye, alt: "bullsEye" },
  };
  return <div></div>;
};

export default Emoji;
