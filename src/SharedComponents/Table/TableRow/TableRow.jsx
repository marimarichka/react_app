import React, { useState } from "react";
import s from "./TableRow.module.css";

const TableRow = ({ item, keys, renderSubRow }) => {
  const [isActive, setIsAtive] = useState(false);

  const onClick = () => {
    setIsAtive(!isActive);
  };

  return (
    <div className={`${s.row}${renderSubRow ? ` ${s.clickableRow}` : ""}`}>
      <div onClick={onClick} className={s.oneTableItem}>
        {keys.map((key) => (
          <div>{item[key]}</div>
        ))}
      </div>
      {renderSubRow && <div className={isActive ? s.activeUAI : s.notActiveUAI}>{renderSubRow(item)}</div>}
    </div>
  );
};

export default TableRow;
