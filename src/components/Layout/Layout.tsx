import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  );
};
export default Layout;
