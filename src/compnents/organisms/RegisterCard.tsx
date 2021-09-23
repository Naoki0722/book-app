import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useRef, useState, VFC } from "react";
import { MainButton } from "../atoms/MainButton";
import { collection, addDoc } from "firebase/firestore";
import { firebaseStore } from "../../config/firebase";
import { useHistory } from "react-router";
// import axios from "axios"; axiosに実装変換予定

export const RegisterCard: VFC = () => {
  const [isLoading, setLoading] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();
  const onClickRegister = async () => {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(firebaseStore, "books"), {
        title: titleRef.current?.value,
        article: articleRef.current?.value,
        description: descriptionRef.current?.value,
        image: "https://source.unsplash.com/random",
      });
      console.log("Document written with ID: ", docRef.id);
      alert("登録しました");
      setLoading(false);
      history.push("/");
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
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
        本の登録
      </Text>
      <Stack spacing={8}>
        <FormControl px={10}>
          <FormLabel>本のタイトル</FormLabel>
          <Input type="text" ref={titleRef} />
        </FormControl>
        <FormControl px={10}>
          <FormLabel>著者名</FormLabel>
          <Input type="text" ref={articleRef} />
        </FormControl>
        <FormControl px={10}>
          <FormLabel>説明</FormLabel>
          <Textarea ref={descriptionRef} />
        </FormControl>
        <Box>
          <MainButton onClick={onClickRegister} isLoading={isLoading}>
            登録
          </MainButton>
        </Box>
      </Stack>
    </Box>
  );
};
