import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Events() {
  return (
    <Container maxW="6xl" py="10rem">
      <VStack>
        <Flex as="section" direction="column" align="center" py="2rem">
          <Heading
            as="h1"
            fontSize={{ base: "20pt", md: "44pt" }}
            fontWeight={300}
            mb={2}
          >
            Daftar Event
          </Heading>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Kompetisi
          </Heading>
          <Button mb={6}>Guidebook Kompetisi</Button>
          <VStack w="full">
            <Card
              align="center"
              w="full"
              variant="outline"
              p={6}
              justify="center"
            >
              <Flex justify="space-between" w="full">
                <Flex direction="column">
                  <Heading fontSize="14pt">UI/UX Design</Heading>
                  <HStack>
                    <Text>Tim (4 peserta)</Text>
                    <Badge>Dikuti</Badge>
                    <Badge>Belum dibayar</Badge>
                  </HStack>
                </Flex>
                <HStack>
                  <Button>Info</Button>
                  <Button>Konfirmasi Pembayaran</Button>
                </HStack>
              </Flex>
            </Card>
            <Card
              align="center"
              w="full"
              variant="outline"
              p={6}
              justify="center"
            >
              <Flex justify="space-between" w="full">
                <Flex direction="column">
                  <Heading fontSize="14pt">UI/UX Design</Heading>
                  <HStack>
                    <Text>Tim (4 peserta)</Text>
                  </HStack>
                </Flex>
                <HStack>
                  <Button>Info</Button>
                  <Button>Ikuti</Button>
                </HStack>
              </Flex>
            </Card>
            <Card
              align="center"
              w="full"
              variant="outline"
              p={6}
              justify="center"
            >
              <Flex justify="space-between" w="full">
                <Flex direction="column">
                  <Heading fontSize="14pt">UI/UX Design</Heading>
                  <HStack>
                    <Text>Tim (4 peserta)</Text>
                  </HStack>
                </Flex>
                <HStack>
                  <Button>Info</Button>
                  <Button>Ikuti</Button>
                </HStack>
              </Flex>
            </Card>
            <Card
              align="center"
              w="full"
              variant="outline"
              p={6}
              justify="center"
            >
              <Flex justify="space-between" w="full">
                <Flex direction="column">
                  <Heading fontSize="14pt">UI/UX Design</Heading>
                  <HStack>
                    <Text>Tim (4 peserta)</Text>
                  </HStack>
                </Flex>
                <HStack>
                  <Button>Info</Button>
                  <Button>Ikuti</Button>
                </HStack>
              </Flex>
            </Card>
          </VStack>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Seminar
          </Heading>
          <VStack w="full">
            <Card
              align="center"
              w="full"
              variant="outline"
              p={6}
              justify="center"
            >
              <Flex justify="space-between" w="full">
                <Flex direction="column">
                  <Heading fontSize="14pt">UI/UX Design</Heading>
                  <HStack>
                    <Text>Tim (4 peserta)</Text>
                    <Badge>Dikuti</Badge>
                    <Badge>Belum dibayar</Badge>
                  </HStack>
                </Flex>
                <HStack>
                  <Button>Info</Button>
                  <Button>Ikuti</Button>
                </HStack>
              </Flex>
            </Card>
          </VStack>
        </Flex>
      </VStack>
    </Container>
  );
}
