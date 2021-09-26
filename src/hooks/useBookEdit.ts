import { RefObject, useRef, useState } from "react";
import { useHistory } from "react-router";
import { doc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";
import { BookType } from "../types/BookType";

type ReturnTypeData = {
  isLoading: boolean;
  editBookInfo: () => Promise<void>;
  titleRef: RefObject<HTMLInputElement>;
  articleRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
};

export const useBookEdit = (book: BookType): ReturnTypeData => {
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();

  const editBookInfo = async () => {
    try {
      setIsLoading(true);
      const updateData = doc(firebaseStore, "books", book.id);
      await setDoc(updateData, {
        title: book.title,
        article: book.article,
        description: book.description,
        image: "https://source.unsplash.com/random",
      });
      console.log("Document written with ID: ", book.id);
      alert("更新しました");
      setIsLoading(false);
      history.push("/");
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };
  return { isLoading, titleRef, articleRef, descriptionRef, editBookInfo };
};
