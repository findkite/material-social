import { List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EditUserList, UserList } from "../redux/features/Auth/AuthEditList";

export default function LocalUserList({ setUsername }) {
  const [listEdit, setListEdit] = useState(false);
  const users = useSelector((state) => state.auth.users);

  return (
    <>
      {users &&
        users.map((user) => (
          <List
            key={user.id}
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            {users && listEdit ? (
              <EditUserList user={user} />
            ) : (
              <UserList user={user} />
            )}
            {!listEdit && (
              <ListItemButton
                onClick={() => {
                  setListEdit(true);

                  setUsername(user.username);
                }}
              >
                <ListItemText
                  primary="edit account"
                  secondary="remove account"
                />
              </ListItemButton>
            )}
          </List>
        ))}
    </>
  );
}
