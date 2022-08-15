import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicBtn from "../components/common/BasicBtn";
import InputField from "../components/common/InputField";
import InputLayout from "../components/common/InputLayout";
import styles from "./login.module.scss";
import { POST_SIGNIN } from "../core/_axios/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    try {
      const res = await POST_SIGNIN(form);

      const getToken = res.data.access_token;

      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("access_token", getToken);
        navigate("/todo");
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

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, []);

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
        />
        {email.length !== 0 && !email.match(regExp) ? (
          <p className={styles.falseText}>이메일 주소가 올바르지 않습니다.</p>
        ) : null}

        <InputField
          type="password"
          text={"비밀번호"}
          placeholder="비밀번호를 입력해 주세요."
          onChange={(e) => onPasswordHandler(e)}
        />
        {password.length !== 0 && password.length < 8 ? (
          <p className={styles.falseText}>
            비밀번호는 8자 이상으로 입력해 주십시오.
          </p>
        ) : null}

        <BasicBtn
          type={"submit"}
          text={"로그인"}
          active={isValue}
          disabled={!isValue}
        />
      </form>

      <div className={styles.goRegister}>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </div>

      <div className={styles.infoText}>
        <p>
          회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.
        </p>
      </div>
    </InputLayout>
  );
};

export default Login;
