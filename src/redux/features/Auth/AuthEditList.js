import React from "react";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "./authSlice";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";

export const EditUserList = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteUser(user.id))}
        >
          <DeleteIcon />
        </IconButton>
      }
      onClick={() => console.log(user)}
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={user.first_name + " " + user.last_name}
        secondary={user.username}
      />
    </ListItem>
  );
};

export const UserList = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <ListItemButton onClick={() => dispatch(addUser(user))}>
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
  );
};
