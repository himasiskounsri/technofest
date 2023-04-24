import {
  Alert,
  AlertIcon,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container maxW="6xl" py="10rem">
      <VStack>
        <Flex as="section" direction="column" align="center" py="2rem">
          <Text fontSize="14pt" textTransform="uppercase" letterSpacing="0.6em">
            Selamat Datang
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "20pt", md: "44pt" }}
            fontWeight={300}
            mb={2}
          >
            Ahmad Lorem
          </Heading>
          <Text mb={10} textAlign="center" maxW="xl">
            ID 4234876612
          </Text>
          <Link href="/profil">Edit Profil</Link>
          <Alert status="warning" mt={10}>
            <AlertIcon />
            Silakan&nbsp;
            <Link href="/profil" fontWeight={600}>
              lengkapi data Anda
            </Link>
            &nbsp;untuk berpartisipasi dalam event Technofest.
          </Alert>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Perlombaan
          </Heading>
          <Card
            align="center"
            w="full"
            variant="outline"
            minH="10rem"
            justify="center"
          >
            <VStack>
              <Text color="gray.400" fontWeight={300}>
                Belum mengikuti kompetisi apapun
              </Text>
              <Button>Lihat Event</Button>
            </VStack>
          </Card>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Seminar
          </Heading>
          <Card
            align="center"
            w="full"
            variant="outline"
            minH="10rem"
            justify="center"
          >
            <VStack>
              <Text color="gray.400" fontWeight={300}>
                Belum mengikuti seminar apapun
              </Text>
              <Button>Lihat Event</Button>
            </VStack>
          </Card>
        </Flex>
      </VStack>
    </Container>
  );
}
