import React, { useState } from "react";
import Checkbox from "../../../SharedComponents/Checkbox/Checkbox";
import s from "./TodoItem.module.css";
import { X } from "phosphor-react";
import IconButton from "@mui/material/IconButton";

const TodoItem = ({ name, deleteTodo, id }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={s.todoItem}>
      <Checkbox label={name} checked={checked} onChange={handleChange} id={id} />
      <IconButton sx={{marginRight: '5px'}} onClick={deleteTodo} aria-label="delete">
        <X size={15} />
      </IconButton>
    </div>
  );
};

export default TodoItem;
