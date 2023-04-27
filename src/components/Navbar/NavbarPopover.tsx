import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

type NavbarPopoverProps = {
  label: string;
  children: React.ReactNode;
};

const NavbarPopover: React.FC<NavbarPopoverProps> = ({ label, children }) => {
  return (
    <Popover trigger="hover" placement="top-start">
      <PopoverTrigger>
        <Button
          p={2}
          fontSize={"sm"}
          fontWeight={500}
          color="gray.600"
          _hover={{
            textDecoration: "none",
            color: "gray.800",
          }}
        >
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        border={0}
        boxShadow={"xl"}
        bg="white"
        p={4}
        rounded={"xl"}
        minW={"sm"}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};
export default NavbarPopover;
