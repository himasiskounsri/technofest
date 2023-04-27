import { NavItem } from "@/types/types";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface DesktopSubNavProps {
  navItem: NavItem;
  showNavbar: boolean;
}

const DesktopSubNav: React.FC<DesktopSubNavProps> = ({
  navItem,
  showNavbar,
}) => {
  const router = useRouter();
  return (
    <Link
      href={navItem.href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: router.pathname === "/" && !showNavbar ? "gray.900" : "purple.50",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={
              router.pathname === "/" && !showNavbar ? "gray.300" : "gray.700"
            }
            transition={"all .3s ease"}
            _groupHover={{ color: "purple.400" }}
            fontWeight={500}
          >
            {navItem.label}
          </Text>
          <Text fontSize={"sm"}>{navItem.subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"purple.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
