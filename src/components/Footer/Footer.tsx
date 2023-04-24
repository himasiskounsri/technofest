import { ReactNode } from "react";

import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex align="center">
              <Image src="/images/crystal.png" w={6} alt="" mr={1} />
              <Box>
                <Text fontSize="14pt" fontWeight={500}>
                  Technology Festival
                </Text>
                <Text
                  fontSize="8pt"
                  mt="-1"
                  w="14rem"
                  lineHeight={1.1}
                  fontWeight={300}
                >
                  Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
                </Text>
              </Box>
            </Flex>

            <Text fontSize={"sm"}>
              © {new Date().getFullYear()} Built by love by Infokom Himasisko
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Technofest</ListHeader>
            <Link href={"#"} isExternal>
              Instagram <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
            <Link href="/#about">Tentang</Link>
            <Link href="/kebijakan-dan-privasi">Kebijakan dan privasi</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Laman</ListHeader>
            <Link href={"#"} isExternal>
              Himasisko <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
            <Link href={"#"} isExternal>
              Infokom <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
            <Link href={"#"} isExternal>
              Linktree <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Sosial Media</ListHeader>
            <Link href={"#"} isExternal>
              Instagram <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
            <Link href={"#"} isExternal>
              Youtube <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
            <Link href={"#"} isExternal>
              Facebook <ExternalLinkIcon mx="0.5px" color="gray.400" />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
