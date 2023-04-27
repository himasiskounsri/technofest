import { ContactPerson } from "@/types/types";
import {
  Box,
  Icon,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { BsInstagram, BsLine, BsWhatsapp } from "react-icons/bs";

type ContactPersonCardProps = {
  contactPerson: ContactPerson;
};

const ContactPersonCard: React.FC<ContactPersonCardProps> = ({
  contactPerson,
}) => {
  return (
    <Box
      w="xl"
      bg={useColorModeValue("gray.100", "gray.800")}
      rounded={"lg"}
      p={4}
      overflow={"hidden"}
    >
      <VStack>
        <Text>Momoluku</Text>
        {contactPerson.whatsapp && (
          <Link
            as={NextLink}
            href={`https://wa.me/${contactPerson.whatsapp}`}
            display="flex"
            alignItems="center"
            isExternal
          >
            <Icon as={BsWhatsapp} mr={1} /> {contactPerson.whatsapp}
          </Link>
        )}
        {contactPerson.line && (
          <Link
            as={NextLink}
            href={`https://msng.link/o/?${contactPerson.line}=ln`}
            display="flex"
            alignItems="center"
          >
            <Icon as={BsLine} mr={1} /> {contactPerson.line}
          </Link>
        )}
        {contactPerson.instagram && (
          <Link as={NextLink} href="" display="flex" alignItems="center">
            <Icon as={BsInstagram} mr={1} /> {contactPerson.instagram}
          </Link>
        )}
      </VStack>
    </Box>
  );
};
export default ContactPersonCard;
