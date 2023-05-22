import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FollowActionButton from "./FollowActionButton";
import { Link } from "@mui/material";
export default function UserList({ user }) {
  console.log(JSON.stringify(user));

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {user.length &&
        user.map((user) => {
          const labelId = `checkbox-list-secondary-label-${user.id}`;
          return (
            <ListItem
              key={user.id}
              secondaryAction={
                <FollowActionButton
                  followingId={user.id}
                  status={user.status}
                />
              }
            >
              <ListItemButton components={Link} to={`/profile/${user.id}`}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={user.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
