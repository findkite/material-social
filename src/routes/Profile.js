import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import { Box, Container } from "@mui/material";
import CopyRight from "../components/CopyRight";
export default function Profile() {
  return (
    <>
      <TopNav />
      <Box className="main">
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Box>

      <CopyRight />
    </>
  );
}
