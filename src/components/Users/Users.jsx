import React, { useState, useMemo } from "react";
import s from "./Users.module.css";
import SearchInput from "./SearchInput/SearchInput";
import Table from "../../SharedComponents/Table/Table";
import ActiveIcon from "../../SharedComponents/Icons/ActiveIcon/ActiveIcon";
import BlockedIcon from "../../SharedComponents/Icons/BlockedIcon/BlockedIcon";
import ThreeDotsIcon from "../../SharedComponents/Icons/ThreeDotsIcon/ThreeDotsIcon";
import SubRowComponent from "./SubRowComponent/SubRowComponent";
import { useGetUsersQuery } from "../../redux/API/mockAPI";
import Dialog from "@mui/material/Dialog";
import UserForm from "./UserForm/UserForm";
import IconButton from "@mui/material/IconButton";
import { Trash, Pencil } from "phosphor-react";

const statusComponents = {
  Active: ActiveIcon,
  Blocked: BlockedIcon,
  Idle: ThreeDotsIcon,
  Pending: ThreeDotsIcon,
};

const formatUser = (u, setCurrentUser) => {
  const StatusComponent = statusComponents[u.status];

  return {
    ...u,
    name: u.firstName + " " + u.lastName,
    status: <StatusComponent />,
    delete: (
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          console.log("User has been deleted");
        }}
        aria-label="delete"
      >
        <Trash size={25} />
      </IconButton>
    ),
    edit: (
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          setCurrentUser(u);
        }}
      >
        <Pencil size={25} />
      </IconButton>
    ),
  };
};

const Users = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const { data, isLoading } = useGetUsersQuery("2");

  const mappedUsers = useMemo(() => (data || []).map((u) => formatUser(u, setCurrentUser)), [data]);

  const filterUsers = mappedUsers.filter((u) => u.name.toUpperCase().includes(searchValue.toUpperCase()));

  const closeDialog = () => setCurrentUser(null);

  return (
    <div className={s.usersWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.usersContent}>
        <Table
          loading={isLoading}
          data={filterUsers}
          header={["Name", "Phone number", "Status", "Delete", "Edit"]}
          keys={["name", "phoneNumber", "status", "delete", "edit"]}
          renderSubRow={(item) => <SubRowComponent item={item} />}
        />
      </div>
      <Dialog open={!!currentUser} onClose={closeDialog}>
        {currentUser && <UserForm user={currentUser} closeDialog={closeDialog} />}
      </Dialog>
    </div>
  );
};

export default Users;
