import { Flex, FlexProps } from "@chakra-ui/react";
import React, { ComponentProps, ComponentPropsWithoutRef } from "react";

interface SectionProps extends FlexProps {
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <Flex as="section" pt={{ base: "4rem", md: "12rem" }} {...props}>
      {children}
    </Flex>
  );
};
export default Section;
