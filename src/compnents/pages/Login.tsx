import { ChangeEvent, memo, useState, VFC } from "react";
import { FormArea } from "../organisms/FormArea";
import { Main } from "../templetes/Main";
import { firebaseAuth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router-dom";

export const Login: VFC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClickLogin = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => {
        console.log(res);
        alert("ログイン完了");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Main>
      <FormArea
        title="ログイン画面"
        buttonMessage="ログイン"
        linkMessage="会員登録の方は"
        link="register"
        onClick={onClickLogin}
        onEmailChange={(e) => onEmailChange(e)}
        onPasswordChange={(e) => onPasswordChange(e)}
      />
    </Main>
  );
});
