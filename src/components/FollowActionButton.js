import React from "react";
import http from "../http";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateStatus } from "../redux/features/Users/usersSlice";

export default function FollowActionButton({ followingId, status }) {
  const [button, setButton] = React.useState(() => status);
  const [disabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();
  const handleClick = (action) => {
    setDisabled(true);
    http.post(`/user/${action}`, { followingId }).then((res) => {
      setButton(res.data);
      dispatch(updateStatus({ id: followingId, status: res.data }));
      setDisabled(false);
    });
  };
  return (
    <>
      {button && button.text !== "me" ? (
        <Button
          disabled={disabled}
          onClick={() => handleClick(button.action)}
          color={button.text === "friend" ? "success" : "info"}
          variant={
            button.text === "follow" || button.text === "friend"
              ? "contained"
              : "outlined"
          }
        >
          {button.text}
        </Button>
      ) : (
        <Button color="info" variant="contained" href="/settings">
          settings
        </Button>
      )}
    </>
  );
}
