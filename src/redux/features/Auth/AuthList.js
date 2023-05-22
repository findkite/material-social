import React from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export default function AuthList() {
  const users = useSelector((state) => state.auth.users);

  return (
    <>
      {users &&
        users.map((user) => (
          <List
            key={user.id}
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <ListItemButton onClick={() => console.log(user)}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.first_name + " " + user.last_name}
                secondary={user.username}
              />
            </ListItemButton>
          </List>
        ))}
    </>
  );
}
