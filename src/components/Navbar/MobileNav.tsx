import { NavItem } from "@/types/types";
import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { NAV_ITEMS } from "../../../dummy";
import MobileNavItem from "./MobileNavItem";

interface MobileNavProps {
  showNavbar: boolean;
}

const MobileNav: FC<MobileNavProps> = ({ showNavbar }) => {
  return (
    <Stack px={10} py={4} w="full" display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <MobileNavItem
          key={navItem.label}
          showNavbar={showNavbar}
          navItem={navItem}
        />
      ))}
    </Stack>
  );
};

export default MobileNav;
