import styles from "./register.module.scss";
import InputField from "../components/common/InputField";
import InputLayout from "../components/common/InputLayout";
import BasicBtn from "../components/common/BasicBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_SIGNUP } from "../core/_axios/user";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = {
      email: email,
      password: password,
    };

    try {
      const res = await POST_SIGNUP(form);
      if (res.status === 200 || res.status === 201) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
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

  const regExp = /^[0-9a-z-A-z]*@[0-9a-z-A-z]*\.[a-zA-Z]{2,3}$/i;
  const isValue = email.match(regExp) && password.length >= 8 ? true : false;

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

        {email.length !== 0 && !email.match(regExp) ? (
          <p className={styles.falseText}>이메일 주소가 올바르지 않습니다.</p>
        ) : email.length === 0 ? null : (
          <p className={styles.trueText}>사용 가능한 이메일입니다.</p>
        )}

        <InputField
          type="password"
          text={"비밀번호"}
          placeholder="비밀번호를 입력해 주세요."
          onChange={(e) => onPasswordHandler(e)}
          value={password}
        />
        {password.length !== 0 && password.length < 8 ? (
          <p className={styles.falseText}>
            비밀번호는 8자 이상으로 입력해 주십시오.
          </p>
        ) : null}

        <BasicBtn
          type={"submit"}
          text="가입하기"
          active={isValue}
          disabled={!isValue}
        />
      </form>
    </InputLayout>
  );
};

export default Register;
