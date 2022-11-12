import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import s from "./Content.module.css";

const Content = () => {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setTodos([...todos, value]);
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className={s.content}>
      <div className={s.allContent}>
        <div className={s.todoTitle}>
          <input type='text' onKeyDown={onKeyDown} value={value} onChange={onInputChange} />
          <button onClick={onClick}>Add</button>
        </div>
        {todos.map(name => <TodoItem name={name} />)}
      </div>
    </div>
  );
};

export default Content;
