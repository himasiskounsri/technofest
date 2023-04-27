import { Heading, HeadingProps, Text, TextProps } from "@chakra-ui/react";
import React from "react";

interface SectionParagraphProps extends TextProps {
  children?: React.ReactNode;
}

const SectionParagraph: React.FC<SectionParagraphProps> = ({
  children,
  ...props
}) => {
  return (
    <Text fontWeight={300} fontSize="14pt" color="gray.600" {...props}>
      {children}
    </Text>
  );
};
export default SectionParagraph;
