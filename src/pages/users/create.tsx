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
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { createUserFormSchema } from "../../schemas/createUserFormSchema";

type CreateUserFormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
};

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxW={1480} px={6}>
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={[6, 8]}
        >
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input
                name="name"
                label="Name"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input
                name="password"
                label="Password"
                type="Password"
                {...register("password")}
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                label="Password Confirmation"
                type="email"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
