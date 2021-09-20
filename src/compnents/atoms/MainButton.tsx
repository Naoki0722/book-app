import { Button } from "@chakra-ui/button";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const MainButton: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Button
      backgroundColor="cyan.300"
      textColor="gray.500"
      outline="none"
      borderRadius="20px"
      px={10}
    >
      {children}
    </Button>
  );
};
