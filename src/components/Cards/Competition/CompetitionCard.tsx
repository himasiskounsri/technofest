import GridLarge from "@/components/Icons/GridLarge";
import { Competition } from "@/types/types";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface CompetitionCardProps {
  competition: Competition;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <Box bgGradient="linear(to-b, gray.100, white)" rounded=".7rem" p={1}>
      <Card overflow={"hidden"} bg="white" h="full" position="relative">
        <GridLarge position="absolute" insetX="0" mx="auto" />
        <Image
          src={competition.imageSrc}
          alt=""
          w={"60%"}
          mx="auto"
          mb={6}
          zIndex={1}
        />
        <Flex direction="column" flexGrow={1} zIndex={1}>
          <Heading
            as="h3"
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            mb={2}
          >
            {competition.name}
          </Heading>
          <Text fontWeight={300} fontSize="12pt" color="gray.600" mb={6}>
            {competition.description}
          </Text>
        </Flex>
        <Link href={`/kompetisi/${competition.pathName}`}>
          <Button variant="animatedOutline" w="full">
            Info
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default CompetitionCard;
