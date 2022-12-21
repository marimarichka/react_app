import React, { useState, useMemo } from "react";
import s from "./Users.module.css";
import SearchInput from "./SearchInput/SearchInput";
import Table from "../../SharedComponents/Table/Table";
import ActiveIcon from "../../SharedComponents/Icons/ActiveIcon/ActiveIcon";
import BlockedIcon from "../../SharedComponents/Icons/BlockedIcon/BlockedIcon";
import ThreeDotsIcon from "../../SharedComponents/Icons/ThreeDotsIcon/ThreeDotsIcon";
import SubRowComponent from "./SubRowComponent/SubRowComponent";
import { useGetUsersQuery } from "../../redux/API/mockAPI";

const statusComponents = {
  Active: ActiveIcon,
  // Blocked: BlockedIcon,
  // Idle: ThreeDotsIcon,
  // Pending: ThreeDotsIcon,
};

const formatUser = (u) => {
  const StatusComponent = statusComponents[u.status];

  return {
    ...u,
    name: u.firstName + " " + u.lastName,
    status: <StatusComponent />,
  };
};

const Users = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useGetUsersQuery("1");

  const mappedUsers = useMemo(() => (data || []).map(formatUser), [data]);

  const filterUsers = mappedUsers.filter((u) => u.name.toUpperCase().includes(searchValue.toUpperCase()));

  return (
    <div className={s.usersWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.usersContent}>
        <Table
          loading={isLoading}
          data={filterUsers}
          header={["Name", "Phone number", "Status"]}
          keys={["name", "phoneNumber", "status"]}
          renderSubRow={(item) => <SubRowComponent item={item} />}
        />
      </div>
    </div>
  );
};

export default Users;
