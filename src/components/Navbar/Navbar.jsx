import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Navbar.module.css";

const navbarNavigation = [
  { path: "/", text: "Todo List" },
  { path: "/users", text: "Users" },
  { path: "/cards", text: "Cards" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className={s.navbar}>
      {navbarNavigation.map(({ path, text }) => (
        <Link to={path} key={path}>
          <div className={pathname === { path } ? s.todoListActive + " " + s.todoList : s.todoList}>{text}</div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
