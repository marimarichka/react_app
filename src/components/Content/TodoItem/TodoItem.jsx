import React from "react";
import s from "./TodoItem.module.css";

const TodoItem = ({name}) => {
  return (
        <div className={s.todoItem}>
          {name}
        </div>
  );
};

export default TodoItem;
