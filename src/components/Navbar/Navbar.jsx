import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.todoList}>
        Todo List
      </div>
    </div>
  )
};

export default Navbar;