import styles from "./register.module.scss";
import InputField from "../components/common/InputField";
import InputLayout from "../components/common/InputLayout";
import BasicBtn from "../components/common/BasicBtn";

const Register = () => {
  return (
    <InputLayout>
      <div className={styles.inputFieldSection}>
        <InputField text={"이메일"} placeholder="이메일을 입력해 주세요." />
        <InputField text={"비밀번호"} placeholder="비밀번호를 입력해 주세요." />
      </div>

      <BasicBtn text="가입하기" active={false} />
    </InputLayout>
  );
};

export default Register;
