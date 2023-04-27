import { Person } from "@/types/types";
import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type SeminarCardProps = {
  person: Person;
};

const SeminarCard: React.FC<SeminarCardProps> = ({ person }) => {
  return (
    <Flex direction="column">
      <Box
        bgGradient="linear(to-b, gray.200, white)"
        rounded=".7rem"
        p={1}
        h={"240px"}
        w={{ base: "200px", md: "100%" }}
        placeSelf="center"
        mb={6}
      >
        <Card p={0} mb={6}>
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt=""
            h={"240px"}
            w={{ base: "200px", md: "100%" }}
            objectFit="cover"
            rounded={"md"}
          />
        </Card>
      </Box>

      <Flex direction="column" align="center">
        <Heading
          as="h3"
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          textAlign="center"
        >
          {person.name}
        </Heading>
        <Text fontWeight={300} fontSize="12pt" color="gray.600" mb={6}>
          {person.role}
        </Text>
      </Flex>
    </Flex>
  );
};
export default SeminarCard;
