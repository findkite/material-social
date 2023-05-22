import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import UserAccountMenu from "./UserAccountMenu";
import { Link } from "@mui/material";

const pages = [
  {
    id: 1,
    name: "settings",
    url: "/settings",
  },
  { id: 2, name: "profile", url: "/profile" },
];

function TopNav() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 0.5 }} />
          <Typography
            variant="body1"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            findKite
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 0.5 }} />
          <Typography
            variant="body1"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            findKite
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                variant="text"
                component={Link}
                href={page.url}
                key={page.id}
                sx={{ color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <UserAccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopNav;
