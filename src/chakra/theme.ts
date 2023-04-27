import { extendTheme } from "@chakra-ui/react";
import "@fontsource/fira-sans/300.css";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/fira-sans/700.css";
import "@fontsource/fira-code/300.css";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";
import Button from "./components/buttons";
import Link from "./components/link";
import Card from "./components/card";
import Input from "./components/input";
import Accordion from "./components/accordion";

const theme = extendTheme({
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Fira Sans', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.50",
        // TODO: Belum ada perubahan
        sx: {
          "&::-webkit-scrollbar": {
            width: "1em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
          },
          "&::-webkit-scrollbar-thumb": {
            bg: "blue",
            outline: "1px solid slategrey",
          },
        },
      },
    }),
  },
  components: {
    Button,
    Link,
    Card,
    Input,
    Accordion,
  },
});

export default theme;
