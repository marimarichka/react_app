import React, { Children, useState } from "react";
import Checkbox from "../../../SharedComponents/Checkbox/Checkbox";
import s from "./TodoItem.module.css";
import { X } from "phosphor-react";
import IconButton from "../../../SharedComponents/IconButton/IconButton";

const TodoItem = ({ name, deleteTodo, id }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={s.todoItem}>
      <Checkbox label={name} checked={checked} onChange={handleChange} id={id} />
      <IconButton onClick={deleteTodo} icon={<X />} />
    </div>
  );
};

export default TodoItem;
