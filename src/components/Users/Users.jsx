import React, { useEffect, useState, useRef } from "react";
import s from "./Users.module.css";

const userAPI = 'https://random-data-api.com/api/v2/users?size=30';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(userAPI).then(async (response) => {
      const users = await response.json();
      setUsers(users);
    });
  }, []);

  const usersTableRef = useRef();

  return (
    <div className={s.usersWrapper}>
      <div className={s.usersContent}>
        <div className={s.usersTable} ref={usersTableRef} style={{height: usersTableRef.current?.getBoundingClientRect()?.height}}>
          <div className={s.usersHeader}>
            {["Name", "SIN", "Phone number"].map((name) => (
              <div>{name}</div>
            ))}
          </div>
          <div className={s.usersBody}>
            {users.map(({ first_name, last_name, social_insurance_number, phone_number }) => (
              <div className={s.oneUser}>
                <div>
                  {first_name + " "}
                  {last_name}
                </div>
                <div>{social_insurance_number}</div>
                <div>{phone_number}</div>
              </div>
            ))}
          </div>
          <div className={s.hiddenDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
