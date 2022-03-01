import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Dudow</Text>
        <Text color="gray.300" fontSize="small">
          edu30.nm@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Dudow" src="https://github.com/dudow.png" />
    </Flex>
  );
}
