import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
function PublicLayout({ children }) {
  const users = useSelector((state) => state.auth);
  return users.isAuth ? (
    <Navigate to="/" />
  ) : (
    <Container sx={{ maxWidth: "444px", margin: "auto", width: "100%" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}

export default PublicLayout;
