import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Stack,
  Flex,
  Icon,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";

import React from "react";

type NavbarPopoverLinkProps = {
  href: string;
  label: string;
  sublabel: string;
};

const NavbarPopoverLink: React.FC<NavbarPopoverLinkProps> = ({
  href,
  label,
  sublabel,
}) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{sublabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{
            opacity: "100%",
            transform: "translateX(0)",
          }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
export default NavbarPopoverLink;
