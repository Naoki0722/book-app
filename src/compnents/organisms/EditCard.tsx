import { useEffect, VFC } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";

import { MainButton } from "../atoms/MainButton";
import { useBookDetail } from "../../hooks/useBookDetail";
import { useBookEdit } from "../../hooks/useBookEdit";

export const EditCard: VFC<{ id: string }> = ({ id }) => {
  console.log("レンダリング1");
  const { book, setBook, getData } = useBookDetail(id);
  const { editBookInfo, isLoading } = useBookEdit(book);

  const onClickEdit = () => {
    editBookInfo();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      minW="600px"
      w="50%"
      borderRadius="10px"
      shadow="md"
      border="1px"
      borderColor="gray.100"
      p={4}
      mx="auto"
    >
      <Text as="h2" fontSize="x-large" mb={8} textAlign="center">
        本の編集
      </Text>
      <Stack spacing={8}>
        <FormControl px={10}>
          <FormLabel>本のタイトル</FormLabel>
          <Input
            type="text"
            value={book.title || ""}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </FormControl>
        <FormControl px={10}>
          <FormLabel>著者名</FormLabel>
          <Input
            type="text"
            value={book.article || ""}
            onChange={(e) => setBook({ ...book, article: e.target.value })}
          />
        </FormControl>
        <FormControl px={10}>
          <FormLabel>説明</FormLabel>
          <Textarea
            value={book.description || ""}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
          />
        </FormControl>
        <Box>
          <MainButton onClick={onClickEdit} isLoading={isLoading}>
            編集
          </MainButton>
        </Box>
      </Stack>
    </Box>
  );
};
