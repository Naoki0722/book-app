import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, useEffect, useState, VFC } from "react";
import { useHistory, useParams } from "react-router";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { firebaseStore } from "../../config/firebase";
import { Image } from "@chakra-ui/image";
import { Main } from "../templetes/Main";
import { SecondaryButton } from "../atoms/SecondaryButton";

export type BookType = {
  title: string;
  article: string;
  description: string;
  image: string;
};

export const BookDetail: VFC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState<BookType>({} as BookType);
  const history = useHistory();

  const onclickDelete = () => {
    const isDeleted = confirm("本当に削除しますか？");
    if (isDeleted) {
      try {
        setIsLoading(true);
        const bookDelete = async () => {
          await deleteDoc(doc(firebaseStore, "books", id));
          alert("Document successfully deleted!");
          setIsLoading(false);
          history.push("/");
        };
        setTimeout(bookDelete, 2000);
      } catch (error) {
        console.log("Error removing document: ", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(firebaseStore, "books", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const newBook: BookType = {
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
    <Main>
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
          <SecondaryButton onClick={onclickDelete} isLoading={isLoading}>
            削除
          </SecondaryButton>
        </Box>
      </Box>
    </Main>
  );
});
