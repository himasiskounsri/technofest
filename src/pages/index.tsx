/*
 * =================================================================================================
 * Page            : Home
 * Path            : /
 * Description     : Landing page
 * Components used : -
 * =================================================================================================
 */

import CompetitionCard from "@/components/Cards/Competition/CompetitionCard";
import ImageCard from "@/components/Cards/Image/ImageCard";
import SeminarCard from "@/components/Cards/Seminar/SeminarCard";
import Blob from "@/components/Icons/Blob";
import Circuit from "@/components/Icons/Circuit";
import Floor from "@/components/Icons/Floor";
import Globe from "@/components/Icons/Globe";
import GridLarge from "@/components/Icons/GridLarge";
import GridSmall from "@/components/Icons/GridSmall";
import Milestones from "@/components/Milestones/Milestones";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/Section/SectionHeading";
import SectionParagraph from "@/components/Section/SectionParagraph";
import SectionSubheading from "@/components/Section/SectionSubheading";
import { Messenger } from "@/lib/randomTransition";
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
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HOME, SEMINARS } from "../../dummy";

export default function Home() {
  const [messenger, setMessenger] = useState("Technofest.");

  useEffect(() => {
    new Messenger(setMessenger);
  }, []);

  return (
    <Box overflowX="hidden">
      {
        // *======================================================================
        // *HERO
      }
      <Section
        position="relative"
        minH="100vH"
        bg="black"
        direction="column"
        alignItems="center"
        justifyContent="center"
        pt={{ base: "6rem", md: "10rem" }}
        pb="12rem"
        zIndex={0}
      >
        <Blob
          position="absolute"
          top={{ base: "-15rem", md: "-8rem" }}
          right={{ base: "-24rem", md: "auto" }}
          w={{ base: "54rem", md: "90rem" }}
          zIndex={1}
        />
        <Floor
          position="absolute"
          w={{ base: "60rem", md: "auto" }}
          bottom="-10vh"
          zIndex={1}
        />
        <Circuit
          fill="white"
          transform="rotate(-90deg)"
          position="absolute"
          zIndex={1}
          opacity="0.3"
          // h={{ base: 500, md: 1000 }}
          h="100vh"
          w={{ base: 500, md: 1000 }}
          bottom={{ base: 0, md: -20 }}
          mixBlendMode="overlay"
        />
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <Text
            fontSize={{ base: "12pt", md: "20pt" }}
            color="whiteAlpha.800"
            fontWeight={300}
            fontFamily="'Fira Code', monospace"
            mb={8}
          >
            {messenger}
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "36pt", md: "60pt" }}
            fontWeight={300}
            mb={10}
            color="white"
            textAlign="center"
          >
            <Text as="span">Technology</Text>
            <br />
            <Text as="span" fontWeight={600}>
              Festival 2023.
            </Text>
          </Heading>
          <HStack>
            <Link href="/#about">
              <Button
                variant="animatedWhite"
                leftIcon={<BsFillLightningChargeFill />}
              >
                Explore
              </Button>
            </Link>
            <Link>
              <Button variant="animatedWhiteOutline">Lihat Guidebook</Button>
            </Link>
          </HStack>
        </Flex>
      </Section>
      {
        // *END OF HERO
        // *======================================================================
        // *ABOUT
      }
      <Container id="main" px={6} maxW="6xl" py={{ base: "0", md: "10rem" }}>
        <Section id="about" direction={{ base: "column", lg: "row" }}>
          <Box w="full" h="14rem" flexBasis="40%">
            <Globe boxSize={{ base: "14rem", md: "20rem" }} />
          </Box>
          <Flex
            mt={{ base: "2rem", md: "auto" }}
            direction="column"
            ml={{ md: 20 }}
            flexBasis="60%"
            position="relative"
          >
            <GridSmall position="absolute" right={-10} top={-10} />
            <SectionHeading>{HOME.about.title}</SectionHeading>
            <SectionSubheading>{HOME.about.subtitle}</SectionSubheading>
            <SectionParagraph>{HOME.about.content}</SectionParagraph>
          </Flex>
        </Section>
        {
          // *END OF ABOUT
          // *======================================================================
          // *COMPETIIONS
        }
        <Section direction="column" align="center">
          <Circuit
            position="absolute"
            left={-60}
            fill="gray.200"
            display={{ base: "none", md: "block" }}
          />
          <SectionHeading>{HOME.competitions.title}</SectionHeading>
          <SectionSubheading>{HOME.competitions.subtitle}</SectionSubheading>
          <SimpleGrid columns={{ base: 1, md: 4 }} columnGap={4} rowGap={4}>
            {HOME.competitions.listOfCompetition.map((competition, key) => (
              <CompetitionCard key={key} competition={competition} />
            ))}
          </SimpleGrid>
        </Section>
        {
          // *END OF COMPETITIONS
          // *======================================================================
          // *SEMINAR
        }
        <Section direction="column" align="center" position="relative">
          <GridLarge
            position="absolute"
            left={{ base: -10, md: 0 }}
            top={{ base: 10, md: "auto" }}
          />
          <GridSmall
            position="absolute"
            bottom={{ base: 40, md: 0 }}
            right={0}
          />
          <SectionHeading>Seminar</SectionHeading>
          <SectionSubheading>{SEMINARS[0].name}</SectionSubheading>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            columnGap={4}
            rowGap={4}
            maxW="2xl"
          >
            {SEMINARS[0].persons.map((person, key) => (
              <SeminarCard key={key} person={person} />
            ))}
          </SimpleGrid>

          <Link href={`/seminar/${SEMINARS[0].pathName}`} maxW="10rem" w="full">
            <Button variant="animatedOutline" maxW="10rem" w="full">
              Info
            </Button>
          </Link>
        </Section>
        {
          // *END OF SEMINAR
          // *======================================================================
          // *MILESTONES
        }
        <Section id="milestones" direction="column" align="center">
          <SectionHeading>Agenda</SectionHeading>
          <SectionSubheading>Agenda Kito Kuliah</SectionSubheading>
          {
            // TODO: Perlu banyak perubahan dari sini, masih ada data dummy
          }
          <Milestones />
        </Section>
        {
          // *END OF MILESTONES
          // *======================================================================
          // *FAQ
        }
        <Section w="100%" direction="column" position="relative">
          <GridSmall position="absolute" top={4} left={-4} />
          <SectionHeading>FaQ</SectionHeading>
          <SectionSubheading>Frequently asked Question</SectionSubheading>
          <Flex direction={{ base: "column", md: "row" }}>
            <SectionParagraph
              flexBasis="40%"
              mr={{ base: 0, md: 12 }}
              mb={{ base: 6, md: "auto" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              autem mollitia accusantium hic eaque nemo velit quia natus
              voluptates rem numquam reiciendis itaque aliquam laborum at in
              odio, maiores similique. Sapiente quisquam odio maxime id quos
              dignissimos blanditiis vel corporis.
            </SectionParagraph>

            <Accordion allowToggle maxW="xl" flexGrow={1}>
              {HOME.faqs.map((faq, key) => (
                <AccordionItem key={key}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </Section>
        {
          // *END OF FAQ
          // *======================================================================
          // *SPONSORS
        }
        <Section direction="column" align="center">
          <Circuit
            display={{ base: "none", md: "block" }}
            position="absolute"
            right={-60}
            fill="gray.200"
            transform="rotate(180deg)"
          />
          <SectionHeading>Sponsor</SectionHeading>
          <SectionSubheading>Lorem, ipsum dolor.</SectionSubheading>
          <Flex wrap="wrap" justifyContent="center" gap={1}>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </Flex>
        </Section>
        {
          // *END OF SPONSORS
          // *======================================================================
          // *MEDIA PARTNERS
        }
        <Section direction="column" align="center" pb={{ base: 20, md: 0 }}>
          <SectionHeading>Media Partner</SectionHeading>
          <SectionSubheading>Lorem, ipsum dolor.</SectionSubheading>
          <Flex wrap="wrap" justifyContent="center" gap={1}>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </Flex>
        </Section>
        {
          // *END OF MEDIA PARTNERS
          // *======================================================================
        }
      </Container>
    </Box>
  );
}
