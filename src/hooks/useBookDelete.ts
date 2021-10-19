import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";
import { useHistory } from "react-router";
import { getStorage, ref } from "@firebase/storage";

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
        const storage = getStorage();
        // const storageRef = ref(storage, `images/${image.name}`);
        await deleteDoc(doc(firebaseStore, "books", id));
        // await delete();
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
