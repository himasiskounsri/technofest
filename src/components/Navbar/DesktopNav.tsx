import { NavItem } from "@/types/types";
import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "../../../dummy";
import DesktopSubNav from "./DesktopSubNav";

interface DesktopNavProps {
  showNavbar: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ showNavbar }) => {
  const router = useRouter();
  const linkColor =
    router.pathname === "/" && !showNavbar ? "white" : "gray.600";
  const linkHoverColor =
    router.pathname === "/" && !showNavbar ? "gray.100" : "gray.800";
  const popoverContentBgColor =
    router.pathname === "/" && !showNavbar ? "black" : "white";

  return (
    <Stack direction={"row"} spacing={4} zIndex={2}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child: NavItem) => (
                    <DesktopSubNav
                      key={child.label}
                      showNavbar={showNavbar}
                      navItem={child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
