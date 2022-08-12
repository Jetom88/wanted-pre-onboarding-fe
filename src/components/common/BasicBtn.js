import React from "react";
import styles from "./basicBtn.module.scss";

const BasicBtn = ({ text, active = false }) => {
  return (
    <button
      type="button"
      className={`${styles.basicBtn} ${
        active ? styles.enabled : styles.disabled
      }`}
    >
      <span>{text}</span>
    </button>
  );
};

export default BasicBtn;
