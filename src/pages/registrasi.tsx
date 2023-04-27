/*
 * =================================================================================================
 * Page            : LogIn
 * Path            : /login
 * Description     : Halaman log in untuk peserta agar mendapatkan hak mengikuti
 *                   kompetisi dan seminar.
 * Components used : -
 * =================================================================================================
 */

import {
  Button,
  Card,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LogIn() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} maxW={"md"} w="full" py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            as="h1"
            fontSize={{ base: "20pt", md: "32pt" }}
            fontWeight={700}
            color="gray.700"
            mb={2}
          >
            Registrasi
          </Heading>
        </Stack>
        <Card
          variant="outline"
          rounded={"lg"}
          maxW="xl"
          w="full"
          px={8}
          py={12}
        >
          <Button variant="oauth" w="full" mb={2}>
            <Image src="/images/googlelogo.png" height="20px" mr={4} alt="" />
            Lanjutkan dengan Google
          </Button>
          <Text textAlign="center" my={4} color="gray.400">
            ATAU
          </Text>
          <Stack spacing={4}>
            <FormControl id="name">
              {/* <FormLabel>Nama lengkap</FormLabel> */}
              <Input type="text" placeholder="Nama lengkap" />
            </FormControl>
            <FormControl id="email">
              {/* <FormLabel>Email</FormLabel> */}
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl id="password">
              {/* <FormLabel>Kata sandi</FormLabel> */}
              <Input type="password" placeholder="Kata sandi" />
            </FormControl>
            <FormControl id="confirmPassword">
              {/* <FormLabel>Konfirmasi kata sandi</FormLabel> */}
              <Input type="password" placeholder="Konfirmasi kata sandi" />
            </FormControl>
            <Stack spacing={10} pt={6}>
              <Button loadingText="Submitting" variant="animated">
                Registrasi
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Sudah mendaftar?{" "}
                <Link href="/login" color={"purple.400"}>
                  Log In
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Flex>
  );
}
