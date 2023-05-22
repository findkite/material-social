import React from "react";
import { Typography } from "@mui/material";
//import RegisterForm from "../components/RegisterForm";
import PublicLayout from "../components/PublicLayout";
import SignUpForm from "../components/SignUpForm";
function Register() {
  return (
    <PublicLayout>
      <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
        Sign Up
      </Typography>
      <SignUpForm />
    </PublicLayout>
  );
}

export default Register;
