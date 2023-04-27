import SeminarCard from "@/components/Cards/Seminar/SeminarCard";
import ContactPersonCard from "@/components/Cards/ContactPerson/ContactPersonCard";
import Milestones from "@/components/Milestones/Milestones";
import Section from "@/components/Section/Section";
import { Seminar } from "@/types/types";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SEMINARS } from "../../../../dummy";
import SectionHeading from "@/components/Section/SectionHeading";
import SectionParagraph from "@/components/Section/SectionParagraph";

interface Props {
  seminar: Seminar;
}

export default function SeminarDetail({ seminar }: Props) {
  return (
    <Container
      id="main"
      px={6}
      maxW="6xl"
      pb={{ base: "0", md: "10rem" }}
      overflowX="hidden"
    >
      <Section direction="column" align="center">
        {/* <Image src="/images/crystal.png" alt="" w="8rem" mb={6} /> */}
        <Text
          fontSize="14pt"
          textTransform="uppercase"
          letterSpacing="0.6em"
          mr="-0.6em"
          fontFamily="'Fira Code', monospace"
        >
          Seminar
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "20pt", md: "40pt" }}
          // fontWeight={300}
          mb={2}
        >
          {seminar.name}
        </Heading>
        <SectionParagraph textAlign="center" mb={10} maxW="2xl">
          {seminar.description}
        </SectionParagraph>
        <Link href={`/seminar/${seminar.pathName}/daftar`}>
          <Button variant="animated" maxW="10rem" w="full">
            Ikuti Seminar
          </Button>
        </Link>
      </Section>
      <Section direction="column" align="center">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          columnGap={4}
          rowGap={4}
          maxW="2xl"
        >
          {seminar.persons.map((person, key) => (
            <SeminarCard key={key} person={person} />
          ))}
        </SimpleGrid>
      </Section>
      <Section direction="column" align="center">
        <SectionHeading variant="large">Agenda</SectionHeading>
        {
          // TODO: Perlu banyak perubahan dari sini, masih ada data dummy
        }
        <Milestones />
      </Section>

      {seminar.contactPersons && (
        <Section direction="column" align="center">
          <SectionHeading variant="large">Contact Person</SectionHeading>
          <VStack maxW="xl" mt={6}>
            {seminar.contactPersons.map((contactPerson, key) => (
              <ContactPersonCard key={key} contactPerson={contactPerson} />
            ))}
          </VStack>
        </Section>
      )}
      <Section direction="column" align="center" w="100%">
        <SectionHeading variant="large">
          Frequently Asked Question
        </SectionHeading>
        <Accordion allowToggle maxW="xl" w="full" mt={6}>
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
      </Section>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const name = ctx.params?.name as string;

  const seminar =
    SEMINARS.filter((seminar: Seminar) => {
      return seminar.pathName === name;
    })[0] ?? null;

  if (!seminar) {
    return {
      notFound: true, //redirects to 404 page
    };
  }

  return {
    props: {
      seminar,
    },
  };
};
