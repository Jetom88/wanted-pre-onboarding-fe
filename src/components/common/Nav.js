import { useNavigate } from "react-router-dom";
import styles from "./nav.module.scss";

const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return null;
    } else {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <nav className={styles.nav}>
      <img src="../wanted_logo.png" alt="logo" className={styles.logoImg} />
      <p onClick={logout}>로그아웃</p>
    </nav>
  );
};

export default Nav;
