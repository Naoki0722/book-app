import { ChangeEvent, memo, useState, VFC } from "react";
import { FormArea } from "../organisms/FormArea";
import { Main } from "../templetes/Main";
import { firebaseAuth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router";

export const Register: VFC = memo(() => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickRegister = () => {
    setLoading(true);
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("新規登録追加しました、メールを確認お願いします");
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Main>
      <FormArea
        title="会員登録画面"
        buttonMessage="会員登録"
        linkMessage="会員登録済の方は"
        link="login"
        onClick={onClickRegister}
        onEmailChange={(e) => onEmailChange(e)}
        onPasswordChange={(e) => onPasswordChange(e)}
        isLoading={isLoading}
      />
    </Main>
  );
});
