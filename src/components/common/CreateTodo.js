import styles from "./createTodo.module.scss";

const CreateTodo = ({ onSubmitHandler, onTodoHandler, todo }) => {
  return (
    <form className={styles.create} onSubmit={onSubmitHandler}>
      <input
        placeholder="할 일을 입력해주세요 📝"
        onChange={(e) => {
          onTodoHandler(e);
        }}
        value={todo}
      />
      <button className={styles.btn} type="submit">
        추가
      </button>
    </form>
  );
};
export default CreateTodo;
