import { Text } from "@chakra-ui/layout";
import { VFC } from "react";
import { useParams } from "react-router-dom";
import { EditCard } from "../organisms/EditCard";
import { Main } from "../templetes/Main";

export const BookEdit: VFC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Main>
      <Text as="h2" fontSize="lg" fontWeight="bold" pl={8} pt={4}>
        本編集画面
      </Text>
      <EditCard id={id} />
    </Main>
  );
};
