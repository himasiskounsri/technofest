import { Box, Card, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type ImageCardProps = {};

const ImageCard: React.FC<ImageCardProps> = () => {
  return (
    <Card
      h="90px"
      variant="outline"
      bg="transparent"
      // bg={useColorModeValue("white", "gray.900")}
      // boxShadow={"2xl"}
      // rounded={"md"}
      // overflow={"hidden"}
      // pos={"relative"}
    >
      <Image src="/images/competition1.png" alt="" boxSize="full" />
    </Card>
  );
};
export default ImageCard;
