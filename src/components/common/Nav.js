import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
          alt="hamberger menu"
          className={styles.hamberger}
        />
        <img src="../wanted_logo.png" alt="logo" className={styles.logoImg} />
      </div>
    </nav>
  );
};

export default Nav;
