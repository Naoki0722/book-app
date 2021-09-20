import { memo, VFC } from "react";
import { Main } from "../templetes/Main";

export const Home: VFC = memo(() => {
  return (
    <Main>
      <p>トップページ</p>
    </Main>
  );
});
