import React from "react";
import s from './Header.module.css';
import logo from '../../img/1257338-middle.png';

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt={"logo"} />
      <div className={s.title}>
        Company X
      </div>
    </header>
  )
};

export default Header;