/*
 * =================================================================================================
 * Page            : LogIn
 * Path            : /login
 * Description     : Halaman log in untuk peserta agar mendapatkan hak mengikuti
 *                   kompetisi dan seminar.
 * Components used : -
 * =================================================================================================
 */

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

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
            Log In
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
            <FormControl id="email">
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata sandi"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"unstyled"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={6}>
              <Button loadingText="Submitting" variant="animated">
                Log In
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Belum mendaftar?{" "}
                <Link href="/registrasi" color={"purple.400"}>
                  Daftar
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Flex>
  );
}
