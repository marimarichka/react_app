import React, { useRef } from "react";
import s from "./Table.module.css";
import Preloader from "../../SharedComponents/Preloader/Preloader";
import TableRow from "./TableRow/TableRow";

const Table = ({ loading, data, header, keys, renderSubRow }) => {
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
        {loading ? <Preloader /> : data.map((item) => <TableRow item={item} keys={keys} renderSubRow={renderSubRow} />)}
      </div>
      <div className={s.hiddenDiv}></div>
    </div>
  );
};

export default Table;
