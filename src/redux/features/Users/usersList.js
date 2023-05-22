import { useSelector } from "react-redux";

import * as React from "react";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link, ListItemButton } from "@mui/material";
import UserList from "../../../components/UserList";
//import Typography from "@mui/material/Typography";
export const UserView = () => {
  const user = useSelector((state) => state.user.users);

  return (
    <>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.length ? (
        <>
          <UserList user={user} />
        </>
      ) : null}
    </>
  );
};

export default function AlignItemsList({ name, id, username }) {
  return (
    <>
      <ListItemButton
        alignItems="flex-start"
        key={id}
        components={Link}
        to={`/profile/${id}`}
      >
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={username} />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
}
