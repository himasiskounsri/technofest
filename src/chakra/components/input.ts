import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const variants = {
  default: definePartsStyle({
    field: {
      border: "1px solid",
      borderColor: "gray.300",
      fontSize: "10pt",
      _placeholder: { color: "gray.500" },
      _hover: {
        bg: "white",
        border: "1px solid",
        borderColor: "purple.500",
      },
      _focus: {
        outline: "none",
        bg: "white",
        border: "2px solid",
        borderColor: "purple.500",
      },
      bg: "gray.50",
    },
  }),
};

export default defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: "default",
  },
});
