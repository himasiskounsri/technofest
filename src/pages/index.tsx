import CompetitionCard from "@/components/Cards/Competition/CompetitionCard";
import ImageCard from "@/components/Cards/Image/ImageCard";
import SeminarCard from "@/components/Cards/Seminar/SeminarCard";
import Milestones from "@/components/Milestones/Milestones";
import {
  Heading,
  Image,
  Container,
  Flex,
  Text,
  Button,
  Box,
  VStack,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  HStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="6xl" py="10rem">
      {/* <VStack spacing="12rem"> */}
      <Flex as="section" direction="column" alignItems="center" py="6rem">
        <Image src="/images/crystal.png" alt="" w="8rem" />
        <Heading
          as="h1"
          fontSize={{ base: "20pt", md: "60pt" }}
          fontWeight={300}
          mb={10}
        >
          Technology Festival
        </Heading>
        {/* <Text mb={4}>
          Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
        </Text> */}
        <HStack>
          <Button>Explore</Button>
          <Button variant="outline">Lihat guidebook</Button>
        </HStack>
      </Flex>
      <Flex id="about" as="section" py="6rem">
        <Box>
          <Box w="30rem" h="16rem" bg="gray.200">
            <Image
              src={
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              alt=""
              w="30rem"
              h="16rem"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Flex direction="column" ml={20}>
          <Heading
            fontSize="12pt"
            textTransform="uppercase"
            letterSpacing="0.6em"
          >
            Tentang
          </Heading>
          <Text fontSize="20pt" mb={6}>
            Selamat Datang di Technofest 2023
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            autem mollitia accusantium hic eaque nemo velit quia natus
            voluptates rem numquam reiciendis itaque aliquam laborum at in odio,
            maiores similique. Sapiente quisquam odio maxime id quos dignissimos
            blanditiis vel corporis.
          </Text>
        </Flex>
      </Flex>
      <Flex as="section" direction="column" align="center" py="6rem">
        <Heading
          fontSize="12pt"
          textTransform="uppercase"
          letterSpacing="0.6em"
        >
          Kompetisi
        </Heading>
        <Text fontSize="20pt" mb={6}>
          Lorem, ipsum dolor.
        </Text>
        <SimpleGrid columns={4} columnGap={4}>
          <CompetitionCard />
          <CompetitionCard />
          <CompetitionCard />
          <CompetitionCard />
        </SimpleGrid>
      </Flex>
      <Flex as="section" direction="column" align="center" py="6rem">
        <Heading
          fontSize="12pt"
          textTransform="uppercase"
          letterSpacing="0.6em"
        >
          Seminar
        </Heading>
        <Text fontSize="20pt" mb={6}>
          Lorem, ipsum dolor.
        </Text>
        <SimpleGrid columns={3} columnGap={4} maxW="2xl">
          <SeminarCard />
          <SeminarCard />
          <SeminarCard />
        </SimpleGrid>
        <Button>Explore</Button>
      </Flex>
      {/* Milestone */}
      <Flex
        id="milestones"
        as="section"
        direction="column"
        align="center"
        py="6rem"
      >
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
      <Flex as="section" w="100%" py="6rem">
        <Flex direction="column" maxW="md" mr={20}>
          <Heading
            fontSize="12pt"
            textTransform="uppercase"
            letterSpacing="0.6em"
          >
            FaQ
          </Heading>
          <Text fontSize="20pt" mb={6}>
            Frequently asked Question
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            autem mollitia accusantium hic eaque nemo velit quia natus
            voluptates rem numquam reiciendis itaque aliquam laborum at in odio,
            maiores similique. Sapiente quisquam odio maxime id quos dignissimos
            blanditiis vel corporis.
          </Text>
        </Flex>

        <Accordion allowToggle maxW="xl" flexGrow={1}>
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
              amet consectetur adipisicing elit. Ab repellendus doloribus dicta
              quos laboriosam voluptatem magnam facere consectetur inventore?
              Magni.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex as="section" direction="column" align="center" py="6rem">
        <Heading
          fontSize="12pt"
          textTransform="uppercase"
          letterSpacing="0.6em"
        >
          Sponsor
        </Heading>
        <Text fontSize="20pt" mb={6}>
          Lorem, ipsum dolor.
        </Text>
        <HStack>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </HStack>
      </Flex>
      <Flex as="section" direction="column" align="center" py="6rem">
        <Heading
          fontSize="12pt"
          textTransform="uppercase"
          letterSpacing="0.6em"
        >
          Media Partner
        </Heading>
        <Text fontSize="20pt" mb={6}>
          Lorem, ipsum dolor.
        </Text>
        <HStack>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </HStack>
      </Flex>
      {/* </VStack> */}
    </Container>
  );
}
