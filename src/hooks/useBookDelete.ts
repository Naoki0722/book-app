import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";
import { useHistory } from "react-router";
import { deleteObject, getStorage, ref } from "@firebase/storage";

type ReturnType = {
  isLoading: boolean;
  bookDelete: () => void;
};

export const useBookDelete = (id: string, imageName: string): ReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const bookDelete = () => {
    try {
      setIsLoading(true);
      const bookDelete = async () => {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${imageName}`);
        await deleteObject(storageRef).then(() => {
          console.log("deleteImageSuccess!")
        }).catch((error) => {
          alert(error);
        });
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
