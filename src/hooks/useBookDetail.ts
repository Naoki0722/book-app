import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";

export type BookType = {
  id: string;
  title: string;
  article: string;
  description: string;
  image: string;
};

export const useBookDetail = (id: string): BookType => {
  const [book, setBook] = useState<BookType>({} as BookType);

  useEffect(() => {
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
      } else {
        console.log("No such document!");
      }
    };
    getData();
  }, []);
  return book;
};
