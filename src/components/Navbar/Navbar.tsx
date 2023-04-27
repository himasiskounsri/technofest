import React from "react";

import { useShowNavbar } from "@/hooks/useShowNavbar";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const showNavbar = useShowNavbar();

  const router = useRouter();

  return (
    <Box
      as="header"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={
        router.pathname === "/" && !showNavbar ? "transparent" : "gray.200"
      }
      bg={
        router.pathname === "/" && !showNavbar
          ? isOpen
            ? "blackAlpha.800"
            : "transparent"
          : "whiteAlpha.900"
      }
      backdropFilter={isOpen ? "blur(10px)" : "none"}
      zIndex={10}
      position={router.pathname === "/" && !showNavbar ? "absolute" : "fixed"}
      w="full"
    >
      {
        // TODO: Buat alias, pisahkan komponen per file
      }
      <Container maxW="6xl">
        <Flex
          color={useColorModeValue("gray.600", "white")}
          maxH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <Flex
            flex={{ base: 1 }}
            justify="start"
            alignItems="center"
            zIndex={2}
          >
            <Link as={NextLink} href="/">
              <Image
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                src="/images/crystal.png"
                alt=""
                w={6}
              />
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav showNavbar={showNavbar} />
            </Flex>
          </Flex>
          <HStack justify={"flex-end"} zIndex={2}>
            <HStack spacing={6}>
              <Link
                href="/login"
                color={
                  router.pathname === "/" && !showNavbar ? "white" : "black"
                }
              >
                Log In
              </Link>
              <Button
                as={NextLink}
                href="/registrasi"
                variant={
                  router.pathname === "/" && !showNavbar
                    ? "animatedWhite"
                    : "animated"
                }
                display={{ base: "none", md: "inline-flex" }}
              >
                Registrasi
              </Button>
            </HStack>
            <Flex display={{ base: "flex", md: "none" }} justify={"flex-end"}>
              <IconButton
                color={
                  router.pathname === "/" && !showNavbar ? "white" : "gray.700"
                }
                _hover={{
                  bg:
                    router.pathname === "/" && !showNavbar
                      ? "blackAlpha.500"
                      : "gray.300",
                }}
                _focus={{
                  bg:
                    router.pathname === "/" && !showNavbar
                      ? "blackAlpha.500"
                      : "gray.100",
                }}
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
          </HStack>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav showNavbar={showNavbar} />
      </Collapse>
    </Box>
  );
};

export default Navbar;
