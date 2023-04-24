import {
  Container,
  VStack,
  Flex,
  Heading,
  Button,
  Card,
  HStack,
  Badge,
  Text,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function EnrollKompetition() {
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
          <Card align="center" w="2xl" variant="outline" p={6} justify="center">
            <Flex direction="column">
              <Heading fontSize="14pt">UI/UX Design</Heading>
              <Text>Tim (4 peserta)</Text>
            </Flex>
          </Card>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Anggota
          </Heading>
          <VStack w="full">
            <Card
              align="center"
              w="full"
              h="5rem"
              variant="outline"
              p={6}
              justify="center"
            >
              <Flex justify="space-between" w="full">
                <Flex direction="column">
                  <HStack>
                    <Heading fontSize="14pt">Ahmad Yg Itu</Heading>
                    <Badge>Ketua</Badge>
                  </HStack>
                  <HStack>
                    <Text>ID 42739847</Text>
                  </HStack>
                </Flex>
              </Flex>
            </Card>
            <Card
              align="center"
              w="full"
              h="5rem"
              variant="outline"
              p={6}
              justify="center"
            >
              <AddIcon />
            </Card>
          </VStack>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Pembayaran
          </Heading>
          <Card
            align="center"
            w="full"
            h="5rem"
            variant="outline"
            p={6}
            justify="center"
          >
            <Flex justify="space-between" w="full">
              {
                // TODO: Tambahkan kolom jumlah yang harus dibayar
              }
              <Flex direction="column">
                <HStack>
                  <Heading fontSize="14pt">Status pembayaran</Heading>
                </HStack>
                <HStack>
                  <Badge>Belum dibayar</Badge>
                </HStack>
              </Flex>
            </Flex>
          </Card>
          <Alert status="warning" mt={10} mb={10}>
            {/* <AlertIcon /> */}
            <Flex direction="column">
              <Text>
                Silakan melakukan pembayaran melalui salah satu metode
                pembayaran di bawah ini.
              </Text>
              <Link>Dana 082178686298 a.n. bla</Link>
              <Link>Dana 082178686298 a.n. bla</Link>
              <Link>Dana 082178686298 a.n. bla</Link>
              <Text>
                Apabila terdapat kendala pada saat pembayaran atau hal lainnya,
                silakan menghubungi contac person di bawah ini.
              </Text>
              <Text>082178686298 a.n. bla</Text>
              <Text>082178686298 a.n. bla</Text>
              <Text>
                Unggah bukti screenshoot pembayaran di laman konfirmasi
                pembayaran dengan klik tombol di bawah ini.
              </Text>
            </Flex>
          </Alert>
          <Button>Konfirmasi Pembayaran</Button>
        </Flex>
      </VStack>
    </Container>
  );
}
