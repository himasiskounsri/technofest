import { Heading, HeadingProps, Text, TextProps } from "@chakra-ui/react";
import React from "react";

interface SectionSubheadingProps extends TextProps {
  children?: React.ReactNode;
}

const SectionSubheading: React.FC<SectionSubheadingProps> = ({
  children,
  ...props
}) => {
  return (
    <Text fontSize="24pt" mb={6} {...props}>
      {children}
    </Text>
  );
};
export default SectionSubheading;
