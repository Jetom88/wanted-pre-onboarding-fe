import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTodo from "../components/common/CreateTodo";
import Layout from "../components/common/Layout";
import Nav from "../components/common/Nav";
import { GET_TODOS, POST_TODOS } from "../core/_axios/todos";
import useDebounce from "../hook/useDebounce";
import styles from "./todo.module.scss";

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const getTodos = async () => {
    try {
      const res = await GET_TODOS();
      setTodos(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const debounced = useDebounce(getTodos, 5000);

  const onTodoHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const form = {
        todo,
      };

      await POST_TODOS(form);

      setTodo("");

      getTodos();
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteBtn = async (e) => {};

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    if (debounced) getTodos();
  }, [debounced]);

  return (
    <Layout>
      <Nav />

      <div className={styles.todoSection}>
        <h2>투두리스트</h2>

        <CreateTodo
          onSubmitHandler={onSubmitHandler}
          onTodoHandler={onTodoHandler}
          todo={todo}
        />

        <div className={styles.todoList}>
          {todos.map((list) => (
            <div key={list.id} className={styles.todo}>
              <div className={styles.list}>
                <p>{list.todo}</p>
                <div className={styles.todoInfo}>
                  <p>{list.isCompleted ? "V" : "X"}</p>
                  <p>🗑</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Todo;
