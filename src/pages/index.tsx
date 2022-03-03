import { Flex, Button } from "@chakra-ui/react";
import { Input } from "../components/form/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormSchema } from "../schemas/signInFormSchema";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Input
          name="email"
          type="email"
          label="E-mail"
          error={errors.email}
          {...register("email")}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          error={errors.password}
          {...register("password")}
        />

        <Button
          type="submit"
          mt="2"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
