import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import PasswordForm from "./PasswordForm";
import UserInputForm from "./UserInputForm";

function LoginForm() {
  const [userInput, setUserInput] = React.useState();

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: "30px",
        boxShadow: { xs: 0, md: 3 },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          sign in page
        </Typography>

        {userInput ? (
          <PasswordForm userInput={userInput} />
        ) : (
          <UserInputForm setUserInput={setUserInput} />
        )}
      </CardContent>
    </Card>
  );
}

export default LoginForm;
