import { Book } from "../compnents/pages/Book";
import { BookDetail } from "../compnents/pages/BookDetail";
import { BookEdit } from "../compnents/pages/BookEdit";

export const BookRoutes = [
  {
    path: "/",
    exact: true,
    children: <Book />,
  },
  {
    path: "/detail/:id",
    exact: true,
    children: <BookDetail />,
  },
  {
    path: "/detail/:id/edit",
    exact: false,
    children: <BookEdit />,
  },
];
