import { extendTheme } from "@chakra-ui/react";
import "@fontsource/fira-sans/300.css";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/fira-sans/700.css";

const theme = extendTheme({
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Fira Sans', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        // bg: "gray.100",
      },
    }),
  },
});

export default theme;
