import styles from "./register.module.scss";
import InputField from "../components/common/InputField";
import InputLayout from "../components/common/InputLayout";
import BasicBtn from "../components/common/BasicBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_REGISTER } from "../core/_axios/user";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = {
      email: email,
      password: password,
    };

    try {
      const res = await POST_REGISTER(form);
      if (res.status === 200 || res.status === 201) {
        navigator("/");
      }
    } catch (e) {
      const res = e.response;
      if (res.status === 400) {
        alert(res.data.message);
      }
    }
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <InputLayout>
      <form className={styles.inputFieldSection} onSubmit={onSubmit}>
        <InputField
          type="email"
          text={"이메일"}
          placeholder="이메일을 입력해 주세요."
          onChange={(e) => onEmailHandler(e)}
          value={email}
        />

        <InputField
          type="password"
          text={"비밀번호"}
          placeholder="비밀번호를 입력해 주세요."
          onChange={(e) => onPasswordHandler(e)}
          value={password}
        />

        <BasicBtn
          type={"submit"}
          text="가입하기"
          active={email.includes("@") && password.length >= 8 ? true : false}
        />
      </form>
    </InputLayout>
  );
};

export default Register;
