import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { PasswordInput } from "../components/PasswordInput";
import { AddAuth } from "../redux/features/Auth/AddAuth";
import PublicLayout from "../components/PublicLayout";
function Login() {
  const users = useSelector((state) => state.auth);
  return (
    <PublicLayout>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {users.defaultUser ? (
        <PasswordInput User={users.defaultUser} />
      ) : (
        <AddAuth />
      )}
    </PublicLayout>
  );
}

export default Login;
