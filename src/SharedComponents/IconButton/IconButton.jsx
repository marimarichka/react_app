import React from "react";
import s from "./IconButton.module.css";

const IconButton = ({ onClick, icon }) => {
  return (
    <div className={s.icon} onClick={onClick}>
      {icon}
    </div>
  );
};

export default IconButton;
