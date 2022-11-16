import React, { useState } from "react";
import Checkbox from '../../../SharedComponents/Checkbox/Checkbox'
import s from "./TodoItem.module.css";

const CloseIcon = ({ deleteTodo }) => (
  <div className={s.closeIcon} onClick={deleteTodo}>
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  </div>
);

const TodoItem = ({ name, deleteTodo, id }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={s.todoItem}>
      <Checkbox label={name} checked={checked} onChange={handleChange} id={id} />
      <CloseIcon deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoItem;
