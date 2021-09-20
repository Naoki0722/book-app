import { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Flex, Box, Spacer, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export const Header: VFC = () => {
  return (
    <Flex h={16} align="center" backgroundColor="cyan.300">
      <Box pl={5}>
        <Text fontSize="lg">
          <Link to="/">Book-review</Link>
        </Text>
      </Box>
      <Spacer />
      <Box pr={5} textAlign="center">
        <button>
          <FontAwesomeIcon icon={faDoorOpen} size="2x" />
          <p>ログイン</p>
        </button>
      </Box>
    </Flex>
  );
};
