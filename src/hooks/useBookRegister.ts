import { RefObject, useRef, useState } from "react";
import { useHistory } from "react-router";
import { collection, addDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";

type ReturnTypeData = {
  isLoading: boolean;
  registBookInfo: () => Promise<void>;
  titleRef: RefObject<HTMLInputElement>;
  articleRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
};

export const useBookRegister = (): ReturnTypeData => {
  const [isLoading, setLoading] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();

  const registBookInfo = async () => {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(firebaseStore, "books"), {
        title: titleRef.current?.value,
        article: articleRef.current?.value,
        description: descriptionRef.current?.value,
        image: "https://source.unsplash.com/random",
      });
      console.log("Document written with ID: ", docRef.id);
      alert("登録しました");
      setLoading(false);
      history.push("/");
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return { isLoading, titleRef, articleRef, descriptionRef, registBookInfo };
};
