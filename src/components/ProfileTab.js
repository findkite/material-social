import * as React from "react";
import Box from "@mui/material/Box";
import { Button, ButtonGroup } from "@mui/material";

export default function NavTabs({ count }) {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: { xs: "center", sm: "center", md: "end" },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        <Button key="one">posts {count.posts}</Button>
        <Button key="two">followings {count.following}</Button>
        <Button key="three">followers {count.followers}</Button>
      </ButtonGroup>
    </Box>
  );
}
