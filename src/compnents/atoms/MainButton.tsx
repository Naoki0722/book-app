import { Button } from "@chakra-ui/button";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  margin?: number;
  onClick: () => void;
  isLoading: boolean;
};

export const MainButton: VFC<Props> = (props) => {
  const { children, margin, onClick, isLoading } = props;
  return (
    <Button
      backgroundColor="cyan.300"
      textColor="gray.500"
      outline="none"
      borderRadius="20px"
      px={10}
      display="block"
      mx="auto"
      my={margin}
      isLoading={isLoading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
