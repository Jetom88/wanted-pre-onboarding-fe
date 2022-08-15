import styles from "./createTodo.module.scss";

const CreateTodo = ({ onSubmitHandler, onTodoHandler, todo, edit }) => {
  return edit ? (
    <div className={styles.editMode}>텍스트 수정중엔 이용할 수 없습니다.</div>
  ) : (
    <form className={styles.create} onSubmit={onSubmitHandler}>
      <input
        placeholder="내용을 입력해주세요"
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
