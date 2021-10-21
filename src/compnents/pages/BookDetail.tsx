import { memo, useEffect, VFC } from "react";
import { useParams } from "react-router";

import { Main } from "../templetes/Main";
import { useBookDetail } from "../../hooks/useBookDetail";
import { useBookDelete } from "../../hooks/useBookDelete";
import { BookDetailCard } from "../organisms/BookDetailCard";

export const BookDetail: VFC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { book, getData } = useBookDetail(id);
  const { isLoading, bookDelete } = useBookDelete(id,book.imageName);

  const onclickDelete = () => {
    const isDeleted = confirm("本当に削除しますか？");
    if (isDeleted) {
      bookDelete();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Main>
      <BookDetailCard
        book={book}
        onClick={onclickDelete}
        isLoading={isLoading}
      />
    </Main>
  );
});
