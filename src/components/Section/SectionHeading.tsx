import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

interface SectionHeadingProps extends HeadingProps {
  children?: React.ReactNode;
  variant?: "small" | "large";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  variant = "small",
  ...props
}) => {
  return variant == "small" ? (
    <Heading
      fontSize="12pt"
      textTransform="uppercase"
      letterSpacing="0.6em"
      marginRight="-0.6em"
      fontFamily="'Fira Code', monospace"
      fontWeight={700}
      bgGradient="linear(to-l, purple.500, pink.300)"
      bgClip="text"
      {...props}
    >
      {children}
    </Heading>
  ) : (
    <Heading fontSize="24pt" fontWeight={700} color="gray.700" {...props}>
      {children}
    </Heading>
  );
};
export default SectionHeading;
