import { Container, Link, Typography } from "@mui/material";
import React from "react";

function CopyRight() {
  return (
    <Container maxWidth="md">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

export default CopyRight;
