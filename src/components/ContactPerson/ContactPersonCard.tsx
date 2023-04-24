import {
  Avatar,
  Box,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

type ContactPersonCardProps = {};

const ContactPersonCard: React.FC<ContactPersonCardProps> = () => {
  return (
    <Box
      w="xl"
      bg={useColorModeValue("gray.100", "gray.800")}
      rounded={"lg"}
      p={4}
      overflow={"hidden"}
    >
      <VStack>
        <Link as={NextLink} href="">
          082178686298
        </Link>
        <Text>a.n. Momoluku</Text>
      </VStack>
    </Box>
  );
};
export default ContactPersonCard;
