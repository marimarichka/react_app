import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.css";
import { addTodo, deleteTodo } from "../../redux/slices/todosSlice";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className={s.todoList}>
      <div className={s.allContent}>
        <div className={s.todoTitle}>
          <input className={s.forText} type="text" onKeyDown={onKeyDown} value={value} onChange={onInputChange} />
          <button onClick={onClick}>Add</button>
        </div>
        <div className={s.todoView}>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} name={todo.value} deleteTodo={() => dispatch(deleteTodo(todo.id))} id={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
