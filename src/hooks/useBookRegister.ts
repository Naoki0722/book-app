import { RefObject, useRef, useState } from "react";
import { useHistory } from "react-router";
import { collection, addDoc } from "firebase/firestore";
import { firebaseStore } from "../config/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

type ReturnTypeData = {
  isLoading: boolean;
  registerImage: () => void;
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titleRef: RefObject<HTMLInputElement>;
  articleRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
};

export const useBookRegister = (): ReturnTypeData => {
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState<File>();
  const titleRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setImage(e.target.files[0]);
  }

  const registerImage = async () => {
    if (image) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytesResumable(storageRef, image)
        .then((snapshot) => {
          console.log("Uploaded", snapshot.totalBytes, "bytes.");
          console.log("File metadata:", snapshot.metadata);
          getDownloadURL(snapshot.ref).then((url) => {
            console.log("File available at", url);
            registBookInfo(url,image.name);
          });
        })
        .catch((error) => {
          console.error("Upload failed", error);
        });
    }
  };

  const registBookInfo = async (url: string, name: string) => {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(firebaseStore, "books"), {
        title: titleRef.current?.value,
        article: articleRef.current?.value,
        description: descriptionRef.current?.value,
        image: url,
        imageName: name,
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
  return { isLoading, titleRef, articleRef, descriptionRef, uploadImage,registerImage };
};
