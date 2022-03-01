import {
  Button,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarFloating } from "../../contexts/SidebarFloatingContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isLarge = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarFloating();

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
      {!isLarge && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      )}

      <Logo />

      {isLarge && <SearchBox />}

      <Flex align={"center"} ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isLarge} />
      </Flex>
    </Flex>
  );
}
