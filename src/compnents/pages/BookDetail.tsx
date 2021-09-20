import { memo, VFC } from "react";
import { useParams } from "react-router";

export const BookDetail: VFC = memo(() => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <p>Book詳細ページ：{id}番目</p>
    </div>
  );
});
