import { Text } from "@chakra-ui/layout";
import { VFC } from "react";
import { BookCard } from "../organisms/BookCard";
import { Main } from "../templetes/Main";

export const Home: VFC = () => {
  return (
    <Main>
      <Text as="h2" fontSize="lg" fontWeight="bold" pl={8} pt={4}>
        本一覧
      </Text>
      <BookCard />
    </Main>
  );
};
