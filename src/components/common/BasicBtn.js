import React from "react";
import styles from "./basicBtn.module.scss";

const BasicBtn = ({ type, text, active = false }) => {
  return (
    <button
      type={type}
      className={`${styles.basicBtn} ${
        active ? styles.enabled : styles.disabled
      }`}
    >
      <span>{text}</span>
    </button>
  );
};

export default BasicBtn;
