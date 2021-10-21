import { useEffect, useState, VFC } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";

import { useBookRegister } from "../../hooks/useBookRegister";
import { MainButton } from "../atoms/MainButton";


export const RegisterCard: VFC = () => {
  const { isLoading, titleRef, articleRef, descriptionRef, uploadImage,registerImage } =
    useBookRegister();

  const onClickRegister = () => {
    registerImage();
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
          <FormLabel>画像</FormLabel>
          <input type="file" id="file" onChange={uploadImage} />
        </FormControl>
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
