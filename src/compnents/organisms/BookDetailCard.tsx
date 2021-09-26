import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { VFC } from "react";
import { useHistory } from "react-router";
import { SecondaryButton } from "../atoms/SecondaryButton";

type BookType = {
  id: string;
  title: string;
  article: string;
  description: string;
  image: string;
};

type Props = {
  isLoading: boolean;
  book: BookType;
  onClick: () => void;
};

export const BookDetailCard: VFC<Props> = ({ book, isLoading, onClick }) => {
  const history = useHistory();
  const onClickEdit = () => {
    history.push(`/book/detail/${book.id}/edit`);
  };
  return (
    <Box
      w="560px"
      h="630px"
      bg="gray.100"
      borderRadius="10px"
      shadow="md"
      overflow="hidden"
      mx="auto"
      mt={10}
      p={2}
    >
      <Image
        height="300px"
        width="360px"
        objectFit="cover"
        src={book.image}
        mx="auto"
      />
      <Stack spacing={6} mt={5} p={4}>
        <Box>
          <Text as="h2">タイトル</Text>
          <Text fontSize="sm" pl={4} pt={2}>
            {book.title}
          </Text>
        </Box>
        <Box>
          <Text as="h2">著者名</Text>
          <Text fontSize="sm" pl={4} pt={2}>
            {book.article}
          </Text>
        </Box>
        <Box>
          <Text as="h2">説明</Text>
          <Text fontSize="sm" pl={4} pt={2}>
            {book.description}
          </Text>
        </Box>
      </Stack>
      <Box textAlign="center">
        <SecondaryButton
          onClick={onClickEdit}
          isLoading={isLoading}
          color="green"
        >
          編集
        </SecondaryButton>
        <SecondaryButton onClick={onClick} isLoading={isLoading} color="red">
          削除
        </SecondaryButton>
      </Box>
    </Box>
  );
};
