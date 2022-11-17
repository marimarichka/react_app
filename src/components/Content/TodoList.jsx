import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = () => {
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
    <div className={s.todoList}>
      <div className={s.allContent}>
        <div className={s.todoTitle}>
          <input className={s.forText} type="text" onKeyDown={onKeyDown} value={value} onChange={onInputChange} />
          <button onClick={onClick}>Add</button>
        </div>
        <div className={s.todoView}>
            {todos.map((todo) => (
              <TodoItem  
                key={todo.id}
                name={todo.value} 
                deleteTodo={() => deleteTodo(todo.id)} 
                id={todo.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;