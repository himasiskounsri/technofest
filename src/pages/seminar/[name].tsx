import ContactPersonCard from "@/components/ContactPerson/ContactPersonCard";
import Milestones from "@/components/Milestones/Milestones";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Seminar() {
  return (
    <Container maxW="6xl" py="10rem">
      <VStack spacing="12rem">
        <Flex as="section" direction="column" align="center">
          <Image src="/images/crystal.png" alt="" w="8rem" mb={6} />
          <Text fontSize="14pt" textTransform="uppercase" letterSpacing="0.6em">
            Kompetisi
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "20pt", md: "44pt" }}
            fontWeight={300}
            mb={2}
          >
            UI/UX Design
          </Heading>
          <Text mb={10} textAlign="center" maxW="xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            expedita cum eligendi atque dolorum hic error ipsam earum velit
            vero. A quidem et sit odit dolores possimus nesciunt nihil ipsam.
          </Text>
          <Button>Ikuti Kompetisi</Button>
        </Flex>
        <Flex as="section" direction="column" align="center">
          <Heading
            fontSize="12pt"
            textTransform="uppercase"
            letterSpacing="0.6em"
          >
            Agenda
          </Heading>
          <Text fontSize="20pt" mb={6}>
            Lorem, ipsum dolor.
          </Text>
          {
            // TODO: Perlu banyak perubahan dari sini, masih ada data dummy
          }
          <Milestones />
        </Flex>
        <Flex as="section" direction="column" align="center">
          <Heading
            fontSize="12pt"
            textTransform="uppercase"
            letterSpacing="0.6em"
          >
            Contact Person
          </Heading>
          <Text fontSize="20pt" mb={6}>
            Lorem, ipsum dolor.
          </Text>
          <VStack maxW="xl">
            <ContactPersonCard />
            <ContactPersonCard />
          </VStack>
        </Flex>
        <Flex as="section" direction="column" align="center" w="100%">
          <Heading
            fontSize="12pt"
            textTransform="uppercase"
            letterSpacing="0.6em"
          >
            FaQ
          </Heading>
          <Text fontSize="20pt" mb={6}>
            Lorem, ipsum dolor.
          </Text>
          <Accordion allowToggle maxW="xl" w="full">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ab repellendus doloribus
                dicta quos laboriosam voluptatem magnam facere consectetur
                inventore? Magni.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </VStack>
    </Container>
  );
}
