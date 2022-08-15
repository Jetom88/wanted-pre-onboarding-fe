import styles from "./todoList.module.scss";
import { FcCheckmark } from "react-icons/fc";
import { FiCheck } from "react-icons/fi";
import { DELETE_TODOS, PUT_TODOS } from "../../core/_axios/todos";
import { useState } from "react";

const TodoList = ({
  getTodos,
  todos,
  setTodos,
  todo,
  setTodo,
  edit,
  setEdit,
  completed,
  setCompleted,
}) => {
  const [todoText, setTodoText] = useState(todo.todo);
  const [findTodo, setFindTodo] = useState(0);

  const onDeleteBtn = async () => {
    await DELETE_TODOS(todo.id);
    setTodos([...todos.filter((item) => item.id !== todo.id)]);
  };

  const onEidtHandler = async (e) => {
    const form = {
      todo: todoText,
      isCompleted: completed,
    };
    e.preventDefault();

    try {
      await PUT_TODOS(form, todo.id);

      setTodo("");
      setEdit(false);
      setFindTodo(0);
      getTodos();
    } catch (e) {
      console.log(e);
    }
  };

  const onCompletedHanlder = async () => {
    const form = {
      todo: todoText,
      isCompleted: !todo.isCompleted,
    };

    try {
      await PUT_TODOS(form, todo.id);
      getTodos();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.list}>
        {edit ? (
          <div className={styles.todoInfo}>
            {findTodo === todo.id ? (
              <div className={styles.confirmText}>
                <form className={styles.form} onSubmit={onEidtHandler}>
                  <input
                    className={styles.editText}
                    type="text"
                    defaultValue={todo.todo}
                    onChange={(e) => {
                      setTodoText(e.target.value);
                    }}
                  />
                </form>
                <div className={styles.button}>
                  <button
                    className={styles.cancle}
                    onClick={() => {
                      setEdit(!edit);
                      setFindTodo(0);
                    }}
                  >
                    취소
                  </button>{" "}
                  |{" "}
                  <button
                    type="submit"
                    className={styles.confirm}
                    onClick={onEidtHandler}
                  >
                    확인
                  </button>
                </div>
              </div>
            ) : (
              <p>{todo.todo}</p>
            )}
          </div>
        ) : (
          <div className={styles.todoInfo}>
            <p className={`${todo.isCompleted ? styles.finish : ""}`}>
              {todo.todo}
            </p>
            <div className={styles.button}>
              <p
                onClick={() => {
                  setFindTodo(todo.id);
                  setEdit(!edit);
                }}
              >
                ✏️
              </p>
              <p
                onClick={() => {
                  setCompleted(!completed);
                  onCompletedHanlder();
                }}
              >
                {todo.isCompleted ? <FcCheckmark /> : <FiCheck />}
              </p>
              <p onClick={onDeleteBtn}>🗑</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
