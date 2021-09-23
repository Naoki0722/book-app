import { useState } from "react";
import { firebaseStore } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { BookType } from "../types/BookType";

type ReturnTypeData = {
  getBooKInfo: () => Promise<void>;
  books: BookType[];
};

export const useBookInfo = (): ReturnTypeData => {
  const [books, setBooks] = useState<BookType[]>([]);
  const getBooKInfo = async () => {
    try {
      const querySnapshot = await getDocs(collection(firebaseStore, "books"));
      const newBooks: BookType[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        newBooks.push({
          id: doc.id,
          title: data.title,
          article: data.article,
          description: data.description,
          image: data.image,
        });
        console.log(newBooks);
      });
      setBooks(newBooks);
    } catch (error: unknown) {
      if (typeof error === "string") {
        console.log(error.toUpperCase());
      } else if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return { getBooKInfo, books };
};
