import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Card, CardContent, Typography } from "@mui/material";

function SignUp() {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: "30px",
        boxShadow: { xs: 0, md: 3 },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 3 }}>
          sign up page
        </Typography>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}

export default SignUp;
