import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    p: 6,
    rounded: ".5rem",
  },
});

const variants = {
  outline: definePartsStyle({
    container: {
      // boxShadow:
      //   "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    },
  }),
};

export default defineMultiStyleConfig({ baseStyle, variants });
