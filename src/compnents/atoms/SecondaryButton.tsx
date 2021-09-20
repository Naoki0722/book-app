import { Button } from "@chakra-ui/button";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  isLoading: boolean;
};

export const SecondaryButton: VFC<Props> = (props) => {
  const { children, onClick, isLoading } = props;
  return (
    <Button colorScheme="red" ml={10} isLoading={isLoading} onClick={onClick}>
      {children}
    </Button>
  );
};
