import { Box, Flex, HStack, Icon, Input, Text, Avatar } from "@chakra-ui/react";
import { RiSearchLine, RiNotificationLine, RiUserLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxW={1480}
      h="20"
      mx="auto"
      mt={4}
      px={6}
      align="center"
    >
      <Text fontSize="3xl" letterSpacing="tight" fontWeight="bold" w="64">
        Dashgow
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex={1}
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Search"
          px="4"
          mr="4"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align={"center"} ml="auto">
        <HStack
          spacing={8}
          mx={8}
          pr={8}
          py={1}
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Dudow</Text>
            <Text color="gray.300" fontSize="small">
              edu30.nm@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Dudow" src="https://github.com/dudow.png" />
        </Flex>
      </Flex>
    </Flex>
  );
}
