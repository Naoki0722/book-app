import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";
import { useHistory } from "react-router";

type ReturnType = {
  isLoading: boolean;
  bookDelete: () => void;
};

export const useBookDelete = (id: string): ReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const bookDelete = () => {
    try {
      setIsLoading(true);
      const bookDelete = async () => {
        await deleteDoc(doc(firebaseStore, "books", id));
        alert("Document successfully deleted!");
        setIsLoading(false);
        history.push("/");
      };
      setTimeout(bookDelete, 2000);
    } catch (error) {
      console.log("Error removing document: ", error);
      setIsLoading(false);
    }
  };
  return { isLoading, bookDelete };
};
