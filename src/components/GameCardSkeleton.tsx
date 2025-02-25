import { CardBody, CardRoot } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "../components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <CardRoot>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
