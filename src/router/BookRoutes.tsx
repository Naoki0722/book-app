import { Book } from "../compnents/pages/Book";
import { BookDetail } from "../compnents/pages/BookDetail";

export const BookRoutes = [
  {
    path: "/",
    exact: true,
    children: <Book />,
  },
  {
    path: "/detail/:id",
    exact: false,
    children: <BookDetail />,
  },
];
