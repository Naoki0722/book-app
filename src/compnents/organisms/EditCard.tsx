import { useEffect, useState, VFC } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../config/firebase";

import { MainButton } from "../atoms/MainButton";
import { useHistory } from "react-router";

type BookType = {
  id: string;
  title: string;
  article: string;
  description: string;
  image: string;
};

export const EditCard: VFC<{ id: string }> = ({ id }) => {
  const [book, setBook] = useState({} as BookType);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onClickEdit = async () => {
    try {
      setIsLoading(true);
      const updateData = doc(firebaseStore, "books", book.id);
      await setDoc(updateData, {
        title: book.title,
        article: book.article,
        description: book.description,
        image: "https://source.unsplash.com/random",
      });
      console.log("Document written with ID: ", book.id);
      alert("更新しました");
      setIsLoading(false);
      history.push("/");
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(firebaseStore, "books", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const newBook: BookType = {
          id: id,
          title: docSnap.data().title,
          article: docSnap.data().article,
          description: docSnap.data().description,
          image: docSnap.data().image,
        };
        setBook(newBook);
      } else {
        console.log("No such document!");
      }
    };
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
