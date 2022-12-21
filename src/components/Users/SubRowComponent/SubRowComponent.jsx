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
          <div>{item.city}, {item.country}</div>
          <div>{item.email}</div>
        </div>
        <div className={s.secondColumn}>
          <div>{item.phoneNumber}</div>
          <div>{item.company}</div>
        </div>
      </div>
    </div>
  );
};

export default SubRowComponent;
