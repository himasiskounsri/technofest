import { ComponentStyleConfig } from "@chakra-ui/react";
import NextLink from "next/link";

const Link: ComponentStyleConfig = {
  defaultProps: {
    as: NextLink,
  },
};

export default Link;
