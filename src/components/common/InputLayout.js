import styles from "./inputLayout.module.scss";

const InputLayout = ({ children }) => {
  return (
    <section className={styles.container}>
      <article>
        <h1>
          <img src="../wanted_logo.png" alt="logo" className={styles.logoImg} />
        </h1>

        <div className={styles.text}>
          <h2>
            직장인을 위한 <br /> 커리어 플랫폼, 원티드!
          </h2>
          <p>
            커리어 성장과 행복을 위한 여정 <br /> 지금 원티드에서 시작하세요.
          </p>
        </div>
        {children}
      </article>
    </section>
  );
};
export default InputLayout;
