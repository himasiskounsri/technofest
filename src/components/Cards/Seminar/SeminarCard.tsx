import {
  Center,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";

type SeminarCardProps = {};

const SeminarCard: React.FC<SeminarCardProps> = () => {
  return (
    <Center py={6}>
      <Flex direction="column">
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          h={"240px"}
          pos={"relative"}
          mb={6}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt=""
            h={"240px"}
            w={"100%"}
            objectFit="cover"
          />
        </Box>
        <Flex direction="column">
          <Heading
            as="h3"
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            mb={2}
          >
            Boost your conversion rate
          </Heading>
          <Text color={"gray.500"} mb={6}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
};
export default SeminarCard;
