import { NavItem } from "@/types/NavItem";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Link,
  Stack,
  Flex,
  useColorModeValue,
  Icon,
  Collapse,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface MobileNavItemProps {
  navItem: NavItem;
  showNavbar: boolean;
}

const MobileNavItem: FC<MobileNavItemProps> = ({ navItem, showNavbar }) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const toggle = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navItem.children && onToggle();
  };

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={navItem.href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        onClick={toggle}
      >
        <Text
          fontWeight={600}
          color={router.pathname === "/" && !showNavbar ? "white" : "gray.600"}
        >
          {navItem.label}
        </Text>
        {navItem.children && (
          <Icon
            color={
              router.pathname === "/" && !showNavbar ? "white" : "gray.600"
            }
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor="purple.500"
          align={"start"}
        >
          {navItem.children &&
            navItem.children.map((child) => (
              <Link
                key={child.label}
                w="full"
                py={2}
                href={child.href}
                color={
                  router.pathname === "/" && !showNavbar
                    ? "gray.100"
                    : "gray.700"
                }
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
