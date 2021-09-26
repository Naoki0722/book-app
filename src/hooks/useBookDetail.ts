import { Dispatch, SetStateAction, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";

export type BookType = {
  id: string;
  title: string;
  article: string;
  description: string;
  image: string;
};

type ReturnTypeData = {
  getData: () => Promise<void>;
  book: BookType;
  setBook: Dispatch<SetStateAction<BookType>>;
};

export const useBookDetail = (id: string): ReturnTypeData => {
  console.log("レンダリング2");
  const [book, setBook] = useState<BookType>({} as BookType);

  const getData = async () => {
    const docRef = doc(firebaseStore, "books", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const newBook: BookType = {
        id: id,
        title: docSnap.data().title,
        article: docSnap.data().article,
        description: docSnap.data().description,
        image: docSnap.data().image,
      };
      setBook(newBook);
      console.log("get data");
    } else {
      console.log("No such document!");
    }
  };
  return { book, setBook, getData };
};
