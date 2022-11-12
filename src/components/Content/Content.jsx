import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import s from "./Content.module.css";

const Content = () => {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    const newTodo = {
      value,
      id: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => id !== todo.id);
    setTodos(newTodo);
  };

  return (
    <div className={s.content}>
      <div className={s.allContent}>
        <div className={s.todoTitle}>
          <input type="text" onKeyDown={onKeyDown} value={value} onChange={onInputChange} />
          <button onClick={onClick}>Add</button>
        </div>
        <div className={s.todoList}>
          {todos.map((todo, i) => (
            <TodoItem name={todo.value} number={i + 1} deleteTodo={() => deleteTodo(todo.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
