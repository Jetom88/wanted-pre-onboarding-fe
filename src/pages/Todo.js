import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTodo from "../components/common/CreateTodo";
import Layout from "../components/common/Layout";
import Nav from "../components/common/Nav";
import { GET_TODOS, POST_TODOS } from "../core/_axios/todos";
import styles from "./todo.module.scss";

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const getTodos = async () => {
    try {
      const res = await GET_TODOS();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    getTodos();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const form = {
        todo,
      };

      const res = await POST_TODOS(form);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <Nav />

      <div className={styles.todoSection}>
        <h2>투두리스트</h2>

        <CreateTodo onSubmitHandler={onSubmitHandler} setTodo={setTodo} />

        <div className={styles.todoList}>
          {todos.map((list) => (
            <div key={list} className={styles.todo}>
              <div className={styles.list}>
                <p>{list.id}</p>
                <p>{list.todo}</p>
                <p>{list.isCompleted ? "V" : "X"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Todo;
