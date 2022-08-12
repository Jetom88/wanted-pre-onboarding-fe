import { useNavigate } from "react-router-dom";
import BasicBtn from "../components/common/BasicBtn";
import InputField from "../components/common/InputField";
import InputLayout from "../components/common/InputLayout";
import styles from "./login.module.scss";

const Login = () => {
  const navigetor = useNavigate();
  return (
    <InputLayout>
      <div className={styles.inputFieldSection}>
        <InputField text={"이메일"} placeholder="이메일을 입력해 주세요." />
        <InputField text={"비밀번호"} placeholder="비밀번호를 입력해 주세요." />
      </div>

      <BasicBtn text={"로그인"} active={false} />

      <div className={styles.register}>
        <button
          onClick={() => {
            navigetor("/register");
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
