import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxW={1480} px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
              <Input name="name" label="Name" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
              <Input name="password" label="Password" type="Password" />
              <Input
                name="password_confirmation"
                label="Password Confirmation"
                type="email"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing={4}>
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
