import { Box, Stack, Text, HStack } from "@chakra-ui/layout";
import { ChangeEvent, VFC } from "react";
import { Link } from "react-router-dom";
import { MainButton } from "../atoms/MainButton";
import { Form } from "../molecules/Form";

type Props = {
  title: string;
  buttonMessage: string;
  linkMessage: string;
  link: string;
  onClick: () => void;
  onEmailChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

export const FormArea: VFC<Props> = (props) => {
  const {
    title,
    buttonMessage,
    linkMessage,
    link,
    onClick,
    onEmailChange,
    onPasswordChange,
    isLoading,
  } = props;
  return (
    <Box
      borderRadius="lg"
      maxW="sm"
      borderWidth="1px"
      overflow="hidden"
      p={2}
      mx="auto"
      mt={10}
    >
      <Text fontSize="lg" textAlign="center" p={4}>
        {title}
      </Text>
      <Stack spacing={8}>
        <Form type="email" onChange={onEmailChange}>
          メールアドレス
        </Form>
        <Form type="password" onChange={onPasswordChange}>
          パスワード
        </Form>
      </Stack>
      <MainButton margin={8} onClick={onClick} isLoading={isLoading}>
        {buttonMessage}
      </MainButton>
      <HStack>
        <Text>{linkMessage}</Text>
        <Text color="red.500">
          <Link to={`/${link}`}>こちら</Link>
        </Text>
      </HStack>
    </Box>
  );
};
