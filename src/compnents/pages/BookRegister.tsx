import { Text } from "@chakra-ui/layout";
import { VFC } from "react";
import { RegisterCard } from "../organisms/RegisterCard";
import { Main } from "../templetes/Main";

export const BookRegister: VFC = () => {
  return (
    <Main>
      <Text as="h2" fontSize="lg" fontWeight="bold" pl={8} pt={4}>
        本登録画面
      </Text>
      <RegisterCard />
    </Main>
  );
};
