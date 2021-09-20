import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  type: string;
};

export const Form: VFC<Props> = (props) => {
  const { children, type } = props;
  return (
    <FormControl>
      <FormLabel>{children}</FormLabel>
      <Input type={type} />
    </FormControl>
  );
};
