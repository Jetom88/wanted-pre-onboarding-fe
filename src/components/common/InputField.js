import styles from "./inputField.module.scss";

const InputField = ({ type, text, placeholder, onChange, value }) => {
  return (
    <div className={styles.field}>
      <p>{text}</p>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
