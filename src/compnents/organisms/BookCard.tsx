import { Image } from "@chakra-ui/image";
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, useEffect, VFC } from "react";
import { useHistory } from "react-router";
import { useBookInfo } from "../../hooks/useBookInfo";

export const BookCard: VFC = memo(() => {
  const { getBooKInfo, books } = useBookInfo();
  const history = useHistory();

  const onClickDetail = (id: string) => {
    history.push(`/book/detail/${id}`);
  };
  useEffect(() => {
    getBooKInfo();
  }, []);
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {books.map((book) => (
        <WrapItem key={book.id} p={4} onClick={() => onClickDetail(book.id)}>
          <Box
            w="260px"
            h="300px"
            bg="gray.100"
            borderRadius="10px"
            shadow="md"
            overflow="hidden"
            _hover={{ cursor: "pointer", opacity: "0.8" }}
          >
            <Box>
              <Image
                src={book.image}
                height="150px"
                width="260px"
                objectFit="cover"
              />
            </Box>
            <Box p={4}>
              <Stack spacing={4}>
                <div>
                  <Text as="h2">本の名前</Text>
                  <Text fontSize="sm" pl={4}>
                    {book.title}
                  </Text>
                </div>
                <div>
                  <Text as="h2">著者名</Text>
                  <Text fontSize="sm" pl={4}>
                    {book.article}
                  </Text>
                </div>
              </Stack>
            </Box>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
});
