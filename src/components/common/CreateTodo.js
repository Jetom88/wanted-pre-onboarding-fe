import styles from "./createTodo.module.scss";

const CreateTodo = ({ onSubmitHandler, setTodo }) => {
  const onTodoHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form
      className={styles.create}
      onSubmit={onSubmitHandler}
      onChange={(e) => {
        onTodoHandler(e);
      }}
    >
      <input placeholder="할 일을 입력해주세요 📝" />
    </form>
  );
};
export default CreateTodo;
