import { useSelector } from "react-redux";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
export const PostView = () => {
  const post = useSelector((state) => state.post);
  return (
    <>
      <h2>List of Users</h2>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
      {!post.loading && post.posts.length ? (
        <>
          {post.posts.map((p) => (
            <List
              key={p.id}
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <Post data={p} body={p.content} />
            </List>
          ))}
        </>
      ) : null}
    </>
  );
};

export default function Post({ body, key, data }) {
  return (
    <>
      <ListItem alignItems="flex-start" key={data.key}>
        <ListItemAvatar>
          <Avatar
            alt={data.user.name.firstName + " " + data.user.name.lastName}
            src="/static/images/avatar/2.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="title"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {body}
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
