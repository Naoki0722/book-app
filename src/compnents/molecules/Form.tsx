import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { ChangeEvent, memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Form: VFC<Props> = memo((props) => {
  const { children, type, onChange } = props;
  return (
    <FormControl>
      <FormLabel>{children}</FormLabel>
      <Input type={type} onChange={onChange} />
    </FormControl>
  );
});
