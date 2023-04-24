import { AddIcon } from "@chakra-ui/icons";
import {
  Container,
  Link,
  Text,
  VStack,
  Flex,
  Heading,
  Card,
  HStack,
  Badge,
  Alert,
  Button,
} from "@chakra-ui/react";

export default function ConfirmPayment() {
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
            Konfirmasi Pembayaran
          </Heading>
          <Card align="center" w="2xl" variant="outline" p={6} justify="center">
            <Flex direction="column">
              <Heading fontSize="14pt">UI/UX Design</Heading>
              <Text>Tim (4 peserta)</Text>
            </Flex>
          </Card>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Card
            align="center"
            w="full"
            h="10rem"
            variant="outline"
            p={6}
            justify="center"
            mb={10}
          >
            Upload bukti pembayaran
          </Card>
          <Button>Selesaikan pembayaran</Button>
        </Flex>
      </VStack>
    </Container>
  );
}
