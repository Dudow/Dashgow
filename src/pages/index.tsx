import { Flex, Button } from "@chakra-ui/react";
import { Input } from "../components/form/input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        gridGap={4}
      >
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" label="Password" />

        <Button type="submit" mt="2" colorScheme="pink">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
