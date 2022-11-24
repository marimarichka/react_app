import React from "react";
import s from "./SubRowComponent.module.css";

const SubRowComponent = ({ item }) => {
  return (
    <div className={s.userAIWrapper}>
      <div className={s.userAvatar}>
        <img src={item.avatar} alt="avatar" />
      </div>
      <div className={s.userAITable}>
        <div className={s.firstColumn}>
          <div>{item.username}</div>
          <div>{item.email}</div>
        </div>
        <div className={s.secondColumn}>
          <div>{item.phone_number}</div>
          <div>{item.employment.title}</div>
        </div>
      </div>
    </div>
  );
};

export default SubRowComponent;
