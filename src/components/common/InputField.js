import styles from "./inputField.module.scss";

const InputField = ({ text, placeholder, onChage, value }) => {
  return (
    <div className={styles.field}>
      <p>{text}</p>
      <input placeholder={placeholder} onChage={onChage} value={value} />
    </div>
  );
};

export default InputField;
