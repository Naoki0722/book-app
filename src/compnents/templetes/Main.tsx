import { memo, ReactNode, VFC } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

type Props = {
  children: ReactNode;
};

export const Main: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});
