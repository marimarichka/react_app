import React, { useEffect, useState } from "react";
import s from "./Users.module.css";
import SearchInput from "./SearchInput/SearchInput";
import Table from "../../SharedComponents/Table/Table";
import ActiveIcon from "../../SharedComponents/Icons/ActiveIcon/ActiveIcon";
import BlockedIcon from "../../SharedComponents/Icons/BlockedIcon/BlockedIcon";
import ThreeDotsIcon from "../../SharedComponents/Icons/ThreeDotsIcon/ThreeDotsIcon";
import SubRowComponent from "./SubRowComponent/SubRowComponent";

const userAPI = "https://random-data-api.com/api/v2/users?size=30";

const getStatus = (user) => {
  if (user.subscription.status === "Active") {
    return <ActiveIcon />;
  } else if (user.subscription.status === "Blocked") {
    return <BlockedIcon />;
  } else {
    return <ThreeDotsIcon />;
  }
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(userAPI).then(async (response) => {
      const users = await response.json();
      setUsers(
        users.map((u) => ({
          ...u,
          name: u.first_name + " " + u.last_name,
          status: getStatus(u),
        }))
      );
      setLoading(false);
    });
  }, []);

  const filterUsers = users.filter((u) => u.name.toUpperCase().includes(searchValue.toUpperCase()));

  return (
    <div className={s.usersWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.usersContent}>
        <Table
          loading={loading}
          data={filterUsers}
          header={["Name", "SIN", "Status"]}
          keys={["name", "social_insurance_number", "status"]}
          renderSubRow={(item) => <SubRowComponent item={item} />}
        />
      </div>
    </div>
  );
};

export default Users;
