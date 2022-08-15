import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTodo from "../components/common/CreateTodo";
import Layout from "../components/common/Layout";
import Nav from "../components/common/Nav";
import TodoList from "../components/common/TodoList";
import { GET_TODOS, POST_TODOS } from "../core/_axios/todos";
import styles from "./todo.module.scss";

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [completed, setCompleted] = useState(false);

  const getTodos = async () => {
    try {
      const res = await GET_TODOS();
      setTodos(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onTodoHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const form = {
        todo,
      };

      if (todo === "") {
        alert("내용을 입력해주세요");
      } else {
        await POST_TODOS(form);

        setTodo("");

        getTodos();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    getTodos();
  }, [todos]);

  return (
    <Layout>
      <Nav />

      <div className={styles.todoSection}>
        <h2>Todo List 📝</h2>

        <CreateTodo
          onSubmitHandler={onSubmitHandler}
          onTodoHandler={onTodoHandler}
          todo={todo}
          edit={edit}
        />
        {todos.length === 0 ? (
          <p className={styles.noTodos}>🤩 처음 할 일을 입력해주세요 🤩</p>
        ) : (
          todos.map((todo) => (
            <TodoList
              key={todo.id}
              getTodos={getTodos}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              setTodo={setTodo}
              edit={edit}
              setEdit={setEdit}
              completed={completed}
              setCompleted={setCompleted}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Todo;
