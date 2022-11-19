import React, { useRef, useState } from "react";
import SearchIcon from "../../../SharedComponents/SearchIcon/SearchIcon";
import s from "../SearchInput/SearchInput.module.css";

export default function SearchInput({searchValue, setSearchValue}) {

  const [isActive, setIsAtive] = useState(false);

  const inputRef = useRef();

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onClick = () => {
    setSearchValue("");
    setIsAtive(true);
    inputRef.current.focus();
  };

  return (
    <div className={s.forSearching}>
      <input
        ref={inputRef}
        onFocus={() => {
          console.log(1, inputRef);
        }}
        onBlur={() => {
          setIsAtive(false);
        }}
        className={s.forSearchInput}
        style={{ width: isActive ? "220px" : "0", padding: isActive ? "0 10px 0 10px" : "0" }}
        type="text"
        value={searchValue}
        onChange={onInputChange}
      />
      <div onClick={onClick} className={s.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}
