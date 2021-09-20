import { ReactNode, VFC } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

type Props = {
  children: ReactNode;
};

export const Main: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
