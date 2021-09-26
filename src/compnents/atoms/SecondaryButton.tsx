import { Button } from "@chakra-ui/button";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  isLoading: boolean;
  color?: string;
};

export const SecondaryButton: VFC<Props> = (props) => {
  const { children, onClick, isLoading, color } = props;
  return (
    <Button
      colorScheme={color}
      ml={10}
      isLoading={isLoading}
      onClick={onClick}
      _focus={{ outline: "none" }}
    >
      {children}
    </Button>
  );
};
