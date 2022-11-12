import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import s from "./Content.module.css";

const Content = () => {
  const todos = ['Todo 1', 'Todo 2', 'Todo 3'];

  return (
    <div className={s.content}>
      <div className={s.allContent}>
        <div className={s.todoTitle}>
          <input type = 'text' />
          <button>Add</button>
        </div>
        {todos.map(name => <TodoItem name={name} />)}
      </div>
    </div>
  );
};

export default Content;
