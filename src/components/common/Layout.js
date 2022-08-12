import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <section className={styles.container}>
      <article>{children}</article>
    </section>
  );
};
export default Layout;
