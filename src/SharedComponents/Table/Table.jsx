import React, { useRef } from "react";
import s from "./Table.module.css";
import Preloader from "../../SharedComponents/Preloader/Preloader";

const Table = ({ loading, data, header, keys }) => {
  const usersTableRef = useRef();

  return (
    <div
      className={s.tablesTable}
      ref={usersTableRef}
      style={{ height: usersTableRef.current?.getBoundingClientRect()?.height }}
    >
      <div className={s.tablesHeader}>
        {header.map((name) => (
          <div>{name}</div>
        ))}
      </div>
      <div className={s.tablesBody}>
        {loading ? (
          <Preloader />
        ) : (
          data.map((item) => (
            <div className={s.oneTableItem}>
              {keys.map(key => <div>{item[key]}</div>)}
            </div>
          ))
        )}
      </div>
      <div className={s.hiddenDiv}></div>
    </div>
  );
};

export default Table;
