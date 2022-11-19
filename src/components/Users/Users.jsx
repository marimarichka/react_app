import React, { useEffect, useState, useRef } from "react";
import s from "./Users.module.css";
import Preloader from "../../SharedComponents/Preloader/Preloader";
import SearchInput from "./SearchInput/SearchInput";

const userAPI = "https://random-data-api.com/api/v2/users?size=30";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(userAPI).then(async (response) => {
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    });
  }, []);

  const filterUsers = users.filter((u) => {
    return (
      u.first_name.toUpperCase().includes(searchValue.toUpperCase()) ||
      u.last_name.toUpperCase().includes(searchValue.toUpperCase())
    );
  });

  const usersTableRef = useRef();

  return (
    <div className={s.usersWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.usersContent}>
        <div
          className={s.usersTable}
          ref={usersTableRef}
          style={{ height: usersTableRef.current?.getBoundingClientRect()?.height }}
        >
          <div className={s.usersHeader}>
            {["Name", "SIN", "Phone number"].map((name) => (
              <div>{name}</div>
            ))}
          </div>
          <div className={s.usersBody}>
            {loading ? (
              <Preloader />
            ) : (
              filterUsers.map(({ first_name, last_name, social_insurance_number, phone_number }) => (
                <div className={s.oneUser}>
                  <div>
                    {first_name + " "}
                    {last_name}
                  </div>
                  <div>{social_insurance_number}</div>
                  <div>{phone_number}</div>
                </div>
              ))
            )}
          </div>
          <div className={s.hiddenDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
