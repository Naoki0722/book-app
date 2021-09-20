import { VFC } from "react";
import { Box, Text } from "@chakra-ui/layout";

export const Footer: VFC = () => {
  return (
    <Box
      textAlign="center"
      backgroundColor="cyan.300"
      p={5}
      position="fixed"
      w="100%"
      bottom={0}
    >
      <Text fontSize="sm">
        Copyright © 2021 book-review.com All Rights Reserved.
      </Text>
    </Box>
  );
};
