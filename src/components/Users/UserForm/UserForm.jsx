import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./UserForm.module.css";
import { useUpdateUserMutation } from "../../../redux/API/mockAPI";

const formScheme = [
  { id: "firstName", label: "First name" },
  { id: "lastName", label: "Last name" },
  { id: "phoneNumber", label: "Phone" },
  { id: "email", label: "Email" },
  { id: "company", label: "Company" },
];

const UserForm = ({ user, closeDialog }) => {
  const [updateUser] = useUpdateUserMutation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      company: user.company,
    },
  });

  const onSubmit = async (data) => {
    await updateUser({ ...user, ...data })
    closeDialog();
    console.log(data);
  };

  return (
    <div>
      <h2>Edit user</h2>
      <div className={s.userFormWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formScheme.map(({ id, label }) => (
            <Controller
              key={id}
              name={id}
              control={control}
              render={({ field }) => <TextField label={label} sx={{ margin: "10px" }} {...field} />}
            />
          ))}
          <div className={s.saveButton}>
            <Button sx={{ width: "60%", height: "45px" }} variant="contained" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
