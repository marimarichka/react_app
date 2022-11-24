import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Navbar.module.css";

const navbarElements = [
  {
    path: "/",
    text: "Todo List",
  },
  {
    path: "/users",
    text: "Users",
  },
  {
    path: "/cards",
    text: "Cards",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className={s.navbar}>
      {navbarElements.map(({ path, text }) => (
        <Link key={path} to={path}>
          <div className={pathname === path ? s.todoListActive + " " + s.todoList : s.todoList}>{text}</div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
