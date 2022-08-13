import React from "react";
import styles from "./basicBtn.module.scss";

const BasicBtn = ({ type, text, active = false, disabled }) => {
  return (
    <button
      type={type}
      className={`${styles.basicBtn} ${
        active ? styles.enabled : styles.disabled
      }`}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};

export default BasicBtn;
