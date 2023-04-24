import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type ImageCardProps = {};

const ImageCard: React.FC<ImageCardProps> = () => {
  return (
    <Box
      boxSize="90px"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      pos={"relative"}
    >
      <Image
        src={
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        alt=""
        boxSize="90px"
        objectFit="cover"
      />
    </Box>
  );
};
export default ImageCard;
