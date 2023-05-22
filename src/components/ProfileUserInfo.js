import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import NavTabs from "./ProfileTab";
import FollowActionButton from "./FollowActionButton";
import { useSelector } from "react-redux";

function ProfileUserInfo() {
  const user = useSelector((state) => state.user.me);
  return (
    <div>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.data.name !== undefined ? (
        <>
          <Box
            sx={{
              display: "flex",
              marginTop: "40px",
              width: "100%",
              gap: "20px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: "200px", height: "200px" }}
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    flexGrow: 1,
                    alignContent: "center",
                    justifyContent: "center",
                    display: { xs: "flex", sm: "inline-block" },
                  }}
                >
                  {user.data.name.firstName + " " + user.data.name.lastName}
                </Typography>
                <FollowActionButton
                  followingId={user.data.id}
                  status={user.data.status}
                />
              </Box>
              <NavTabs count={user.data._count} />
            </Box>
          </Box>
        </>
      ) : null}
    </div>
  );
}

export default ProfileUserInfo;
