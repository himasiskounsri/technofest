import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Card,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Profile() {
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
            Ahmad Lorem
          </Heading>
          <Text mb={10} textAlign="center" maxW="xl">
            ID 4234876612
          </Text>
          <Alert status="warning" mt={10}>
            <AlertIcon />
            Silakan&nbsp;
            <Link href="" fontWeight={600}>
              lengkapi data Anda
            </Link>
            &nbsp;untuk berpartisipasi dalam event Technofest.
          </Alert>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Data Peserta
          </Heading>
          <Stack spacing={4} w="xl">
            <FormControl id="name" isRequired>
              <FormLabel>Nama lengkap</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="nim" isRequired>
              <FormLabel>NIM</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="whatsapp" isRequired>
              <FormLabel>Nomor Whatsapp</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="institution" isRequired>
              <FormLabel>Institusi</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Jenis Kelamin</FormLabel>
              <Select placeholder="Jenis kelamin">
                <option value="option1">Laki-Laki</option>
                <option value="option2">Perempuan</option>
              </Select>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Simpan profil
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex as="section" direction="column" align="center" py="2rem" w="2xl">
          <Heading fontSize="20pt" mb={6}>
            Kata Sandi
          </Heading>
          <Stack spacing={4} w="xl">
            <FormControl id="oldPassword" isRequired>
              <FormLabel>Kata sandi lama</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="newPassword" isRequired>
              <FormLabel>Kata sandi baru</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="confirmNewPassword" isRequired>
              <FormLabel>Konfirmasi kata sandi baru</FormLabel>
              <Input type="password" />
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Perbarui kata sandi
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </VStack>
    </Container>
  );
}
