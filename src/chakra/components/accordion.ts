import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    bg: "gray.50",
    outline: "1px solid",
    outlineColor: "gray.300",
    border: "none",
    rounded: ".25rem",
    borderColor: "gray.300",
    mb: "2",
    _hover: {
      outlineColor: "purple.500",
    },
  },
  button: {
    fontSize: "14pt",
    fontWeight: 600,
    color: "gray.700",
    _hover: {
      bg: "gray.100",
    },
    _focus: {
      color: "purple.500",
    },
  },
  panel: {
    fontWeight: 300,
    fontSize: "12pt",
    color: "gray.600",
  },
});

export default defineMultiStyleConfig({ baseStyle });
